/**
 * Created by AbhishekG on 7/13/2016.
 */

import {Types} from 'mongoose';
import {service, inject} from 'nodedata/di/decorators';
import {RSDSLModel} from "../models/rsDSLModel";
import RSDSLRepository from "../repositories/rsDSLRepository";
var fs = require('fs');
var q= require('q');
var requireFromString = require('require-from-string');

@service()
export class ExecutionService {

    @inject()
    rsDSLRepository:RSDSLRepository;
    
   executeDSL(rsDslID:Types.ObjectId,assignModel){
       let _self=this;
       let level= 0;
       let promises = [];
       var defer = q.defer();
       _self.rsDSLRepository.findOne(rsDslID).then((rsDsl:RSDSLModel) => {
           var input = rsDsl.definition;
           var virtualModule = requireFromString(input);
           var obj = new virtualModule();
           _self.purgeCache("./executor.js");
           var embeddedDsls = obj.embeddedDsls();
           if (embeddedDsls.length > 0) {
               embeddedDsls.forEach(function (dsl) {
                   promises.push(_self.dslChain(dsl, level + 1));
               });
               q.all(promises).then(function (data) {
                   var dslObject = _self.createDslObject(data, input, level);
                   dslObject.init(assignModel);
                   assignModel = dslObject.main();
                   defer.resolve(assignModel);
               });
           }
           else {
               obj.init(assignModel);
               assignModel = obj.main();
               defer.resolve(assignModel);
           }
       }).catch((err) => {
           defer.reject(err);
       });
       return defer.promise;
   }

    replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    createDslObject(embeddedDslObj, mainDslContent, level)
    {
        let _self=this;
        var dicList = {};
        for(var i = 0; i< embeddedDslObj.length ; i++){
            var name = embeddedDslObj[i].getName()
            var variableName = name +"_" + level + "_"+ "_00_" + i;
            var find = '"%' + name + '%"';
            var replace = 'dslDictionary["' + variableName + '"]';
            mainDslContent = _self.replaceAll(mainDslContent, find, replace)
            //console.log(mainDslContent);
            dicList[variableName] = embeddedDslObj[i];
        }
        _self.purgeCache('./executor.js');

        //for(var i= 0; i< require.cache[require.resolve('./executor.js')].children.length;)
        var dslClass =  requireFromString(mainDslContent);
        var dslObject = new dslClass();
        for (var prop in dicList) {
            if (dicList.hasOwnProperty(prop)) {
                dslObject.addDslMapping(prop, dicList[prop]);
            }
        }
        return dslObject;
    }

    purgeCache(moduleName) {
        // Traverse the cache looking for the files
        // loaded by the specified module name
        this.searchCache(moduleName, function (mod) {
            delete require.cache[mod.id];
        });

        // Remove cached paths to the module.
        // Thanks to @bentael for pointing this out.
        Object.keys(module.constructor._pathCache).forEach(function(cacheKey) {
            if (cacheKey.indexOf(moduleName)>0) {
                delete module.constructor._pathCache[cacheKey];
            }
        });
    };

    searchCache(moduleName, callback) {
        // Resolve the module identified by the specified name
        var mod = require.resolve(moduleName);

        // Check if the module has been resolved and found within
        // the cache
        if (mod && ((mod = require.cache[mod]) !== undefined)) {
            // Recursively go over the results
            (function traverse(mod) {
                // Go over each of the module's children and
                // traverse them
                mod.children.forEach(function (child) {
                    traverse(child);
                });

                // Call the specified callback providing the
                // found cached module
                callback(mod);
            }(mod));
        }
    }

    dslChain(dslName, level) {
        var defer = q.defer();
        let _self=this;

        //getDslByName(dslName).then(function(childRsDsl){

        _self.rsDSLRepository.findByField("name",dslName).then((childRsDsl) => {
            var input = childRsDsl.definition;
            var virtualModule = requireFromString(input);
            var obj = new virtualModule();
            _self.purgeCache("./executor.js");
            if(obj.embeddedDsls().length > 0){
                var promises = [];
                obj.embeddedDsls().forEach(function(dsl) {
                    promises.push(_self.dslChain(dsl, level + 1));
                });
                q.all(promises).then(function(data){
                    var dslObject = _self.createDslObject(data, input, level)
                    defer.resolve(dslObject);
                });
            }
            else{
                defer.resolve(obj);
            }
        });


        //});
        return defer.promise;
    }
}

export default ExecutionService;

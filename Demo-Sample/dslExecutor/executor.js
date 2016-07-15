var fs = require('fs');
var q= require('q');
var requireFromString = require('require-from-string');
//var connect = require('connect');
//var serveStatic = require('serve-static');
//var dslFileName = "jobchanged";
//var person = {"name": "vivek", "age": 29, "current" : {"title": "lead"}, History: [{"title": "developer"}]};

//connect().use(serveStatic(__dirname)).listen(8080, function(){
//    //var newJobChanged = new jobChanged();
//    //newJobChanged.init(person);
//    //newJobChanged.main();
//    execute(dslFileName).then(function () {
//        console.log("did")
//    });
//    console.log('Server running on 8080...');
//});

function Executor(dslId, inputObject) {
    this.execute = function () {
        var defer = q.defer();
        dslChain(dslId, 0).then(function(data){
            data.init(inputObject);
            data.main();
            defer.resolve(data);
        });
        return defer.promise;
    }
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function dslChain(dslId, level){
    var defer = q.defer();
    // get dsl
    fs.readFile(file, 'utf8', function(err, contents) {
        var input = contents;
        var virtualModule = requireFromString(input);
        var obj = new virtualModule();
        purgeCache("./executor.js");
        if(obj.embeddedDsls().length > 0){
            var promises = [];
            obj.embeddedDsls().forEach(function(dsl) {
                promises.push(dslChain(dsl, level + 1));
            });
            q.all(promises).then(function(data){
                var dslObject = createDslObject(data, input, level)
                defer.resolve(dslObject);
            });
        }
        else{
            defer.resolve(obj);
        }
    });
    return defer.promise;
}

function createDslObject(embeddedDslObj, mainDslContent, level)
{
    var dicList = {};
    for(var i = 0; i< embeddedDslObj.length ; i++){
        var name = embeddedDslObj[i].getName()
        var variableName = name +"_" + level + "_"+ "_00_" + i;
        var find = '"%' + name + '%"';
        var replace = 'dslDictionary["' + variableName + '"]';
        mainDslContent = replaceAll(mainDslContent, find, replace)
        //console.log(mainDslContent);
        dicList[variableName] = embeddedDslObj[i];
    }
    purgeCache('./executor.js');

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


/**
 * Removes a module from the cache
 */
function purgeCache(moduleName) {
    // Traverse the cache looking for the files
    // loaded by the specified module name
    searchCache(moduleName, function (mod) {
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

/**
 * Traverses the cache to search for all the cached
 * files of the specified module name
 */
function searchCache(moduleName, callback) {
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
};
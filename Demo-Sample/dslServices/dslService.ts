/**
 * Created by AbhishekG on 7/15/2016.
 */

var antlr4 = require('antlr4/index');
var fs = require('fs');
var requireFromString = require('require-from-string');
import {service,inject} from 'nodedata/di/decorators';
import * as RSDSLRepository from "../repositories/rsDSLRepository";

//import * as di from "../dslCreator/DI.js";
import AssignmentRepository from "../repositories/assignmentRepository";
import {RSDSLModel} from "../models/rsDSLModel";
import {AssignmentModel} from "../models/assignmentModel";

var di = require("../dslCreator/DI");
//var xyz = require("./xyz.js");
//var config = require("../config");

var RealSocialableGrammarParser = require("../dslCreator/grammar/RealSocialableGrammarParser.js").RealSocialableGrammarParser;
var RealSocialableGrammarLexer = require("../dslCreator/grammar/RealSocialableGrammarLexer.js").RealSocialableGrammarLexer;
var treeVisitor = di.getInstance("TreeVisitor");

@service()
export class dslService{

    @inject(RSDSLRepository)
    rsDSLRepository: RSDSLRepository.RSDSLRepository;

    @inject()
    dslAssignmentRepository : AssignmentRepository;

    public createDSL(expression){
        var _self = this;
        var input = expression;
        var chars = new antlr4.InputStream(input);
        var lexer = new RealSocialableGrammarLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new RealSocialableGrammarParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.prog();// 'block' is the start rule
        treeVisitor.visitProg(tree);

        var codeString = treeVisitor.getClassString();
        var virtualModule = requireFromString(codeString);

        let rsDSLObj:RSDSLModel = new RSDSLModel();
        rsDSLObj.name = treeVisitor.className;
        rsDSLObj.definition = codeString;
        rsDSLObj.expression = input;

       return _self.rsDSLRepository.post(rsDSLObj).then((result:RSDSLModel)=>{
            let DSLAssignmentObj : AssignmentModel = new AssignmentModel();
            DSLAssignmentObj.dsl = result;
            DSLAssignmentObj.model = "rsICPerson";
            DSLAssignmentObj.modelId= "" ;
           return _self.dslAssignmentRepository.post(DSLAssignmentObj);
        }).catch((err) => {
            return err;
        });
            //content = user expression, code string is dsl output, for the integration model is rsperson, modelid is person id
            //save dsl in the dsl
            //assign to all the person (lets have 5 person in the table)
    }


}

export default dslService;


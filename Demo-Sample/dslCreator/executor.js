var antlr4 = require('antlr4/index');
var di = require("./DI.js");
var fs = require('fs');
var requireFromString = require('require-from-string');

var config = require("../config");
var rsDSLRepo = require("../repositories/rsDSLRepository.js");
var dslAssignRepo = require("../repositories/assignmentRepository.js");


var RealSocialableGrammarParser = require("./grammar/RealSocialableGrammarParser.js").RealSocialableGrammarParser;
var RealSocialableGrammarLexer = require("./grammar/RealSocialableGrammarLexer.js").RealSocialableGrammarLexer;
var treeVisitor = di.getInstance("TreeVisitor");

fs.readFile('D:\\Learning\\dslSetup\\demo-sample\\Demo-Sample\\dslCreator\\t.expr', 'utf8', function(err, contents) {
    var input = contents;
    console.log(input);
    var chars = new antlr4.InputStream(input);
    var lexer = new RealSocialableGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new RealSocialableGrammarParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.prog();// 'block' is the start rule
    treeVisitor.visitProg(tree);

    var codeString = treeVisitor.getClassString();
    var virtualModule = requireFromString(codeString);

           //  var rsDSLObj ={};
           //  rsDSLObj.name = treeVisitor.className;
           //  rsDSLObj.definition = codeString;
           //  rsDSLObj.expression = input;
           //  var rsDSLRepoObj = new rsDSLRepo();
           //  var dslAssignRepoObj = new dslAssignRepo();
           // return rsDSLRepoObj.post(rsDSLObj, function(result){
           //     var DSLAssignmentObj  = new AssignmentModel();
           //     DSLAssignmentObj.dsl = result;
           //     DSLAssignmentObj.model = "rsICPerson";
           //     DSLAssignmentObj.modelId= "" ;
           //     return dslAssignRepoObj.post(DSLAssignmentObj);
           // },function (error) {
           //     console.log(error);
           // });

    //content = user expression, code string is dsl output, for the integration model is rsperson, modelid is person id
    //save dsl in the dsl
    //assign to all the person (lets have 5 person in the table)
});

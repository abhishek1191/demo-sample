var Enumerable = require('linq');
var baseClass = require('./RealSocialableGrammarVisitor.js').RealSocialableGrammarVisitor;
var classObj;


function TreeVisitor(constant) {
   console.log('abc')
    var classString = 'var Enumerable = require(\"linq\");';
    var className;
    classObj = this;
    classObj.embeddeddsls = [];
    classObj.constant = constant;
    classObj.className;
    baseClass.call(this);
    classObj.appendToClass = function(toAppend){
        classString = classString + toAppend;
    }
    classObj.getClassString = function(){
        return classString;// + protoStr + protoTypeString + exportStr;
    }

    // 'name =' ID NEWLINE inputs NEWLINE (stat)+;
    classObj.visitProg = function(ctx) {
        console.log('df');
        var name = ctx.ID().getText();
        classObj.className = name;
        str = "function "+ name + "(){";
        classObj.appendToClass(str);
        var classString = 'this.getName = function(){return "' + name + '";};';
        classObj.appendToClass(classString);

        var inputs = classObj.visit(ctx.inputs());
        classObj.inputs = inputs;
        // add global variables

        var localVar =  classObj.createLocalVariables(inputs);
        classObj.appendToClass(localVar);
        classObj.appendToClass('var dslDictionary = {}; var saveVariables = [];');
        var addDsldictionary = 'this.addDslMapping = function(name,obj){dslDictionary[name] = obj;};';
        var addSaveList = 'this.addSaveList = function(obj){saveVariables.push(obj);};';
        classObj.appendToClass(addDsldictionary);
        classObj.appendToClass(addSaveList);

        var initFunctionStr = 'this.init = function(' + classObj.getCommaSepratedKeys(inputs, "_") + '){';
        classObj.appendToClass(initFunctionStr);
        var assignLocalVariables =  classObj.assignLocalVariables(inputs);
        classObj.appendToClass(assignLocalVariables);
        classObj.appendToClass('};');

        var inputsString = 'this.inputRequired = function(){ return ' + JSON.stringify(inputs) + ';};';
        classObj.appendToClass(inputsString);

        var mainFunctionString = 'this.main = function(){'
        classObj.appendToClass(mainFunctionString);
        classObj.visit(ctx.block());
        classObj.appendToClass('};');
        var embeddedDslString = 'this.embeddedDsls = function(){ return' + JSON.stringify(classObj.embeddeddsls) + ';};';
        classObj.appendToClass(embeddedDslString);
        classObj.appendToClass('}')
        classObj.appendToClass('module.exports =' + name + ';');
    };

    classObj.createLocalVariables = function(obj){
        var str = '';
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                str +=  'var ' +prop+"; " ;
            }
        }
        return str;
    };

    classObj.visitSave = function(ctx){
        Enumerable.from(ctx.variable()).forEach(function(x){
            var variableName = classObj.visit(x);
            // check for if exists
            var str = 'this.addSaveList('+variableName + ');';
            classObj.appendToClass(str);
        })
    };

    classObj.visitDslAssignment = function(ctx){
        var variableName = classObj.visit(ctx.variable());
        var embeddedDsl = classObj.visit(ctx.embeddeddsl());
        var identifire = '"%'+ embeddedDsl.dslName + '%"';

        var dslString = identifire +'.init('+ embeddedDsl.fields + ');'
        classObj.appendToClass(dslString);
        var varStr = 'var ';
        if(classObj.inputs[variableName]){
            varStr = '';
        }
        dslString = varStr + variableName + '=' + identifire +'.main();'
        classObj.appendToClass(dslString);
    };

    classObj.visitEmbeddeddsl = function(ctx){
        var dslName = classObj.visit(ctx.dslName());
        if(classObj.embeddeddsls.indexOf(dslName) == -1)
            classObj.embeddeddsls.push(dslName);
        var fields = classObj.visit(ctx.variableAssignments());
        return {'dslName': dslName, 'fields': fields};
    };

    classObj.visitDslName = function(ctx){
        return ctx.ID().getText();
    };

    classObj.visitVariableAssignments = function(ctx){
        return ctx.getText();
    };

    classObj.assignLocalVariables = function(obj){
        var str = '';
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                str += prop+' = ' + '_'+prop +';' ;
            }
        }
        return str;
    }

    classObj.getCommaSepratedKeys = function(obj, append){
        if(!append){
            append = '';
        }
        var keys = [];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                keys.push(append + prop);
            }
        }
        return keys.join()
    }

    classObj.visitInputs = function(ctx){
        var inputDictionary = {};
        for(var i = 0; i< ctx.input().length; i++){
            var value = classObj.visit(ctx.input()[i]);
            inputDictionary[value.variableName] = value;
        }
        return inputDictionary;
    };

    classObj.visitInput = function(ctx){
        var type = "Object";
        if(ctx.getText().indexOf("[") > -1){
            type = "Array";
        }
        var variableName = classObj.visit(ctx.variable());
        var model = classObj.visit(ctx.model());
        return {'variableName':variableName, 'model': model, 'type': type};
    };

    classObj.visitBlock = function(ctx) {
        classObj.visit(ctx.children);
    };

    classObj.visitStat = function(ctx) {
        classObj.visit(ctx.children);
    };


    //variable ('=' expr)? ';'
    //variable:
    //    ID
    //    ;
    classObj.visitSimplevariabledecl = function(ctx) {
        var variableName = classObj.visit(ctx.variable());
        //if variable do not exists
        var str = 'var '+ variableName;
        var value;
        if(ctx.expr()){
            value = classObj.visit(ctx.expr());
            str = str + ' = '+ value + ';';
        }
        else{
            str = str + ';'
        }
        classObj.appendToClass(str);
    };

    classObj.visitIfconditionexpression = function(ctx){
        classObj.visit(ctx.ifexpression());
        if(ctx.elseifexpression()) {
            Enumerable.from(ctx.elseifexpression()).forEach(function(x){
                classObj.visit(x);
            });
        }
        if(ctx.elseexpression()){
            classObj.visit(ctx.elseexpression());
        }
    }

    classObj.visitIfexpression = function(ctx){
            var clause = classObj.visit(ctx.clauses())
            var str = "if(" + clause +"){"
            classObj.appendToClass(str);
            classObj.visit(ctx.block());
            classObj.appendToClass("}");
    }

    classObj.visitElseifexpression = function(ctx){
        var clause = classObj.visit(ctx.clauses())
        var str = "else if(" + clause +"){"
        classObj.appendToClass(str);
        classObj.visit(ctx.block());
        classObj.appendToClass("}");
    }


    classObj.visitElseexpression = function(ctx){
        var str = "else {"
        classObj.appendToClass(str);
        classObj.visit(ctx.block());
        classObj.appendToClass("}");
    }

    classObj.visitFieldassignment = function(ctx) {
        var value;
        var str;
        if(ctx.expr()){
            var fieldName = classObj.visit(ctx.field());
            // check for the variable name;
            // check for the field exists
            str = fieldName;
            value = classObj.visit(ctx.expr());
            str = str + ' = '+ value + ';';
        }
        else{
            var leftFieldName = classObj.visit(ctx.field()[0]);
            str = leftFieldName;
            var rightFieldName = classObj.visit(ctx.field()[1]);
            str += '=' + rightFieldName + ';';
        }
        classObj.appendToClass(str);
    };
    classObj.visitReturnvalue = function(ctx){
        var str = 'return' + ' ' + classObj.visit(ctx.field()) + ';';
        classObj.appendToClass(str);
    }

    classObj.visitVardeclwithkeywords = function(ctx){
        var str = '';
        var variableName = classObj.visit(ctx.variable());
        str = 'var ' + variableName + ' = ';
        var exprStr = '';
        if(classObj.visit(ctx.keyword()) == 'where'){
            var fieldName = classObj.visit(ctx.field());
            // check if the variable exists
            // check if the property exists
            // check if the field is array

           var clause = classObj.visit(ctx.enumrableclauses());
            exprStr =  'Enumerable.from(' + fieldName + ').Where(function (x) { if(' + clause +'){return x;}});'
        }
        else if(classObj.visit(ctx.keyword()) == 'any'){
            var fieldName = classObj.visit(ctx.field());
            // check if the variable exists
            // check if the property exists
            // check if the field is array

            var clause = classObj.visit(ctx.enumrableclauses());
            exprStr =  'Enumerable.from(' + fieldName + ').Any(function (x) { if(' + clause +'){return true;}});'
        }

        str += exprStr;
        classObj.appendToClass(str);
    }

    classObj.visitClauses = function(ctx){
        var conditions = [];
        Enumerable.from(ctx.clause()).forEach(function(x){
            var expression = classObj.visit(x);
            conditions.push(expression);
        });
        var conditionStr = conditions[0] + ' ';
        if(ctx.logicaloperator()){
            var logicalOperator = [];
            Enumerable.from(ctx.logicaloperator()).forEach(function(x){
                var expression = classObj.visit(x);
                logicalOperator.push(expression);
            });
            for(var i = 1; i < conditions.length; i++){
                conditionStr += logicalOperator[i-1] + ' ';
                conditionStr += conditions[i];
            }
        }
        return conditionStr;
    }

    classObj.visitEnumrableclauses = function(ctx){
        var conditions = [];
        Enumerable.from(ctx.enumrableclause()).forEach(function(x){
            var expression = classObj.visit(x);
            conditions.push(expression);
        });
        var conditionStr = conditions[0] + ' ';
        if(ctx.logicaloperator()){
            var logicalOperator = [];
            Enumerable.from(ctx.logicaloperator()).forEach(function(x){
                var expression = classObj.visit(x);
                logicalOperator.push(expression);
            });
            for(var i = 1; i < conditions.length; i++){
                conditionStr += logicalOperator[i-1] + ' ';
                conditionStr += conditions[i];
            }
        }
        return conditionStr;
    }

    classObj.visitLogicaloperator = function(ctx){
        if(ctx.getText() =='AND'){
            return '&&';
        }
        else if(ctx.getText() == 'OR'){
            return '||';
        }
    }


    classObj.visitClause = function(ctx){
        if(ctx.expr()){
            var leftfield = classObj.visit(ctx.field());
            var expression = classObj.visit(ctx.expr());
            var operator = classObj.visit(ctx.operator());
            return leftfield + ' ' + operator + ' ' + expression;
        }
        else if(ctx.field().length > 1){
            var leftfield = classObj.visit(ctx.field()[0]);
            var rightField = classObj.visit(ctx.field()[1]);
            var operator = classObj.visit(ctx.operator());
            return leftfield + ' ' + operator + ' ' + rightField;
        }
        else
        {
            var leftfield = classObj.visit(ctx.field());
            return leftfield;
        }
    }

    //classObj.visitDslAssignment = function(ctx){
    //    var dslName
    //}

    classObj.visitEnumrableclause = function(ctx){
        if(ctx.expr()){
            var leftfield = classObj.visit(ctx.field());
            leftfield = 'x.' + leftfield;
            var expression = classObj.visit(ctx.expr());
            var operator = classObj.visit(ctx.operator());
            return leftfield + ' ' + operator + ' ' + expression;
        }
        else if(ctx.field().length > 1){
            var leftfield = classObj.visit(ctx.field()[0]);
            leftfield = 'x.' + leftfield;
            var rightField = classObj.visit(ctx.field()[1]);
            var operator = classObj.visit(ctx.operator());
            rightField = 'x.' + rightField;
            return leftfield + ' ' + operator + ' ' + rightField;
        }
        else
        {
            var leftfield = classObj.visit(ctx.field());
            return "x."+leftfield;
        }
    }

    classObj.visitField = function(ctx){
        return ctx.getText();
    }

    classObj.visitKeyword = function(ctx){
        return ctx.getText();
    }

    classObj.visitVariable = function(ctx) {
        if(ctx.ID()){
            return ctx.ID().getText();
        }
    };

    classObj.visitModel = function(ctx){
        if(ctx.ID()){
            return ctx.ID().getText();
        }
    };

    classObj.visitOperator = function(ctx){
        return ctx.getText();
    }

    classObj.visitExpr = function(ctx) {
        if(ctx.ID()){
            return ctx.ID().getText();
        }
        else if(ctx.INT()){
            return parseInt(ctx.INT(), 10);
        }
        else if(ctx.STRING()){
            return ctx.STRING().getText();
        }
        else if(ctx.FLOAT()){
            return parseFloat(ctx.FLOAT());
        }
        else{
            return classObj.visit(ctx.expr())
        }
    };
}

TreeVisitor.prototype = Object.create(baseClass.prototype);
TreeVisitor.prototype.constructor = TreeVisitor;
module.exports = TreeVisitor;
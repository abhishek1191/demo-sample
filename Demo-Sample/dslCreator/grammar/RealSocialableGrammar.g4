grammar RealSocialableGrammar;

prog: 'dslname =' ID ';' NEWLINE* inputs ';' NEWLINE* block ;

inputs : input (',' input)*;

input: variable '=' model
    | variable '=' '[' model ']';

block: '{' (stat)+ '}';

returnkeyword:
		'return'
        ;

returnvalue:
	returnkeyword field ';';

stat	: simplevariabledecl
        | dslAssignment
        | fieldassignment
        | vardeclwithkeywords
		| returnvalue
		| save
		| ifconditionexpression
		| NEWLINE
		;

save :'save' variable(',' variable)* ';';

dslAssignment: variable ('=' embeddeddsl)';';

embeddeddsl: '%' dslName '%' variableAssignments ;

dslName : ID;

variableAssignments : (variableAssignment (',' variableAssignment)*);

variableAssignment: field
                    | expr;

ifconditionexpression:  ifexpression NEWLINE*(elseifexpression)* NEWLINE*(elseexpression)?
                        ;

elseifexpression:
        'elseif' clauses NEWLINE* block
        ;

ifexpression:
        'if' clauses NEWLINE* block
        ;
elseexpression:
        'else' NEWLINE* block
        ;

simplevariabledecl
                    :variable ('=' expr)? ';'
		            ;

fieldassignment: field ('=' field) ';'
                 |field ('=' expr) ';'
                 ;

vardeclwithkeywords
                    :variable ('=' field keyword enumrableclauses) ';'
                    ;
model:
    '<' ID '>'
    ;

variable:
	ID
	;

clauses:
        '(' clause (logicaloperator clause)* ')';

clause:
        field operator field
      | field operator expr
	  | field
       ;

enumrableclauses:
        '(' enumrableclause (logicaloperator enumrableclause)* ')';

enumrableclause:
        field operator field
      | field operator expr
      | field
       ;

field: (ID |ID'['INT']')('.'(ID | ID'['INT']'))*
        ;

keyword:
        'where'
        |'any'
        ;

operator
	: '=='
	| '!='
	| '<='
	| '>='
	| '>'
	| '<'
	| '='
	;

logicaloperator:
        'AND'
        |'OR'
        ;

expr:
	| INT
	| ID
	| FLOAT
	| STRING
	| '(' expr ')'
	;

MUL	:	'*';
DIV	:	'/';
ADD :	'+';
SUB	:	'-';
LSQUARE: '[';
RSQUARE: ']';
GT  :   '<';
LT  :   '>';
ID	:	[a-zA-Z]+;
INT	:	[0-9]+;
STRING: ["]([a-zA-Z.' ']*["]);
FLOAT: [+-]([0-9]*[.])?[0-9]+;
NEWLINE: '\r'? '\n';
WS	:	[' '\t]+ -> skip;
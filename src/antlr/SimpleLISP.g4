// SimpleLISP.g4
grammar SimpleLISP;

program: statement+;

statement: expression NEWLINE;

expression: INTEGER
          | ID
          | expression op=('*' | '/') expression
          | expression op=('+' | '-') expression
          | '(' expression ')';

INTEGER: [0-9]+;
ID: [a-zA-Z]+;
NEWLINE: '\r'? '\n' ;
WS: [ \t]+ -> skip;



grammar SimpleLISP;

program: expression+;

expression: ATOM 
          | 'tambah' | 'kurang'
          | 'kali' | 'bagi'
          | '(' expression* ')';

ATOM: [a-zA-Z0-9]+;
WS: [ \t\r\n]+ -> skip;

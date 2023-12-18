
grammar SimpleLISP;

program: expression+;

expression: ATOM 
          | 'tambah' | 'kurang'
          | 'kali' | 'bagi'
          | OPEN expression* CLOSE;

OPEN: 'bukalah';
CLOSE: 'ditutup';
ATOM: [a-zA-Z0-9]+;
WS: [ \t\r\n]+ -> skip;

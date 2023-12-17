import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { SimpleLISPLexer } from './antlr/SimpleLISP/SimpleLISPLexer';
import { SimpleLISPParser } from './antlr/SimpleLISP/SimpleLISPParser';

const input = '1 + 2 * (3 - 4) / 5\n';
const inputStream = CharStreams.fromString(input);
const lexer = new SimpleLISPLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new SimpleLISPParser(tokenStream);
const tree = parser.program();

console.log(tree);

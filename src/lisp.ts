import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'

import { SimpleLISPListener } from './antlr/SimpleLISP/SimpleLISPListener';
import { ExpressionContext, ProgramContext, SimpleLISPParser } from './antlr/SimpleLISP/SimpleLISPParser';
import { SimpleLISPLexer } from './antlr/SimpleLISP/SimpleLISPLexer';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

const input = '( kurang ( tambah 9 7 ) 10 )';

class lispListener implements SimpleLISPListener {
    result: Array<string> = [];

    enterProgram(ctx: ProgramContext) {

    }

    exitProgram(ctx: ProgramContext) {
        console.log(this.result.join(" "));
    }

    enterExpression(ctx: ExpressionContext) {
        const operator: string = ctx.getChild(0)?.text ?? '';

        if (operator === 'tambah' || operator === 'kurang') {
            this.result.push('(');
            this.result.push(operator === 'tambah' ? "+" : "-");
        } else if (ctx.ATOM()) {
            this.result.push(ctx.ATOM().toString());
        }
    }

    exitExpression(ctx: ExpressionContext) {
        if (ctx.children && ctx.children[ctx.childCount - 1]?.text === ')') {
            this.result.push(')');
        }
    }
}

const inputStream = CharStreams.fromString(input);
const lexer = new SimpleLISPLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new SimpleLISPParser(tokenStream);

const listener = new lispListener();
const tree = parser.program();

const walker = new ParseTreeWalker();
walker.walk(listener, tree);
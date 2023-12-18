import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'

import { SimpleLISPListener } from './antlr/SimpleLISP/SimpleLISPListener';
import { ExpressionContext, ProgramContext, SimpleLISPParser } from './antlr/SimpleLISP/SimpleLISPParser';
import { SimpleLISPLexer } from './antlr/SimpleLISP/SimpleLISPLexer';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

const input = 'jadi plis buka plis tambah plis buka plis kurang 70 69 plis tutup 1337 plis tutup';

class lispListener implements SimpleLISPListener {
    result: Array<string> = [];

    exitProgram(ctx: ProgramContext) {
        console.log(this.result.join(" "));
    }

    enterExpression(ctx: ExpressionContext) {
        const operator: string = ctx.getChild(0)?.text ?? '';

        if (operator === 'plis tambah' || operator === 'plis kurang') {
            this.result.push(operator === 'plis tambah' ? "+" : "-");
        } else if (operator === "plis kali" || operator === "plis bagi") {
            this.result.push(operator === "plis kali" ? "*" : "/");
        } else if (ctx.ATOM()) {
            this.result.push(ctx.ATOM().toString());
        } else if (ctx.OPEN()) {
            this.result.push("(");
        }
    }

    exitExpression(ctx: ExpressionContext) {
        if (ctx.CLOSE()) {
            this.result.push(")");
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
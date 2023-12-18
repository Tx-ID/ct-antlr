
const input = 'jadi plis buka plis tambah plis buka plis kurang 70 69 plis tutup 1337 plis tutup';

// do not edit below unless you know what you are doing.

import { BailErrorStrategy, CharStreams, CommonTokenStream, ANTLRErrorListener, Recognizer, RecognitionException } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'

import { SimpleLISPListener } from './antlr/SimpleLISP/SimpleLISPListener';
import { ExpressionContext, ProgramContext, SimpleLISPParser } from './antlr/SimpleLISP/SimpleLISPParser';
import { SimpleLISPLexer } from './antlr/SimpleLISP/SimpleLISPLexer';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

class MyErrorListener implements ANTLRErrorListener {
    err?: string

    syntaxError(
        recognizer: Recognizer,
        offendingSymbol: any,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ) {
        // Handle the error here, you can log it or send it to the client
        // console.error(`Error at line ${line}:${charPositionInLine} - ${msg}`);
        this.err = msg;
    }
}

class lispListener implements SimpleLISPListener {
    result: Array<string> = [];

    exitProgram(ctx: ProgramContext) {
        // console.log(this.result.join(" "));
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

    visitErrorNode(node: ErrorNode) {
        // console.log("error!")
    }

    getResult(): string {
        return this.result.join(" ");
    }
}

export default function JakselToLISP(input: string): { success: true, content: string } | { success: false, error: string } {
    const inputStream = CharStreams.fromString(input);
    const lexer = new SimpleLISPLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new SimpleLISPParser(tokenStream);

    const errListener = new MyErrorListener();
    parser.addErrorListener(errListener);

    const listener = new lispListener();
    const tree = parser.program();

    const walker = new ParseTreeWalker();
    walker.walk(listener, tree);

    if (errListener.err !== undefined) {
        return { success: false, error: errListener.err };
    }
    return { success: true, content: listener.getResult() };
}

const result = JakselToLISP(input);
console.log(result.success);
console.log(result.success === true ? result.content : result.error);
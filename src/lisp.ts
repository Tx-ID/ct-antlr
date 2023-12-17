import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'

import { SimpleLISPListener } from './antlr/SimpleLISP/SimpleLISPListener';
import { ExpressionContext, ProgramContext, SimpleLISPParser } from './antlr/SimpleLISP/SimpleLISPParser';
import { SimpleLISPLexer } from './antlr/SimpleLISP/SimpleLISPLexer';

const input = '1 + 2 * (3 - 4) / 5\n';

class lispListener implements SimpleLISPListener {
    result: string = '';

    // Override methods from SimpleLISPListener as needed

    exitProgram(ctx: ProgramContext) {
        console.log(this.result);
    }

    exitExpression(ctx: ExpressionContext) {
        if (ctx.INTEGER()) {
            this.result += ctx.INTEGER().toString();
        } else if (ctx.ID()) {
            this.result += ctx.ID().toString();
        } else if (ctx.children) {
            // If the expression has children, it is a complex expression
            if (ctx.children.length === 1) {
                // Handle parentheses
                console.log('(');
            } else if (ctx.children.length === 3) {
                // Handle binary operators
                const left = ctx.children[0].text;
                const operator = ctx.children[1].text;
                const right = ctx.children[2].text;

                console.log(`(${operator} ${left} ${right})`);
            }
        }
    }

    // Implement other methods as needed
}

const inputStream = CharStreams.fromString(input);
const lexer = new SimpleLISPLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new SimpleLISPParser(tokenStream);

const listener = new lispListener();
const tree = parser.program();

const walker = new ParseTreeWalker();
walker.walk(listener, tree);
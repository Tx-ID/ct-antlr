import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { LanguageLexer } from './antlr/Language/LanguageLexer';
import { LanguageParser } from './antlr/Language/LanguageParser';

async function main() {
    // Create the lexer and parser
    let inputStream = CharStreams.fromString("hello madame")
    let lexer = new LanguageLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new LanguageParser(tokenStream);

    let tree = parser.program();
    console.log(tree)
}

void main()
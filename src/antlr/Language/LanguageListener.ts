// Generated from Language.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./LanguageParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LanguageParser`.
 */
export interface LanguageListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LanguageParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `LanguageParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
}


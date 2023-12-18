// Generated from SimpleLISP.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./SimpleLISPParser";
import { ExpressionContext } from "./SimpleLISPParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleLISPParser`.
 */
export interface SimpleLISPListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SimpleLISPParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleLISPParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `SimpleLISPParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `SimpleLISPParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
}


// Generated from SimpleLISP.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { SimpleLISPListener } from "./SimpleLISPListener";
import { SimpleLISPVisitor } from "./SimpleLISPVisitor";


export class SimpleLISPParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly ATOM = 7;
	public static readonly WS = 8;
	public static readonly RULE_program = 0;
	public static readonly RULE_expression = 1;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'tambah'", "'kurang'", "'kali'", "'bagi'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"ATOM", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleLISPParser._LITERAL_NAMES, SimpleLISPParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleLISPParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SimpleLISP.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleLISPParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleLISPParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SimpleLISPParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SimpleLISPParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 5;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 4;
				this.expression();
				}
				}
				this.state = 7;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleLISPParser.T__0) | (1 << SimpleLISPParser.T__1) | (1 << SimpleLISPParser.T__2) | (1 << SimpleLISPParser.T__3) | (1 << SimpleLISPParser.T__4) | (1 << SimpleLISPParser.ATOM))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SimpleLISPParser.RULE_expression);
		let _la: number;
		try {
			this.state = 22;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SimpleLISPParser.ATOM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 9;
				this.match(SimpleLISPParser.ATOM);
				}
				break;
			case SimpleLISPParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 10;
				this.match(SimpleLISPParser.T__0);
				}
				break;
			case SimpleLISPParser.T__1:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 11;
				this.match(SimpleLISPParser.T__1);
				}
				break;
			case SimpleLISPParser.T__2:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 12;
				this.match(SimpleLISPParser.T__2);
				}
				break;
			case SimpleLISPParser.T__3:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 13;
				this.match(SimpleLISPParser.T__3);
				}
				break;
			case SimpleLISPParser.T__4:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 14;
				this.match(SimpleLISPParser.T__4);
				this.state = 18;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SimpleLISPParser.T__0) | (1 << SimpleLISPParser.T__1) | (1 << SimpleLISPParser.T__2) | (1 << SimpleLISPParser.T__3) | (1 << SimpleLISPParser.T__4) | (1 << SimpleLISPParser.ATOM))) !== 0)) {
					{
					{
					this.state = 15;
					this.expression();
					}
					}
					this.state = 20;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 21;
				this.match(SimpleLISPParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\n\x1B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x03\x02\x06\x02\b\n\x02\r\x02\x0E\x02\t\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x13\n\x03\f\x03\x0E" +
		"\x03\x16\v\x03\x03\x03\x05\x03\x19\n\x03\x03\x03\x02\x02\x02\x04\x02\x02" +
		"\x04\x02\x02\x02\x02\x1F\x02\x07\x03\x02\x02\x02\x04\x18\x03\x02\x02\x02" +
		"\x06\b\x05\x04\x03\x02\x07\x06\x03\x02\x02\x02\b\t\x03\x02\x02\x02\t\x07" +
		"\x03\x02\x02\x02\t\n\x03\x02\x02\x02\n\x03\x03\x02\x02\x02\v\x19\x07\t" +
		"\x02\x02\f\x19\x07\x03\x02\x02\r\x19\x07\x04\x02\x02\x0E\x19\x07\x05\x02" +
		"\x02\x0F\x19\x07\x06\x02\x02\x10\x14\x07\x07\x02\x02\x11\x13\x05\x04\x03" +
		"\x02\x12\x11\x03\x02\x02\x02\x13\x16\x03\x02\x02\x02\x14\x12\x03\x02\x02" +
		"\x02\x14\x15\x03\x02\x02\x02\x15\x17\x03\x02\x02\x02\x16\x14\x03\x02\x02" +
		"\x02\x17\x19\x07\b\x02\x02\x18\v\x03\x02\x02\x02\x18\f\x03\x02\x02\x02" +
		"\x18\r\x03\x02\x02\x02\x18\x0E\x03\x02\x02\x02\x18\x0F\x03\x02\x02\x02" +
		"\x18\x10\x03\x02\x02\x02\x19\x05\x03\x02\x02\x02\x05\t\x14\x18";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleLISPParser.__ATN) {
			SimpleLISPParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleLISPParser._serializedATN));
		}

		return SimpleLISPParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleLISPParser.RULE_program; }
	// @Override
	public enterRule(listener: SimpleLISPListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleLISPListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleLISPVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public ATOM(): TerminalNode | undefined { return this.tryGetToken(SimpleLISPParser.ATOM, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SimpleLISPParser.RULE_expression; }
	// @Override
	public enterRule(listener: SimpleLISPListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: SimpleLISPListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: SimpleLISPVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



// Generated from SimpleLISP.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SimpleLISPLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly ATOM = 7;
	public static readonly WS = 8;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "ATOM", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'tambah'", "'kurang'", "'kali'", "'bagi'", "'('", "')'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"ATOM", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SimpleLISPLexer._LITERAL_NAMES, SimpleLISPLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SimpleLISPLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SimpleLISPLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SimpleLISP.g4"; }

	// @Override
	public get ruleNames(): string[] { return SimpleLISPLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SimpleLISPLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SimpleLISPLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SimpleLISPLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\n;\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x06\b1\n\b\r\b\x0E\b2\x03" +
		"\t\x06\t6\n\t\r\t\x0E\t7\x03\t\x03\t\x02\x02\x02\n\x03\x02\x03\x05\x02" +
		"\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x03\x02" +
		"\x04\x05\x022;C\\c|\x05\x02\v\f\x0F\x0F\"\"\x02<\x02\x03\x03\x02\x02\x02" +
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
		"\x11\x03\x02\x02\x02\x03\x13\x03\x02\x02\x02\x05\x1A\x03\x02\x02\x02\x07" +
		"!\x03\x02\x02\x02\t&\x03\x02\x02\x02\v+\x03\x02\x02\x02\r-\x03\x02\x02" +
		"\x02\x0F0\x03\x02\x02\x02\x115\x03\x02\x02\x02\x13\x14\x07v\x02\x02\x14" +
		"\x15\x07c\x02\x02\x15\x16\x07o\x02\x02\x16\x17\x07d\x02\x02\x17\x18\x07" +
		"c\x02\x02\x18\x19\x07j\x02\x02\x19\x04\x03\x02\x02\x02\x1A\x1B\x07m\x02" +
		"\x02\x1B\x1C\x07w\x02\x02\x1C\x1D\x07t\x02\x02\x1D\x1E\x07c\x02\x02\x1E" +
		"\x1F\x07p\x02\x02\x1F \x07i\x02\x02 \x06\x03\x02\x02\x02!\"\x07m\x02\x02" +
		"\"#\x07c\x02\x02#$\x07n\x02\x02$%\x07k\x02\x02%\b\x03\x02\x02\x02&\'\x07" +
		"d\x02\x02\'(\x07c\x02\x02()\x07i\x02\x02)*\x07k\x02\x02*\n\x03\x02\x02" +
		"\x02+,\x07*\x02\x02,\f\x03\x02\x02\x02-.\x07+\x02\x02.\x0E\x03\x02\x02" +
		"\x02/1\t\x02\x02\x020/\x03\x02\x02\x0212\x03\x02\x02\x0220\x03\x02\x02" +
		"\x0223\x03\x02\x02\x023\x10\x03\x02\x02\x0246\t\x03\x02\x0254\x03\x02" +
		"\x02\x0267\x03\x02\x02\x0275\x03\x02\x02\x0278\x03\x02\x02\x0289\x03\x02" +
		"\x02\x029:\b\t\x02\x02:\x12\x03\x02\x02\x02\x05\x0227\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SimpleLISPLexer.__ATN) {
			SimpleLISPLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SimpleLISPLexer._serializedATN));
		}

		return SimpleLISPLexer.__ATN;
	}

}


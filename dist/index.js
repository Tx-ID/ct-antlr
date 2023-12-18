"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => JakselToLISP
});
module.exports = __toCommonJS(src_exports);
var import_antlr4ts = require("antlr4ts");
var import_ParseTreeWalker = require("antlr4ts/tree/ParseTreeWalker");

// src/antlr/JakselLISP/JakselLISPParser.ts
var import_ATNDeserializer = require("antlr4ts/atn/ATNDeserializer");
var import_FailedPredicateException = require("antlr4ts/FailedPredicateException");
var import_NoViableAltException = require("antlr4ts/NoViableAltException");
var import_Parser = require("antlr4ts/Parser");
var import_ParserRuleContext = require("antlr4ts/ParserRuleContext");
var import_ParserATNSimulator = require("antlr4ts/atn/ParserATNSimulator");
var import_RecognitionException = require("antlr4ts/RecognitionException");
var import_VocabularyImpl = require("antlr4ts/VocabularyImpl");
var Utils = __toESM(require("antlr4ts/misc/Utils"));
var JakselLISPParser = class _JakselLISPParser extends import_Parser.Parser {
  static T__0 = 1;
  static T__1 = 2;
  static T__2 = 3;
  static T__3 = 4;
  static T__4 = 5;
  static OPEN = 6;
  static CLOSE = 7;
  static ATOM = 8;
  static WS = 9;
  static RULE_program = 0;
  static RULE_expression = 1;
  // tslint:disable:no-trailing-whitespace
  static ruleNames = [
    "program",
    "expression"
  ];
  static _LITERAL_NAMES = [
    void 0,
    "'jadi'",
    "'plis tambah'",
    "'plis kurang'",
    "'plis kali'",
    "'plis bagi'",
    "'plis buka'",
    "'plis tutup'"
  ];
  static _SYMBOLIC_NAMES = [
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    "OPEN",
    "CLOSE",
    "ATOM",
    "WS"
  ];
  static VOCABULARY = new import_VocabularyImpl.VocabularyImpl(_JakselLISPParser._LITERAL_NAMES, _JakselLISPParser._SYMBOLIC_NAMES, []);
  // @Override
  // @NotNull
  get vocabulary() {
    return _JakselLISPParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace
  // @Override
  get grammarFileName() {
    return "JakselLISP.g4";
  }
  // @Override
  get ruleNames() {
    return _JakselLISPParser.ruleNames;
  }
  // @Override
  get serializedATN() {
    return _JakselLISPParser._serializedATN;
  }
  createFailedPredicateException(predicate, message) {
    return new import_FailedPredicateException.FailedPredicateException(this, predicate, message);
  }
  constructor(input) {
    super(input);
    this._interp = new import_ParserATNSimulator.ParserATNSimulator(_JakselLISPParser._ATN, this);
  }
  // @RuleVersion(0)
  program() {
    let _localctx = new ProgramContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, _JakselLISPParser.RULE_program);
    let _la;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 4;
        this.match(_JakselLISPParser.T__0);
        this.state = 6;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 5;
              this.expression();
            }
          }
          this.state = 8;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while ((_la & ~31) === 0 && (1 << _la & (1 << _JakselLISPParser.T__1 | 1 << _JakselLISPParser.T__2 | 1 << _JakselLISPParser.T__3 | 1 << _JakselLISPParser.T__4 | 1 << _JakselLISPParser.OPEN | 1 << _JakselLISPParser.ATOM)) !== 0);
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  expression() {
    let _localctx = new ExpressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, _JakselLISPParser.RULE_expression);
    let _la;
    try {
      this.state = 23;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case _JakselLISPParser.ATOM:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 10;
            this.match(_JakselLISPParser.ATOM);
          }
          break;
        case _JakselLISPParser.T__1:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 11;
            this.match(_JakselLISPParser.T__1);
          }
          break;
        case _JakselLISPParser.T__2:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 12;
            this.match(_JakselLISPParser.T__2);
          }
          break;
        case _JakselLISPParser.T__3:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 13;
            this.match(_JakselLISPParser.T__3);
          }
          break;
        case _JakselLISPParser.T__4:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 14;
            this.match(_JakselLISPParser.T__4);
          }
          break;
        case _JakselLISPParser.OPEN:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 15;
            this.match(_JakselLISPParser.OPEN);
            this.state = 19;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while ((_la & ~31) === 0 && (1 << _la & (1 << _JakselLISPParser.T__1 | 1 << _JakselLISPParser.T__2 | 1 << _JakselLISPParser.T__3 | 1 << _JakselLISPParser.T__4 | 1 << _JakselLISPParser.OPEN | 1 << _JakselLISPParser.ATOM)) !== 0) {
              {
                {
                  this.state = 16;
                  this.expression();
                }
              }
              this.state = 21;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 22;
            this.match(_JakselLISPParser.CLOSE);
          }
          break;
        default:
          throw new import_NoViableAltException.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof import_RecognitionException.RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  static _serializedATN = "\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\v			\n\r\n\x07\n\f\v\n \b\x07\x07	\b\x07	\n\n\b\n\v\v\f\x07\n\r\x07\x07\x07\x07\x07\x07\b\x07	\f\r\n";
  static __ATN;
  static get _ATN() {
    if (!_JakselLISPParser.__ATN) {
      _JakselLISPParser.__ATN = new import_ATNDeserializer.ATNDeserializer().deserialize(Utils.toCharArray(_JakselLISPParser._serializedATN));
    }
    return _JakselLISPParser.__ATN;
  }
};
var ProgramContext = class extends import_ParserRuleContext.ParserRuleContext {
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  // @Override
  get ruleIndex() {
    return JakselLISPParser.RULE_program;
  }
  // @Override
  enterRule(listener) {
    if (listener.enterProgram) {
      listener.enterProgram(this);
    }
  }
  // @Override
  exitRule(listener) {
    if (listener.exitProgram) {
      listener.exitProgram(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitProgram) {
      return visitor.visitProgram(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};
var ExpressionContext = class _ExpressionContext extends import_ParserRuleContext.ParserRuleContext {
  ATOM() {
    return this.tryGetToken(JakselLISPParser.ATOM, 0);
  }
  OPEN() {
    return this.tryGetToken(JakselLISPParser.OPEN, 0);
  }
  CLOSE() {
    return this.tryGetToken(JakselLISPParser.CLOSE, 0);
  }
  expression(i) {
    if (i === void 0) {
      return this.getRuleContexts(_ExpressionContext);
    } else {
      return this.getRuleContext(i, _ExpressionContext);
    }
  }
  constructor(parent, invokingState) {
    super(parent, invokingState);
  }
  // @Override
  get ruleIndex() {
    return JakselLISPParser.RULE_expression;
  }
  // @Override
  enterRule(listener) {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  // @Override
  exitRule(listener) {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
  // @Override
  accept(visitor) {
    if (visitor.visitExpression) {
      return visitor.visitExpression(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
};

// src/antlr/JakselLISP/JakselLISPLexer.ts
var import_ATNDeserializer2 = require("antlr4ts/atn/ATNDeserializer");
var import_Lexer = require("antlr4ts/Lexer");
var import_LexerATNSimulator = require("antlr4ts/atn/LexerATNSimulator");
var import_VocabularyImpl2 = require("antlr4ts/VocabularyImpl");
var Utils2 = __toESM(require("antlr4ts/misc/Utils"));
var JakselLISPLexer = class _JakselLISPLexer extends import_Lexer.Lexer {
  static T__0 = 1;
  static T__1 = 2;
  static T__2 = 3;
  static T__3 = 4;
  static T__4 = 5;
  static OPEN = 6;
  static CLOSE = 7;
  static ATOM = 8;
  static WS = 9;
  // tslint:disable:no-trailing-whitespace
  static channelNames = [
    "DEFAULT_TOKEN_CHANNEL",
    "HIDDEN"
  ];
  // tslint:disable:no-trailing-whitespace
  static modeNames = [
    "DEFAULT_MODE"
  ];
  static ruleNames = [
    "T__0",
    "T__1",
    "T__2",
    "T__3",
    "T__4",
    "OPEN",
    "CLOSE",
    "ATOM",
    "WS"
  ];
  static _LITERAL_NAMES = [
    void 0,
    "'jadi'",
    "'plis tambah'",
    "'plis kurang'",
    "'plis kali'",
    "'plis bagi'",
    "'plis buka'",
    "'plis tutup'"
  ];
  static _SYMBOLIC_NAMES = [
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    void 0,
    "OPEN",
    "CLOSE",
    "ATOM",
    "WS"
  ];
  static VOCABULARY = new import_VocabularyImpl2.VocabularyImpl(_JakselLISPLexer._LITERAL_NAMES, _JakselLISPLexer._SYMBOLIC_NAMES, []);
  // @Override
  // @NotNull
  get vocabulary() {
    return _JakselLISPLexer.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace
  constructor(input) {
    super(input);
    this._interp = new import_LexerATNSimulator.LexerATNSimulator(_JakselLISPLexer._ATN, this);
  }
  // @Override
  get grammarFileName() {
    return "JakselLISP.g4";
  }
  // @Override
  get ruleNames() {
    return _JakselLISPLexer.ruleNames;
  }
  // @Override
  get serializedATN() {
    return _JakselLISPLexer._serializedATN;
  }
  // @Override
  get channelNames() {
    return _JakselLISPLexer.channelNames;
  }
  // @Override
  get modeNames() {
    return _JakselLISPLexer.modeNames;
  }
  static _serializedATN = '\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\vg\b					\x07	\x07\b	\b			\n	\n\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\b\b\b\b\b\b\b\b\b\b\b		]\n	\r		^\n\nb\n\n\r\n\nc\n\n\v\x07	\v\x07\r\b	\n\v2;C\\c|\v\f""h\x07	\v\r\x07&	2\v<\rFP\\a\x07l\x07c\x07f\x07k\x1B\x07r\x1B\x07n\x07k\x07u\x07" \x07v !\x07c!"\x07o"#\x07d#$\x07c$%\x07j%&\'\x07r\'(\x07n()\x07k)*\x07u*+\x07"+,\x07m,-\x07w-.\x07t./\x07c/0\x07p01\x07i1\b23\x07r34\x07n45\x07k56\x07u67\x07"78\x07m89\x07c9:\x07n:;\x07k;\n<=\x07r=>\x07n>?\x07k?@\x07u@A\x07"AB\x07dBC\x07cCD\x07iDE\x07kE\fFG\x07rGH\x07nHI\x07kIJ\x07uJK\x07"KL\x07dLM\x07wMN\x07mNO\x07cOPQ\x07rQR\x07nRS\x07kST\x07uTU\x07"UV\x07vVW\x07wWX\x07vXY\x07wYZ\x07rZ[]	\\[]^^\\^__`b	a`bccacddeef\b\nf^c\b';
  static __ATN;
  static get _ATN() {
    if (!_JakselLISPLexer.__ATN) {
      _JakselLISPLexer.__ATN = new import_ATNDeserializer2.ATNDeserializer().deserialize(Utils2.toCharArray(_JakselLISPLexer._serializedATN));
    }
    return _JakselLISPLexer.__ATN;
  }
};

// src/index.ts
var MyErrorListener = class {
  err;
  syntaxError(_recognizer, _offendingSymbol, _line, _charPositionInLine, msg, _e) {
    this.err = msg;
  }
};
var Listener = class {
  result = [];
  exitProgram(_ctx) {
  }
  enterExpression(ctx) {
    const operator = ctx.getChild(0)?.text ?? "";
    if (operator === "plis tambah" || operator === "plis kurang") {
      this.result.push(operator === "plis tambah" ? "+" : "-");
    } else if (operator === "plis kali" || operator === "plis bagi") {
      this.result.push(operator === "plis kali" ? "*" : "/");
    } else if (ctx.ATOM()) {
      this.result.push(ctx.ATOM().toString());
    } else if (ctx.OPEN()) {
      this.result.push("(");
    }
  }
  exitExpression(ctx) {
    if (ctx.CLOSE()) {
      this.result.push(")");
    }
  }
  visitErrorNode(_node) {
  }
  getResult() {
    return this.result.join(" ");
  }
};
function JakselToLISP(input) {
  const inputStream = import_antlr4ts.CharStreams.fromString(input);
  const lexer = new JakselLISPLexer(inputStream);
  const tokenStream = new import_antlr4ts.CommonTokenStream(lexer);
  const parser = new JakselLISPParser(tokenStream);
  const errListener = new MyErrorListener();
  parser.addErrorListener(errListener);
  const listener = new Listener();
  const tree = parser.program();
  const walker = new import_ParseTreeWalker.ParseTreeWalker();
  walker.walk(listener, tree);
  if (errListener.err !== void 0) {
    return { success: false, error: errListener.err };
  }
  return { success: true, content: listener.getResult() };
}

define(function(require, exports, module) {
// Generated from RuleEditor.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u001b\u00b2\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0007\tF\n\t\f\t\u000e\tI\u000b\t\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000bQ",
    "\n\u000b\u0003\u000b\u0003\u000b\u0007\u000bU\n\u000b\f\u000b\u000e",
    "\u000bX\u000b\u000b\u0003\u000b\u0003\u000b\u0003\f\u0005\f]\n\f\u0003",
    "\f\u0003\f\u0003\f\u0007\fb\n\f\f\f\u000e\fe\u000b\f\u0003\f\u0003\f",
    "\u0005\fi\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\fo\n\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0007\ru\n\r\f\r\u000e\rx\u000b\r\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u007f\n\u000e\f\u000e",
    "\u000e\u000e\u0082\u000b\u000e\u0003\u000f\u0003\u000f\u0007\u000f\u0086",
    "\n\u000f\f\u000f\u000e\u000f\u0089\u000b\u000f\u0003\u0010\u0003\u0010",
    "\u0007\u0010\u008d\n\u0010\f\u0010\u000e\u0010\u0090\u000b\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u001a\u0006\u001a\u00ad\n\u001a\r\u001a\u000e",
    "\u001a\u00ae\u0003\u001a\u0003\u001a\u0002\u0002\u001b\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b",
    "\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012",
    "#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a3\u001b\u0003",
    "\u0002\f\u0003\u00023;\u0003\u00022;\u0004\u0002GGgg\b\u0002//2;C\\",
    "aac|\u4e02\u9fa7\u0004\u0002C\\c|\u0007\u0002//2;C\\aac|\u0006\u0002",
    "C\\aac|\u4e02\u9fa7\u0003\u0002C|\u0005\u00022;C\\c|\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"\u00c0\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019",
    "\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d",
    "\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!",
    "\u0003\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002",
    "\u00023\u0003\u0002\u0002\u0002\u00035\u0003\u0002\u0002\u0002\u0005",
    "7\u0003\u0002\u0002\u0002\u00079\u0003\u0002\u0002\u0002\t;\u0003\u0002",
    "\u0002\u0002\u000b=\u0003\u0002\u0002\u0002\r?\u0003\u0002\u0002\u0002",
    "\u000fA\u0003\u0002\u0002\u0002\u0011C\u0003\u0002\u0002\u0002\u0013",
    "J\u0003\u0002\u0002\u0002\u0015P\u0003\u0002\u0002\u0002\u0017\\\u0003",
    "\u0002\u0002\u0002\u0019p\u0003\u0002\u0002\u0002\u001b{\u0003\u0002",
    "\u0002\u0002\u001d\u0083\u0003\u0002\u0002\u0002\u001f\u008a\u0003\u0002",
    "\u0002\u0002!\u0093\u0003\u0002\u0002\u0002#\u0096\u0003\u0002\u0002",
    "\u0002%\u0099\u0003\u0002\u0002\u0002\'\u009b\u0003\u0002\u0002\u0002",
    ")\u009e\u0003\u0002\u0002\u0002+\u00a0\u0003\u0002\u0002\u0002-\u00a3",
    "\u0003\u0002\u0002\u0002/\u00a5\u0003\u0002\u0002\u00021\u00a8\u0003",
    "\u0002\u0002\u00023\u00ac\u0003\u0002\u0002\u000256\u00072\u0002\u0002",
    "6\u0004\u0003\u0002\u0002\u000278\u00070\u0002\u00028\u0006\u0003\u0002",
    "\u0002\u00029:\u0007<\u0002\u0002:\b\u0003\u0002\u0002\u0002;<\u0007",
    "/\u0002\u0002<\n\u0003\u0002\u0002\u0002=>\u0007.\u0002\u0002>\f\u0003",
    "\u0002\u0002\u0002?@\u0007*\u0002\u0002@\u000e\u0003\u0002\u0002\u0002",
    "AB\u0007+\u0002\u0002B\u0010\u0003\u0002\u0002\u0002CG\t\u0002\u0002",
    "\u0002DF\t\u0003\u0002\u0002ED\u0003\u0002\u0002\u0002FI\u0003\u0002",
    "\u0002\u0002GE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002H\u0012",
    "\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002\u0002JK\u0005\t\u0005\u0002",
    "KL\u0005\u0011\t\u0002L\u0014\u0003\u0002\u0002\u0002MQ\u0005\u0011",
    "\t\u0002NQ\u0005\u0013\n\u0002OQ\u0005\u0003\u0002\u0002PM\u0003\u0002",
    "\u0002\u0002PN\u0003\u0002\u0002\u0002PO\u0003\u0002\u0002\u0002QR\u0003",
    "\u0002\u0002\u0002RV\u0005\u0005\u0003\u0002SU\u0005\u0003\u0002\u0002",
    "TS\u0003\u0002\u0002\u0002UX\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002",
    "\u0002VW\u0003\u0002\u0002\u0002WY\u0003\u0002\u0002\u0002XV\u0003\u0002",
    "\u0002\u0002YZ\u0005\u0011\t\u0002Z\u0016\u0003\u0002\u0002\u0002[]",
    "\u0005\t\u0005\u0002\\[\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002",
    "\u0002]^\u0003\u0002\u0002\u0002^h\t\u0002\u0002\u0002_c\u0005\u0005",
    "\u0003\u0002`b\u0005\u0003\u0002\u0002a`\u0003\u0002\u0002\u0002be\u0003",
    "\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002",
    "df\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002fg\u0005\u0011\t",
    "\u0002gi\u0003\u0002\u0002\u0002h_\u0003\u0002\u0002\u0002hi\u0003\u0002",
    "\u0002\u0002ij\u0003\u0002\u0002\u0002jn\t\u0004\u0002\u0002ko\u0005",
    "\u0011\t\u0002lo\u0005\u0013\n\u0002mo\u0005\u0003\u0002\u0002nk\u0003",
    "\u0002\u0002\u0002nl\u0003\u0002\u0002\u0002nm\u0003\u0002\u0002\u0002",
    "o\u0018\u0003\u0002\u0002\u0002pv\u0007$\u0002\u0002qu\t\u0005\u0002",
    "\u0002rs\u0007^\u0002\u0002su\u0007$\u0002\u0002tq\u0003\u0002\u0002",
    "\u0002tr\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002vt\u0003\u0002",
    "\u0002\u0002vw\u0003\u0002\u0002\u0002wy\u0003\u0002\u0002\u0002xv\u0003",
    "\u0002\u0002\u0002yz\u0007$\u0002\u0002z\u001a\u0003\u0002\u0002\u0002",
    "{|\u0007A\u0002\u0002|\u0080\t\u0006\u0002\u0002}\u007f\t\u0007\u0002",
    "\u0002~}\u0003\u0002\u0002\u0002\u007f\u0082\u0003\u0002\u0002\u0002",
    "\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002",
    "\u0081\u001c\u0003\u0002\u0002\u0002\u0082\u0080\u0003\u0002\u0002\u0002",
    "\u0083\u0087\t\b\u0002\u0002\u0084\u0086\t\u0005\u0002\u0002\u0085\u0084",
    "\u0003\u0002\u0002\u0002\u0086\u0089\u0003\u0002\u0002\u0002\u0087\u0085",
    "\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002\u0002\u0088\u001e",
    "\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u008a\u008e",
    "\t\t\u0002\u0002\u008b\u008d\t\n\u0002\u0002\u008c\u008b\u0003\u0002",
    "\u0002\u0002\u008d\u0090\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002",
    "\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0091\u0003\u0002",
    "\u0002\u0002\u0090\u008e\u0003\u0002\u0002\u0002\u0091\u0092\u0005\u0007",
    "\u0004\u0002\u0092 \u0003\u0002\u0002\u0002\u0093\u0094\u0007<\u0002",
    "\u0002\u0094\u0095\u0007/\u0002\u0002\u0095\"\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0007<\u0002\u0002\u0097\u0098\u0007\u0080\u0002\u0002",
    "\u0098$\u0003\u0002\u0002\u0002\u0099\u009a\u0007>\u0002\u0002\u009a",
    "&\u0003\u0002\u0002\u0002\u009b\u009c\u0007>\u0002\u0002\u009c\u009d",
    "\u0007?\u0002\u0002\u009d(\u0003\u0002\u0002\u0002\u009e\u009f\u0007",
    "@\u0002\u0002\u009f*\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007@\u0002",
    "\u0002\u00a1\u00a2\u0007?\u0002\u0002\u00a2,\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0007?\u0002\u0002\u00a4.\u0003\u0002\u0002\u0002\u00a5",
    "\u00a6\u0007?\u0002\u0002\u00a6\u00a7\u0007?\u0002\u0002\u00a70\u0003",
    "\u0002\u0002\u0002\u00a8\u00a9\u0007#\u0002\u0002\u00a9\u00aa\u0007",
    "?\u0002\u0002\u00aa2\u0003\u0002\u0002\u0002\u00ab\u00ad\t\u000b\u0002",
    "\u0002\u00ac\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002",
    "\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002",
    "\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0\u00b1\b\u001a\u0002",
    "\u0002\u00b14\u0003\u0002\u0002\u0002\u0010\u0002GPV\\chntv\u0080\u0087",
    "\u008e\u00ae\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function RuleEditorLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

RuleEditorLexer.prototype = Object.create(antlr4.Lexer.prototype);
RuleEditorLexer.prototype.constructor = RuleEditorLexer;

RuleEditorLexer.EOF = antlr4.Token.EOF;
RuleEditorLexer.Zero = 1;
RuleEditorLexer.Dot = 2;
RuleEditorLexer.Colon = 3;
RuleEditorLexer.Minus = 4;
RuleEditorLexer.COMMA = 5;
RuleEditorLexer.LB = 6;
RuleEditorLexer.RB = 7;
RuleEditorLexer.Positive_Int = 8;
RuleEditorLexer.Negative_Int = 9;
RuleEditorLexer.Dot_Notation = 10;
RuleEditorLexer.Sci_Notation = 11;
RuleEditorLexer.STRING = 12;
RuleEditorLexer.VAR = 13;
RuleEditorLexer.Non_Numberic = 14;
RuleEditorLexer.Pre = 15;
RuleEditorLexer.Normal_Infer = 16;
RuleEditorLexer.Default_Infer = 17;
RuleEditorLexer.LESS_THAN = 18;
RuleEditorLexer.LEQ = 19;
RuleEditorLexer.GREATER_THAN = 20;
RuleEditorLexer.GEQ = 21;
RuleEditorLexer.EQUAL = 22;
RuleEditorLexer.DOUBLE_EQUAL = 23;
RuleEditorLexer.NEQ = 24;
RuleEditorLexer.WS = 25;


RuleEditorLexer.modeNames = [ "DEFAULT_MODE" ];

RuleEditorLexer.literalNames = [ 'null', "'0'", "'.'", "':'", "'-'", "','", 
                                 "'('", "')'", 'null', 'null', 'null', 'null', 
                                 'null', 'null', 'null', 'null', "':-'", 
                                 "':~'", "'<'", "'<='", "'>'", "'>='", "'='", 
                                 "'=='", "'!='" ];

RuleEditorLexer.symbolicNames = [ 'null', "Zero", "Dot", "Colon", "Minus", 
                                  "COMMA", "LB", "RB", "Positive_Int", "Negative_Int", 
                                  "Dot_Notation", "Sci_Notation", "STRING", 
                                  "VAR", "Non_Numberic", "Pre", "Normal_Infer", 
                                  "Default_Infer", "LESS_THAN", "LEQ", "GREATER_THAN", 
                                  "GEQ", "EQUAL", "DOUBLE_EQUAL", "NEQ", 
                                  "WS" ];

RuleEditorLexer.ruleNames = [ "Zero", "Dot", "Colon", "Minus", "COMMA", 
                              "LB", "RB", "Positive_Int", "Negative_Int", 
                              "Dot_Notation", "Sci_Notation", "STRING", 
                              "VAR", "Non_Numberic", "Pre", "Normal_Infer", 
                              "Default_Infer", "LESS_THAN", "LEQ", "GREATER_THAN", 
                              "GEQ", "EQUAL", "DOUBLE_EQUAL", "NEQ", "WS" ];

RuleEditorLexer.grammarFileName = "RuleEditor.g4";



exports.RuleEditorLexer = RuleEditorLexer;
});

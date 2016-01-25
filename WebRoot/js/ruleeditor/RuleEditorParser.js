define(function(require, exports, module) {
// Generated from RuleEditor.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RuleEditorListener = require('./RuleEditorListener').RuleEditorListener;
var RuleEditorVisitor = require('./RuleEditorVisitor').RuleEditorVisitor;

var grammarFileName = "RuleEditor.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u001bh\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004 \n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005*",
    "\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006/\n\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0007\u00074\n\u0007\f\u0007\u000e\u0007",
    "7\u000b\u0007\u0003\b\u0003\b\u0003\b\u0005\b<\n\b\u0003\b\u0005\b?",
    "\n\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bF\n\b\u0005\bH\n",
    "\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0007\nO\n\n\f\n\u000e\n",
    "R\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0005\u000b`\n\u000b\u0003\f\u0007\fc\n\f\f\f\u000e\ff",
    "\u000b\f\u0003\f\u0002\u0002\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0002\u0005\u0003\u0002\u0012\u0013\u0004\u0002\u0003\u0003",
    "\n\r\u0004\u0002\u0014\u0017\u0019\u001am\u0002\u0018\u0003\u0002\u0002",
    "\u0002\u0004\u001a\u0003\u0002\u0002\u0002\u0006\u001f\u0003\u0002\u0002",
    "\u0002\b)\u0003\u0002\u0002\u0002\n.\u0003\u0002\u0002\u0002\f0\u0003",
    "\u0002\u0002\u0002\u000eG\u0003\u0002\u0002\u0002\u0010I\u0003\u0002",
    "\u0002\u0002\u0012K\u0003\u0002\u0002\u0002\u0014_\u0003\u0002\u0002",
    "\u0002\u0016d\u0003\u0002\u0002\u0002\u0018\u0019\t\u0002\u0002\u0002",
    "\u0019\u0003\u0003\u0002\u0002\u0002\u001a\u001b\t\u0003\u0002\u0002",
    "\u001b\u0005\u0003\u0002\u0002\u0002\u001c \u0007\u0010\u0002\u0002",
    "\u001d \u0007\u000e\u0002\u0002\u001e \u0005\u0004\u0003\u0002\u001f",
    "\u001c\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f",
    "\u001e\u0003\u0002\u0002\u0002 \u0007\u0003\u0002\u0002\u0002!\"\u0007",
    "\u0011\u0002\u0002\"*\u0007\u0010\u0002\u0002#*\u0007\u0010\u0002\u0002",
    "$%\u0007\u0006\u0002\u0002%&\u0007\u0011\u0002\u0002&*\u0007\u0010\u0002",
    "\u0002\'(\u0007\u0006\u0002\u0002(*\u0007\u0010\u0002\u0002)!\u0003",
    "\u0002\u0002\u0002)#\u0003\u0002\u0002\u0002)$\u0003\u0002\u0002\u0002",
    ")\'\u0003\u0002\u0002\u0002*\t\u0003\u0002\u0002\u0002+/\u0007\u000f",
    "\u0002\u0002,/\u0005\u0006\u0004\u0002-/\u0005\u000e\b\u0002.+\u0003",
    "\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002.-\u0003\u0002\u0002\u0002",
    "/\u000b\u0003\u0002\u0002\u000205\u0005\n\u0006\u000212\u0007\u0007",
    "\u0002\u000224\u0005\n\u0006\u000231\u0003\u0002\u0002\u000247\u0003",
    "\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u0002",
    "6\r\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u00028>\u0005\b\u0005",
    "\u00029;\u0007\b\u0002\u0002:<\u0005\f\u0007\u0002;:\u0003\u0002\u0002",
    "\u0002;<\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=?\u0007\t",
    "\u0002\u0002>9\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?H\u0003",
    "\u0002\u0002\u0002@A\u0007\u000f\u0002\u0002AE\t\u0004\u0002\u0002B",
    "F\u0007\u000f\u0002\u0002CF\u0005\u0006\u0004\u0002DF\u0005\b\u0005",
    "\u0002EB\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002ED\u0003\u0002",
    "\u0002\u0002FH\u0003\u0002\u0002\u0002G8\u0003\u0002\u0002\u0002G@\u0003",
    "\u0002\u0002\u0002H\u000f\u0003\u0002\u0002\u0002IJ\u0005\u000e\b\u0002",
    "J\u0011\u0003\u0002\u0002\u0002KP\u0005\u000e\b\u0002LM\u0007\u0007",
    "\u0002\u0002MO\u0005\u000e\b\u0002NL\u0003\u0002\u0002\u0002OR\u0003",
    "\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002",
    "Q\u0013\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002ST\u0005\u0010",
    "\t\u0002TU\u0005\u0002\u0002\u0002UV\u0005\u0012\n\u0002VW\u0007\u0004",
    "\u0002\u0002W`\u0003\u0002\u0002\u0002XY\u0005\u0010\t\u0002YZ\u0007",
    "\u0004\u0002\u0002Z`\u0003\u0002\u0002\u0002[\\\u0005\u0002\u0002\u0002",
    "\\]\u0005\u0012\n\u0002]^\u0007\u0004\u0002\u0002^`\u0003\u0002\u0002",
    "\u0002_S\u0003\u0002\u0002\u0002_X\u0003\u0002\u0002\u0002_[\u0003\u0002",
    "\u0002\u0002`\u0015\u0003\u0002\u0002\u0002ac\u0005\u0014\u000b\u0002",
    "ba\u0003\u0002\u0002\u0002cf\u0003\u0002\u0002\u0002db\u0003\u0002\u0002",
    "\u0002de\u0003\u0002\u0002\u0002e\u0017\u0003\u0002\u0002\u0002fd\u0003",
    "\u0002\u0002\u0002\r\u001f).5;>EGP_d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'0'", "'.'", "':'", "'-'", "','", "'('", "')'", 
                     'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                     'null', "':-'", "':~'", "'<'", "'<='", "'>'", "'>='", 
                     "'='", "'=='", "'!='" ];

var symbolicNames = [ 'null', "Zero", "Dot", "Colon", "Minus", "COMMA", 
                      "LB", "RB", "Positive_Int", "Negative_Int", "Dot_Notation", 
                      "Sci_Notation", "STRING", "VAR", "Non_Numberic", "Pre", 
                      "Normal_Infer", "Default_Infer", "LESS_THAN", "LEQ", 
                      "GREATER_THAN", "GEQ", "EQUAL", "DOUBLE_EQUAL", "NEQ", 
                      "WS" ];

var ruleNames =  [ "infer", "numberic", "constant", "predicate", "term", 
                   "term_list", "literal", "head", "body", "sentence", "program" ];

function RuleEditorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RuleEditorParser.prototype = Object.create(antlr4.Parser.prototype);
RuleEditorParser.prototype.constructor = RuleEditorParser;

Object.defineProperty(RuleEditorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RuleEditorParser.EOF = antlr4.Token.EOF;
RuleEditorParser.Zero = 1;
RuleEditorParser.Dot = 2;
RuleEditorParser.Colon = 3;
RuleEditorParser.Minus = 4;
RuleEditorParser.COMMA = 5;
RuleEditorParser.LB = 6;
RuleEditorParser.RB = 7;
RuleEditorParser.Positive_Int = 8;
RuleEditorParser.Negative_Int = 9;
RuleEditorParser.Dot_Notation = 10;
RuleEditorParser.Sci_Notation = 11;
RuleEditorParser.STRING = 12;
RuleEditorParser.VAR = 13;
RuleEditorParser.Non_Numberic = 14;
RuleEditorParser.Pre = 15;
RuleEditorParser.Normal_Infer = 16;
RuleEditorParser.Default_Infer = 17;
RuleEditorParser.LESS_THAN = 18;
RuleEditorParser.LEQ = 19;
RuleEditorParser.GREATER_THAN = 20;
RuleEditorParser.GEQ = 21;
RuleEditorParser.EQUAL = 22;
RuleEditorParser.DOUBLE_EQUAL = 23;
RuleEditorParser.NEQ = 24;
RuleEditorParser.WS = 25;

RuleEditorParser.RULE_infer = 0;
RuleEditorParser.RULE_numberic = 1;
RuleEditorParser.RULE_constant = 2;
RuleEditorParser.RULE_predicate = 3;
RuleEditorParser.RULE_term = 4;
RuleEditorParser.RULE_term_list = 5;
RuleEditorParser.RULE_literal = 6;
RuleEditorParser.RULE_head = 7;
RuleEditorParser.RULE_body = 8;
RuleEditorParser.RULE_sentence = 9;
RuleEditorParser.RULE_program = 10;

function InferContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_infer;
    return this;
}

InferContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InferContext.prototype.constructor = InferContext;

InferContext.prototype.Normal_Infer = function() {
    return this.getToken(RuleEditorParser.Normal_Infer, 0);
};

InferContext.prototype.Default_Infer = function() {
    return this.getToken(RuleEditorParser.Default_Infer, 0);
};

InferContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterInfer(this);
	}
};

InferContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitInfer(this);
	}
};

InferContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitInfer(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.InferContext = InferContext;

RuleEditorParser.prototype.infer = function() {

    var localctx = new InferContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RuleEditorParser.RULE_infer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        _la = this._input.LA(1);
        if(!(_la===RuleEditorParser.Normal_Infer || _la===RuleEditorParser.Default_Infer)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumbericContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_numberic;
    return this;
}

NumbericContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumbericContext.prototype.constructor = NumbericContext;

NumbericContext.prototype.Positive_Int = function() {
    return this.getToken(RuleEditorParser.Positive_Int, 0);
};

NumbericContext.prototype.Negative_Int = function() {
    return this.getToken(RuleEditorParser.Negative_Int, 0);
};

NumbericContext.prototype.Zero = function() {
    return this.getToken(RuleEditorParser.Zero, 0);
};

NumbericContext.prototype.Sci_Notation = function() {
    return this.getToken(RuleEditorParser.Sci_Notation, 0);
};

NumbericContext.prototype.Dot_Notation = function() {
    return this.getToken(RuleEditorParser.Dot_Notation, 0);
};

NumbericContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterNumberic(this);
	}
};

NumbericContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitNumberic(this);
	}
};

NumbericContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitNumberic(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.NumbericContext = NumbericContext;

RuleEditorParser.prototype.numberic = function() {

    var localctx = new NumbericContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RuleEditorParser.RULE_numberic);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleEditorParser.Zero) | (1 << RuleEditorParser.Positive_Int) | (1 << RuleEditorParser.Negative_Int) | (1 << RuleEditorParser.Dot_Notation) | (1 << RuleEditorParser.Sci_Notation))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_constant;
    return this;
}

ConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantContext.prototype.constructor = ConstantContext;

ConstantContext.prototype.Non_Numberic = function() {
    return this.getToken(RuleEditorParser.Non_Numberic, 0);
};

ConstantContext.prototype.STRING = function() {
    return this.getToken(RuleEditorParser.STRING, 0);
};

ConstantContext.prototype.numberic = function() {
    return this.getTypedRuleContext(NumbericContext,0);
};

ConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterConstant(this);
	}
};

ConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitConstant(this);
	}
};

ConstantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitConstant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.ConstantContext = ConstantContext;

RuleEditorParser.prototype.constant = function() {

    var localctx = new ConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RuleEditorParser.RULE_constant);
    try {
        this.state = 29;
        switch(this._input.LA(1)) {
        case RuleEditorParser.Non_Numberic:
            this.enterOuterAlt(localctx, 1);
            this.state = 26;
            this.match(RuleEditorParser.Non_Numberic);
            break;
        case RuleEditorParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 27;
            this.match(RuleEditorParser.STRING);
            break;
        case RuleEditorParser.Zero:
        case RuleEditorParser.Positive_Int:
        case RuleEditorParser.Negative_Int:
        case RuleEditorParser.Dot_Notation:
        case RuleEditorParser.Sci_Notation:
            this.enterOuterAlt(localctx, 3);
            this.state = 28;
            this.numberic();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PredicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_predicate;
    return this;
}

PredicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicateContext.prototype.constructor = PredicateContext;

PredicateContext.prototype.Pre = function() {
    return this.getToken(RuleEditorParser.Pre, 0);
};

PredicateContext.prototype.Non_Numberic = function() {
    return this.getToken(RuleEditorParser.Non_Numberic, 0);
};

PredicateContext.prototype.Minus = function() {
    return this.getToken(RuleEditorParser.Minus, 0);
};

PredicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterPredicate(this);
	}
};

PredicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitPredicate(this);
	}
};

PredicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitPredicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.PredicateContext = PredicateContext;

RuleEditorParser.prototype.predicate = function() {

    var localctx = new PredicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RuleEditorParser.RULE_predicate);
    try {
        this.state = 39;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.match(RuleEditorParser.Pre);
            this.state = 32;
            this.match(RuleEditorParser.Non_Numberic);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 33;
            this.match(RuleEditorParser.Non_Numberic);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 34;
            this.match(RuleEditorParser.Minus);
            this.state = 35;
            this.match(RuleEditorParser.Pre);
            this.state = 36;
            this.match(RuleEditorParser.Non_Numberic);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 37;
            this.match(RuleEditorParser.Minus);
            this.state = 38;
            this.match(RuleEditorParser.Non_Numberic);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.VAR = function() {
    return this.getToken(RuleEditorParser.VAR, 0);
};

TermContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

TermContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.TermContext = TermContext;

RuleEditorParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RuleEditorParser.RULE_term);
    try {
        this.state = 44;
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.match(RuleEditorParser.VAR);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.constant();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 43;
            this.literal();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Term_listContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_term_list;
    return this;
}

Term_listContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Term_listContext.prototype.constructor = Term_listContext;

Term_listContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

Term_listContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RuleEditorParser.COMMA);
    } else {
        return this.getToken(RuleEditorParser.COMMA, i);
    }
};


Term_listContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterTerm_list(this);
	}
};

Term_listContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitTerm_list(this);
	}
};

Term_listContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitTerm_list(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.Term_listContext = Term_listContext;

RuleEditorParser.prototype.term_list = function() {

    var localctx = new Term_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RuleEditorParser.RULE_term_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.term();
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RuleEditorParser.COMMA) {
            this.state = 47;
            this.match(RuleEditorParser.COMMA);
            this.state = 48;
            this.term();
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.predicate = function() {
    return this.getTypedRuleContext(PredicateContext,0);
};

LiteralContext.prototype.LB = function() {
    return this.getToken(RuleEditorParser.LB, 0);
};

LiteralContext.prototype.RB = function() {
    return this.getToken(RuleEditorParser.RB, 0);
};

LiteralContext.prototype.term_list = function() {
    return this.getTypedRuleContext(Term_listContext,0);
};

LiteralContext.prototype.VAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RuleEditorParser.VAR);
    } else {
        return this.getToken(RuleEditorParser.VAR, i);
    }
};


LiteralContext.prototype.GREATER_THAN = function() {
    return this.getToken(RuleEditorParser.GREATER_THAN, 0);
};

LiteralContext.prototype.GEQ = function() {
    return this.getToken(RuleEditorParser.GEQ, 0);
};

LiteralContext.prototype.LESS_THAN = function() {
    return this.getToken(RuleEditorParser.LESS_THAN, 0);
};

LiteralContext.prototype.LEQ = function() {
    return this.getToken(RuleEditorParser.LEQ, 0);
};

LiteralContext.prototype.NEQ = function() {
    return this.getToken(RuleEditorParser.NEQ, 0);
};

LiteralContext.prototype.DOUBLE_EQUAL = function() {
    return this.getToken(RuleEditorParser.DOUBLE_EQUAL, 0);
};

LiteralContext.prototype.constant = function() {
    return this.getTypedRuleContext(ConstantContext,0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.LiteralContext = LiteralContext;

RuleEditorParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RuleEditorParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.state = 69;
        switch(this._input.LA(1)) {
        case RuleEditorParser.Minus:
        case RuleEditorParser.Non_Numberic:
        case RuleEditorParser.Pre:
            this.enterOuterAlt(localctx, 1);
            this.state = 54;
            this.predicate();
            this.state = 60;
            _la = this._input.LA(1);
            if(_la===RuleEditorParser.LB) {
                this.state = 55;
                this.match(RuleEditorParser.LB);
                this.state = 57;
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleEditorParser.Zero) | (1 << RuleEditorParser.Minus) | (1 << RuleEditorParser.Positive_Int) | (1 << RuleEditorParser.Negative_Int) | (1 << RuleEditorParser.Dot_Notation) | (1 << RuleEditorParser.Sci_Notation) | (1 << RuleEditorParser.STRING) | (1 << RuleEditorParser.VAR) | (1 << RuleEditorParser.Non_Numberic) | (1 << RuleEditorParser.Pre))) !== 0)) {
                    this.state = 56;
                    this.term_list();
                }

                this.state = 59;
                this.match(RuleEditorParser.RB);
            }

            break;
        case RuleEditorParser.VAR:
            this.enterOuterAlt(localctx, 2);
            this.state = 62;
            this.match(RuleEditorParser.VAR);
            this.state = 63;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleEditorParser.LESS_THAN) | (1 << RuleEditorParser.LEQ) | (1 << RuleEditorParser.GREATER_THAN) | (1 << RuleEditorParser.GEQ) | (1 << RuleEditorParser.DOUBLE_EQUAL) | (1 << RuleEditorParser.NEQ))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 67;
            var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
            switch(la_) {
            case 1:
                this.state = 64;
                this.match(RuleEditorParser.VAR);
                break;

            case 2:
                this.state = 65;
                this.constant();
                break;

            case 3:
                this.state = 66;
                this.predicate();
                break;

            }
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HeadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_head;
    return this;
}

HeadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HeadContext.prototype.constructor = HeadContext;

HeadContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

HeadContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterHead(this);
	}
};

HeadContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitHead(this);
	}
};

HeadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitHead(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.HeadContext = HeadContext;

RuleEditorParser.prototype.head = function() {

    var localctx = new HeadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RuleEditorParser.RULE_head);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        this.literal();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_body;
    return this;
}

BodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BodyContext.prototype.constructor = BodyContext;

BodyContext.prototype.literal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LiteralContext);
    } else {
        return this.getTypedRuleContext(LiteralContext,i);
    }
};

BodyContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RuleEditorParser.COMMA);
    } else {
        return this.getToken(RuleEditorParser.COMMA, i);
    }
};


BodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterBody(this);
	}
};

BodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitBody(this);
	}
};

BodyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitBody(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.BodyContext = BodyContext;

RuleEditorParser.prototype.body = function() {

    var localctx = new BodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RuleEditorParser.RULE_body);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.literal();
        this.state = 78;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RuleEditorParser.COMMA) {
            this.state = 74;
            this.match(RuleEditorParser.COMMA);
            this.state = 75;
            this.literal();
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SentenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_sentence;
    return this;
}

SentenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SentenceContext.prototype.constructor = SentenceContext;

SentenceContext.prototype.head = function() {
    return this.getTypedRuleContext(HeadContext,0);
};

SentenceContext.prototype.infer = function() {
    return this.getTypedRuleContext(InferContext,0);
};

SentenceContext.prototype.body = function() {
    return this.getTypedRuleContext(BodyContext,0);
};

SentenceContext.prototype.Dot = function() {
    return this.getToken(RuleEditorParser.Dot, 0);
};

SentenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterSentence(this);
	}
};

SentenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitSentence(this);
	}
};

SentenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitSentence(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.SentenceContext = SentenceContext;

RuleEditorParser.prototype.sentence = function() {

    var localctx = new SentenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RuleEditorParser.RULE_sentence);
    try {
        this.state = 93;
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.head();
            this.state = 82;
            this.infer();
            this.state = 83;
            this.body();
            this.state = 84;
            this.match(RuleEditorParser.Dot);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.head();
            this.state = 87;
            this.match(RuleEditorParser.Dot);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 89;
            this.infer();
            this.state = 90;
            this.body();
            this.state = 91;
            this.match(RuleEditorParser.Dot);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RuleEditorParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.sentence = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SentenceContext);
    } else {
        return this.getTypedRuleContext(SentenceContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof RuleEditorListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RuleEditorVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RuleEditorParser.ProgramContext = ProgramContext;

RuleEditorParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RuleEditorParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 98;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RuleEditorParser.Minus) | (1 << RuleEditorParser.VAR) | (1 << RuleEditorParser.Non_Numberic) | (1 << RuleEditorParser.Pre) | (1 << RuleEditorParser.Normal_Infer) | (1 << RuleEditorParser.Default_Infer))) !== 0)) {
            this.state = 95;
            this.sentence();
            this.state = 100;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RuleEditorParser = RuleEditorParser;
});
define(function(require, exports, module) {
// Generated from RuleEditor.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RuleEditorParser.
function RuleEditorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RuleEditorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RuleEditorListener.prototype.constructor = RuleEditorListener;

// Enter a parse tree produced by RuleEditorParser#infer.
RuleEditorListener.prototype.enterInfer = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#infer.
RuleEditorListener.prototype.exitInfer = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#numberic.
RuleEditorListener.prototype.enterNumberic = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#numberic.
RuleEditorListener.prototype.exitNumberic = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#constant.
RuleEditorListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#constant.
RuleEditorListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#predicate.
RuleEditorListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#predicate.
RuleEditorListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#term.
RuleEditorListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#term.
RuleEditorListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#term_list.
RuleEditorListener.prototype.enterTerm_list = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#term_list.
RuleEditorListener.prototype.exitTerm_list = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#literal.
RuleEditorListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#literal.
RuleEditorListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#head.
RuleEditorListener.prototype.enterHead = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#head.
RuleEditorListener.prototype.exitHead = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#body.
RuleEditorListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#body.
RuleEditorListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#sentence.
RuleEditorListener.prototype.enterSentence = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#sentence.
RuleEditorListener.prototype.exitSentence = function(ctx) {
};


// Enter a parse tree produced by RuleEditorParser#program.
RuleEditorListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by RuleEditorParser#program.
RuleEditorListener.prototype.exitProgram = function(ctx) {
};



exports.RuleEditorListener = RuleEditorListener;
});
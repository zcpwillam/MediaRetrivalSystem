define(function(require, exports, module) {
// Generated from RuleEditor.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RuleEditorParser.

function RuleEditorVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RuleEditorVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RuleEditorVisitor.prototype.constructor = RuleEditorVisitor;

// Visit a parse tree produced by RuleEditorParser#infer.
RuleEditorVisitor.prototype.visitInfer = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#numberic.
RuleEditorVisitor.prototype.visitNumberic = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#constant.
RuleEditorVisitor.prototype.visitConstant = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#predicate.
RuleEditorVisitor.prototype.visitPredicate = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#term.
RuleEditorVisitor.prototype.visitTerm = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#term_list.
RuleEditorVisitor.prototype.visitTerm_list = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#literal.
RuleEditorVisitor.prototype.visitLiteral = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#head.
RuleEditorVisitor.prototype.visitHead = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#body.
RuleEditorVisitor.prototype.visitBody = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#sentence.
RuleEditorVisitor.prototype.visitSentence = function(ctx) {
};


// Visit a parse tree produced by RuleEditorParser#program.
RuleEditorVisitor.prototype.visitProgram = function(ctx) {
};



exports.RuleEditorVisitor = RuleEditorVisitor;
});
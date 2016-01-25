importScripts("worker-base.js");

var antlr4;
var RuleEditorLexer;
var RuleEditorParser;
var RuleEditorListener;
var RuleEditorVisitor;

var initAntlr=function(){
    antlr4=require("antlr4/index");
    RuleEditorLexer=require("RuleEditorLexer");
    RuleEditorParser=require("RuleEditorParser");
    RuleEditorListener=require("RuleEditorListener");
    RuleEditorVisitor=require("RuleEditorVisitor");
}

define("ace/worker/ruleeditor-worker",["require","exports","module","ace/lib/oop","ace/worker/mirror"], function(require, exports, module) {
"use strict";

    var oop = require("ace/lib/oop");
    var Mirror = require("ace/worker/mirror").Mirror;

    var RuleEditorWorker = exports.RuleEditorWorker = function(sender) {
        Mirror.call(this, sender);
        this.setTimeout(200);
        //this.$dialect = null;
    };

    oop.inherits(RuleEditorWorker, Mirror);

    (function() {

        this.onUpdate = function() {
            var value = this.doc.getValue();
            var errors = validate(value);
            this.sender.emit("annotate", errors);
        };

    }).call(RuleEditorWorker.prototype);

});

initAntlr();

var validate = function(input) {

   console.log(input);

    var chars = new antlr4.InputStream(input);
    var lexer = new RuleEditorLexer.RuleEditorLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new RuleEditorParser.RuleEditorParser(tokens);
    var annotations=[];
    //parser.removeErrorListeners();
    parser.addErrorListener(new AnnotatingErrorListener(annotations));
    parser.buildParseTrees=true;
    parser.program();
    return annotations;
};

var AnnotatingErrorListener = function(annotations) {
    antlr4.error.ErrorListener.call(this);
    this.annotations = annotations;
    return this;
};

AnnotatingErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
AnnotatingErrorListener.prototype.constructor = AnnotatingErrorListener;//

AnnotatingErrorListener.prototype.syntaxError = function(recognizer, offendingSymbol, line, column, msg, e) {
    console.log(line);
    this.annotations.push({
        row: line - 1,
        column: column,
        text: msg,
        type: "error"
 });
};
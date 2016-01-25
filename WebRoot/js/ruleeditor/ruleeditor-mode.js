define('ace/mode/ruleeditor',["require","exports","module"], function(require, exports, module) {
    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var RuleEditorRules = function() {
        var keywordMapper = this.createKeywordMapper({
            "keyword.control": "if|then|else",
            "keyword.operator": "and|or|not",
            "keyword.other": "class",
            "storage.type": "int|float|text",
            "storage.modifier": "private|public",
            "support.function": "print|sort",
            "constant.language": "true|false"
  }, "identifier");
        this.$rules = {
            "start": [
                { token : "comment", regex : "//" },
                { token : "string",  regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]' },
                { token : "constant.numeric", regex : "0[xX][0-9a-fA-F]+\\b" },
                { token : "constant.numeric", regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b" },
                { token : "keyword.operator", regex : "!|%|\\\\|/|\\*|\\-|\\+|~=|==|<>|!=|<=|>=|=|<|>|&&|\\|\\|" },
                { token : "punctuation.operator", regex : "\\?|\\:|\\,|\\;|\\." },
                { token : "paren.lparen", regex : "[[({]" },
                { token : "paren.rparen", regex : "[\\])}]" },
                { token : "text", regex : "\\s+" },
                { token: keywordMapper, regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b" }
            ]
        };
    };
    oop.inherits(RuleEditorRules, TextHighlightRules);

    var RuleEditorMode = function() {
        this.HighlightRules = RuleEditorRules;
    };
    oop.inherits(RuleEditorMode, TextMode);

    (function() {
        var WorkerClient = require("ace/worker/worker_client").WorkerClient;
        this.createWorker = function(session) {
            this.$worker = new WorkerClient(["ace"], "ace/worker/ruleeditor-worker", "RuleEditorWorker", "js/ruleeditor/ruleeditor-worker.js");
            this.$worker.attachToDocument(session.getDocument());
            
            this.$worker.on("errors", function(e) {
                session.setAnnotations(e.data);
            });
            
            this.$worker.on("annotate", function(e) {
                session.setAnnotations(e.data);
            });
            
            this.$worker.on("terminate", function() {
                session.clearAnnotations();
            });
        
            return this.$worker;

        };

        this.$id = "ace/mode/ruleeditor-mode";

    }).call(RuleEditorMode.prototype);

    exports.Mode = RuleEditorMode;
});
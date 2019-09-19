const hljs = require("highlight.js");
const hasTemplateFormat = require("./src/hasTemplateFormat");
const markdownHljs = require("./src/markdownSyntaxHighlight");

module.exports = {
    initArguments: { hljs },
    configFunction: function(eleventyConfig, options = {}) {
        if( hasTemplateFormat(options.templateFormats, "md") ) {
            eleventyConfig.addMarkdownHighlighter(markdownHljs);
        }
    }
};
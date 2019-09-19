const hljs = require("highlight.js");
const hasTemplateFormat = require("./src/hasTemplateFormat");
const markdownHljs = require("./src/markdownSyntaxHighlight");

module.exports = {
    initArguments: { hljs },
    configFunction: function(eleventyConfig, options = {}) {
        // TODO hbs?
        if( hasTemplateFormat(options.templateFormats, "liquid") ) {
            eleventyConfig.addLiquidTag("highlight", (liquidEngine) => {
                // {% highlight js 0 2 %}
                let highlight = new LiquidHighlightTag(liquidEngine);
                return highlight.getObject();
            });
        }

        if( hasTemplateFormat(options.templateFormats, "njk") ) {
            eleventyConfig.addPairedNunjucksShortcode("highlight", (content, args) => {
                // {% highlight "js 0 2-3" %}
                let [language, ...highlightNumbers] = args.split(" ");
                return HighlightPairedShortcode(content, language, highlightNumbers.join(" "));
            });
        }

        if( hasTemplateFormat(options.templateFormats, "md") ) {
            eleventyConfig.addMarkdownHighlighter(markdownPrismJs);
        }
    }
};
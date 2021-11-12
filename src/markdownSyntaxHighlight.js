const hljs = require("highlight.js");

module.exports = function(str, language) {
    
    if(!language) {
        // empty string means defer to the upstream escaping code built into markdown lib.
        return "";
    }

    let split = language.split("/");
    if( split.length ) {
        language = split.shift();
    }

    let html;
    if(language === "text") {
        html = str;
    } else {
        html = 'test';
        html = hljs.highlight(str, {language: language}).value;
    }

    return `<pre class="language-${language}"><code class="language-${language}">${html}</code></pre>`;
};

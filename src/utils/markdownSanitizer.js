const {marked} = require('marked');
const sanitizeHTML = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdown(markdownContent) {
    // 1. Convert markdown to html
    const convertedHTML = marked.parse(markdownContent);
    // 2. Sanitize HTML
    const sanitizedHTML = sanitizeHTML(convertedHTML, {
        allowedTags: sanitizeHTML.defaults.allowedTags.concat(['img'])
    });
    const turndownService = new TurndownService();
    const convertedMarkdown = turndownService.turndown(sanitizedHTML);
    return convertedMarkdown;
}
module.exports = sanitizeMarkdown;
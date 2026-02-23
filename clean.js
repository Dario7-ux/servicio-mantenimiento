const fs = require("fs");
const path = require("path");

const projectRoot = ".";
const htmlFiles = fs
    .readdirSync(projectRoot)
    .filter((fileName) => fileName.toLowerCase().endsWith(".html"));

const replacements = [
    [/<!-- saved from url=.*?-->\s*/gi, ""],
    [/\s*<link rel="pingback"[^>]*>\s*/gi, "\n"],
    [/\s*<link rel="alternate" type="application\/rss\+xml"[\s\S]*?\/?>\s*/gi, "\n"],
    [/\s*<link rel="https:\/\/api\.w\.org\/"[^>]*>\s*/gi, "\n"],
    [/\s*<link rel="alternate" type="application\/json"[^>]*>\s*/gi, "\n"],
    [/\s*<link rel="EditURI"[^>]*>\s*/gi, "\n"],
    [/\s*<link rel="wlwmanifest"[^>]*>\s*/gi, "\n"],
    [/\s*<meta name="generator"[^>]*>\s*/gi, "\n"],
    [/\s*<link rel="canonical"[^>]*>\s*/gi, "\n"],
    [/\s*<link rel="shortlink"[^>]*>\s*/gi, "\n"],
    [/\s*<link rel="alternate" type="application\/json\+oembed"[^>]*>\s*/gi, "\n"],
    [/\s*<link rel="alternate" type="text\/xml\+oembed"[^>]*>\s*/gi, "\n"],
    [/\s*<script[^>]*>\s*window\._wpemojiSettings[\s\S]*?<\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*src="\.\/assets\/js\/wp-emoji-release\.min\.js"[^>]*><\/script>\s*/gi, "\n"],
    [/\s*<div id="uuidMachine">[\s\S]*?<\/div>\s*/gi, "\n"],
    [/\s*<script[^>]*src="\.\/assets\/add-to-cart\.min\.js\.descarga"[^>]*><\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*id="wc-add-to-cart-js-extra"[\s\S]*?<\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*id="contact-form-7-js-extra"[\s\S]*?<\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*id="woocommerce-js-extra"[\s\S]*?<\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*id="wc-cart-fragments-js-extra"[\s\S]*?<\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*id="jquery-yith-wcwl-js-extra"[\s\S]*?<\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*id="yith-woocompare-main-js-extra"[\s\S]*?<\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*id="functions-script-js-extra"[\s\S]*?<\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*>\s*var ajaxurl = [\s\S]*?<\/script>\s*/gi, "\n"],
    [/\s*<script[^>]*src="\.\/assets\/js\/jquery\.prettyPhoto\.js"[^>]*><\/script>\s*/gi, "\n"]
];

function cleanupHtml(rawContent) {
    let content = rawContent;

    for (const [regex, value] of replacements) {
        content = content.replace(regex, value);
    }

    content = content.replace(/\n{3,}/g, "\n\n");
    return content;
}

for (const htmlFile of htmlFiles) {
    const fullPath = path.join(projectRoot, htmlFile);
    const originalContent = fs.readFileSync(fullPath, "utf-8");
    const cleanedContent = cleanupHtml(originalContent);

    if (cleanedContent !== originalContent) {
        fs.writeFileSync(fullPath, cleanedContent, "utf-8");
        console.log("Cleaned:", htmlFile);
    }
}

console.log("Project cleanup finished.");

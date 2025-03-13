const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const embedEverything = require("eleventy-plugin-embed-everything");


module.exports = async function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPlugin(embedEverything);
};
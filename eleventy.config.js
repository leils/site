const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const embedEverything = require("eleventy-plugin-embed-everything");
const process = require('node:process');


module.exports = async function(eleventyConfig) {
	  const { EleventyRenderPlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyRenderPlugin);

    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    eleventyConfig.addPlugin(embedEverything);

    // eleventyConfig.addCollection("techTags", function(collectionApi) {
    //     let techMap = new Map();
    
    //     collectionApi.getAll().forEach(item => {
    //       if ("tech" in item.data) {
    //         item.data.tech.forEach(tag => {
    //           if (!techMap.has(tag)) {
    //             techMap.set(tag, []);
    //           }
    //           techMap.get(tag).push(item);
    //         });
    //       }
    //     });
    
    //     return techMap;
    //   });
    // eleventyConfig.addCollection("techTags", function(collectionApi) {
    //     const techMap = {};
    
    //     collectionApi.getAll().forEach(item => {
    //       const techList = item.data.tech;
    //       if (Array.isArray(techList)) {
    //         techList.forEach(tag => {
    //           if (!techMap[tag]) {
    //             techMap[tag] = [];
    //           }
    //           techMap[tag].push(item);
    //         });
    //       }
    //     });
    
    //     // console.log(Object.keys(techMap));
    //     // console.log('HELLLO!!!!!!!!!')
    //     // console.log(techMap);
    //     return techMap; // Must return a plain object!
    //   });
};
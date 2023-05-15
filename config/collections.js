/** @param {import("@11ty/eleventy").UserConfig} config */

module.exports = function(config) {
  config.addCollection("pages", (collection) => {
    const pages = collection.getFilteredByGlob("./src/pages/*.webc");
    return pages.sort((a, b) => a.data.navigation.order - b.data.navigation.order);
  });
};
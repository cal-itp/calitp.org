export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("src/stylesheets/**/*.css");
  eleventyConfig.addWatchTarget("src/stylesheets/");

  eleventyConfig.addPassthroughCopy("src/scripts/");
  eleventyConfig.addWatchTarget("src/scripts/");

  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");

  eleventyConfig.addPassthroughCopy("src/assets/");

  // Define a custom collection for grouping resources by category.
  eleventyConfig.addCollection("resourcesByCategory", (collectionApi) => {
    const resources = collectionApi.getFilteredByTag("resources");
    const groupedByCategory = Object.groupBy(resources, (resource) => resource.data.category);
    return Object.entries(groupedByCategory).sort(); // order by category name in ascending order
  });
}

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
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");

  // Define a custom collection for grouping resources by category.
  eleventyConfig.addCollection("resourcesByCategory", (collectionApi) => {
    const resources = collectionApi.getFilteredByTag("resources");
    const groupedByCategory = Object.groupBy(resources, (resource) => resource.data.category);
    return Object.entries(groupedByCategory).sort(); // order by category name in ascending order
  });

  // mimics jekyll's built-in link tag
  eleventyConfig.addShortcode("link", function (filePath) {
    // this syntax is liquidjs specific https://liquidjs.com/api/classes/Context.html#environments
    const all = this.ctx.environments.collections.all;
    const found = all.find((page) => page.inputPath.endsWith(filePath));

    // if no page in the 'all' collection matches the input path, fail hard and fast
    if (!found) throw new Error(`Could not find file ${filePath}`);

    return found.url;
  });
}

export default async function (eleventyConfig) {
  eleventyConfig.setInputDirectory("src");
  eleventyConfig.setLayoutsDirectory("_layouts");

  eleventyConfig.addPassthroughCopy("src/stylesheets/**/*.css");
  eleventyConfig.addWatchTarget("src/stylesheets/");

  eleventyConfig.addPassthroughCopy("src/scripts/");
  eleventyConfig.addWatchTarget("src/scripts/");

  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");

  eleventyConfig.addPassthroughCopy("src/assets/");
}

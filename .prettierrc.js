// Allow Prettier in .pre-commit-config.yaml to find plugins.
// https://stackoverflow.com/questions/78708497/prettier-plugins-not-found-with-pre-commit
// https://github.com/prettier/prettier/issues/15085
// we can explore making this an ESM module sometime down the line
module.exports = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 130,
  plugins: [require.resolve("@shopify/prettier-plugin-liquid")],
};

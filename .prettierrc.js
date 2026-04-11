// this convoluted plugins syntax is needed to ensure the plugin is available in pre-commits context
// if the shopify plugin was ESM compatible, we could use await import() instead
// https://stackoverflow.com/questions/78708497/prettier-plugins-not-found-with-pre-commit
// https://github.com/prettier/prettier/issues/15085
const config = {
  plugins: [import.meta.resolve("@shopify/prettier-plugin-liquid")],
  printWidth: 130,
};

export default config;

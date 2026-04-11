// this convoluted plugins syntax is needed to ensure it is available in the pre-commit context specifically
// if the shopify plugin was ESM compatible, we could use await import() instead
// https://stackoverflow.com/questions/78708497/prettier-plugins-not-found-with-pre-commit
// https://github.com/prettier/prettier/issues/15085
const config = {
  printWidth: 130,
  // plugins: [import.meta.resolve("@shopify/prettier-plugin-liquid")],
};

export default config;

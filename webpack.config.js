const path = require("path");

module.exports = {
  entry: "./src/main.js",
  devServer: {
    contentBase: "./docs",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
};

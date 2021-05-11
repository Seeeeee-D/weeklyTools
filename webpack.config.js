const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/main.js",
  devServer: {
    contentBase: "./docs",
  },
  devtool: 'inline-source-map',
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
    clean: true
  },
  plugins: [
    // HTML ファイルの出力設定
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

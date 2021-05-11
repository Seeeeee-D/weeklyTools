const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //FIXME: mode
  //FIXME: Linter
  //FIXME: Formatter
  entry: "./src/main.js",
  devServer: {
    contentBase: "./docs",
  },
  devtool: "inline-source-map",
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
    clean: true,
  },
  plugins: [
    // HTML ファイルの出力設定
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: {
    //拡張子なしでimport書ける
    //名前が同じ場合は配列の拡張子順で優先される
    extensions: [".ts", ".js"],
  },
};

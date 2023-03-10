const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/ts/index.ts",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Demo",
      template: "./src/index.template.html",
      filename: "index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: "./dist",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("node:path");

const mode = process.env.NODE_ENV;

module.exports = {
  entry: { main: "./src/index.js" },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
    // assetModuleFilename: 'images/[name][ext]'
  },
  devtool: mode === "development" ? "eval-source-map" : "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|jpeg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|jpeg|png)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "contacts.html",
      filename: "contacts.html",
    }),
    new HtmlWebpackPlugin({
      template: "categories.html",
      filename: "categories.html",
    }),
    new HtmlWebpackPlugin({
      template: "simplePages.html",
      filename: "simplePages.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ["*.html"],
  },
  experiments: {
    topLevelAwait: true,
  },
};

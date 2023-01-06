const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: { esmodules: true } }],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "../postcss.config.js"),
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../../dist"),
    clean: true,
  },
};

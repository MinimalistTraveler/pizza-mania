const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "JS/[name].bundle.js",
    publicPath: "./"
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "../public/fonts"
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./public/images"
            }
          },
          "img-loader"
        ]
      },
      {
        test: /\.styl$/,
        use: [
          ExtractCssChunks.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          "postcss-loader",
          "stylus-loader"
        ]
      }
    ]
  },
  plugins: [
    new ExtractCssChunks({
      filename: "CSS/[name].css",
      hot: true,
      orderWarning: true,
      reloadAll: true,
      cssModules: true
    }),
    new CopyWebpackPlugin([
      {
        from: "./public/images",

        to: "./public/images/[name].[ext]"
      }
    ]),
    new HtmlWebpackPlugin({
      minify: true,
      title: "React App",
      filename: "index.html",
      template: "./public/index.html"
    })
  ]
};

const path    = require("path")
const webpack = require("webpack")

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    application: "./app/javascript/application.js"
  },
  output: {
    filename: "[name].js",
    sourceMapFilename: "[name].js.map",
    path: path.resolve(__dirname, "app/assets/builds"),
    chunkFilename: 'js/[name].js?id=[chunkhash]',
  },
  module: {
    rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: "development"
            }
          }
        },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff|woff2)$/i,
        use: {
          loader:'url-loader'
        },
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".svg"]
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  ]
}

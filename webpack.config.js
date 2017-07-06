var path = require("path");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: "ts-loader"
      }
    ]
  },
  entry: {
    "js/main": "./src/index.tsx"
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/public"
  },
  devServer: {
    historyApiFallback: {
      index: '/index.html',
      rewrites: [
        { from: /\/app\//, to: '/app/index.html' }
      ]
    },
  }
};

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
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: {
    "js/main": "./src/index.tsx"
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/public",
    devtoolLineToLine: true
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

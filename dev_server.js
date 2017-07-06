let WebpackDevServer = require("webpack-dev-server");
let webpack = require("webpack");
let config = require("./webpack.config");
const PORT = 8080;
let compiler = webpack(config);
let server = new WebpackDevServer(compiler, {
  contentBase: "./public",
  // Relative to content base
  publicPath: ""
});

console.log("Serving assets on port " + PORT);
server.listen(PORT, "localhost");

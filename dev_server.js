let WebpackDevServer = require("webpack-dev-server");
let webpack = require("webpack");
let config = require("./webpack.config");

let compiler = webpack(config);
let server = new WebpackDevServer(compiler, {
    contentBase: "./public",
    // Relative to content base
    publicPath: ""
});

console.log("Hit me up on port 3002.");
server.listen(3002, "localhost");

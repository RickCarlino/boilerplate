var path = require("path");

module.exports = {
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loader: "ts"
            }
        ]
    }, entry: {
        "js/main": "./src/index.tsx"
    }, output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public"
        // publicPath: PUBLIC_PATH
    }
    , resolve: {
        extensions: ['', '.js', '.ts', '.tsx', '.hbs'],
        fallback: path.join(__dirname, 'node_modules')
    }
    , devServer: {
        historyApiFallback: {
            index: '/index.html',
            rewrites: [
                { from: /\/app\//, to: '/app/index.html' }
            ]
        },
    }
};

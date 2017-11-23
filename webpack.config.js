var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "./loader/myLoader"
                },
            },
        ]
    },
};

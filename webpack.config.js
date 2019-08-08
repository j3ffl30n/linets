const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build/js'
    },

    module: {
        rules: [{
            test: /\.sass$/,
            use: ["style-loader", "css-loader", "sass-loader"],
            exclude: /node_modules/
        },
        {
            test: /\.(png|jpeg|ttf|...)$/,
            use: { loader: 'url-loader', options: { limit: 8192 } },
        }
        ]
    },
    devServer: {
        contentBase: __dirname + '/',
        open: true,
        compress: true,
        port: 9000,
    }

};
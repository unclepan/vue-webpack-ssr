const path = require('path');

const config  = {
    target: 'web',
    entry: path.resolve(__dirname, '../client/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.jsx$/,
            loader: 'babel-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(gif|jpe?g|png|svg)$/,
            use: [
            {
                loader: 'url-loader',
                options: {
                limit: 10000,
                name: 'resources/[path][name].[hash:8].[ext]'
                }
            }
            ]
        }
        ]
    },
};

module.exports = config;
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { plugins } = require('../restaurantPage/webpack.config');

module.exports =  {
        mode: 'development',
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname,'dist'),
        },
        module : {
                rules: [
                    {
                        test: /\.css$/i,
                        use: ['style-loader','css-loader'],
                    },
                ],
        },
        plugins: [
            new htmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
                inject: 'body',
            }),
        ],

};
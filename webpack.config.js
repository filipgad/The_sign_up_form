const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports  = {
    entry: ['./src/app.js', './src/main.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    module: {
        loaders: [ 
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env', 'stage-2']
                } 
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false', 'sass-loader']
                })
            }
        ]
    },    
    plugins: [
        new ExtractTextPlugin('./style.bundle.css')
    ] 
}

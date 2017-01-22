const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const webpack = require('webpack-stream').webpack;
const loaders = require('./loaders.config');

const dev = process.env.NODE_ENV !== 'production';

const options = {
    devtool: dev ? 'eval-source-map' : null,
    watch: dev,
    output: {
        publicPath: '/js/',
        filename: dev ? '[name].js' : '[chunkhash:12].js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
    ],
    module: {
        preLoaders: [],
        loaders: loaders
    }
}

module.exports = options;

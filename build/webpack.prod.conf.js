var webpack = require('webpack'),
    baseWebpackConfig = require('./webpack.base.conf'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    config = require('../config'),
    utils = require('./utils')


var webpackConfig = merge(baseWebpackConfig, {
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    }
})


module.exports = {

    externals: {
        jquery: 'window.$',
        moment: 'window.moment'
    },

    module: {
        rules: [{
            test: /(\.jsx|js)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }, {
            test: /(\.css)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader']
            })
        }]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: '../template/index.prod.html',
            filename: 'index.html'
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('css/style-[hash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'commons/manifest-[hash:8].js',
            minChunks: Infinity
        })
        // new webpack.optimize.OccurrenceOrderPlugin()
    ]
}
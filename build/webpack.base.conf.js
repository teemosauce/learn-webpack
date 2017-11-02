var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    entry: {
        one: __dirname + '/src/pages/one.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]-[hash:8].js',
    },
    // devtool: 'eval-source-map',
    devServer: {
        // contentBase: '',
        inline: true
    },
    // externals: {
    // 	jquery: 'window.$'
    // },

    resolve: {
        // modules: [
        // 	'node_modules'
        // ],
        alias: {
            moment: 'moment/min/moment.min.js',
            jquery: 'jquery/dist/jquery.min.js'
        }
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
            template: './index.html',
            filename: 'one.html',
            // chunks: ['manifest', 'vendors', 'one'],
            // hash: true,
            // xhtml: true
        }),
        // new HtmlWebpackPlugin({
        // 	template: './index.html',
        // 	filename: 'two.html',
        // 	chunks: ['manifest', 'vendors', 'public', 'two'],
        // 	// hash: true,
        // 	// xhtml: true
        // }),
        // new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('css/style-[hash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'commons/vendor-[hash:8].js',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            filename: 'commons/manifest-[hash:8].js',
            minChunks: Infinity
        })
        // new webpack.optimize.OccurrenceOrderPlugin()
    ]
}
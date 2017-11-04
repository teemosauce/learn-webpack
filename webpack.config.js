var webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	entry: {
		// main: __dirname + '/src/main',
		main: __dirname + '/src/entrys/login/app',
		vendor: ['react', 'react-dom', 'react-router-dom', 'antd'],
		// ab: [__dirname + '/src/pages/a', __dirname + '/src/pages/b']
		// public: [__dirname + '/src/utils/utils.js', __dirname + '/src/utils/common.js']
	},
	output: {
		path: __dirname + '/dist',
		filename: 'js/bundle-[name]-[hash:8].js',
		chunkFilename: 'js/[name]-chunk.js',
		chunkLoadTimeout: 12000,
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
		extensions: ['.js', '.json', '.jsx', '.css'],
		alias: {
			// moment: 'moment/min/moment.min.js',
			// jquery: 'jquery/dist/jquery.min.js'
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
				use: [{
					loader: 'css-loader',
					options: {
						minimize: true
					}
				}, 'postcss-loader']
			})
		}]
	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
			template: './index.html',
			// filename: 'one.html',
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
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin('css/style-[hash:8].css'),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'js/commons/vendor-[hash:8].js',
			minChunks: Infinity
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			filename: 'js/commons/manifest-[hash:8].js',
			minChunks: Infinity
		})
		// new webpack.optimize.OccurrenceOrderPlugin()
	]
}
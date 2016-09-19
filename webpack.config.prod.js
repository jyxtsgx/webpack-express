var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: {
		app: ['./src/index'],
		vendor: ['react', 'react-router', 'react-dom']
	},
	output: {
		path: path.join(__dirname, 'dist/js'),
		filename: '[name].js',
		chunkFilename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
		new webpack.optimize.OccurrenceOrderPlugin(),
		//设置为生产环境
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			include: path.join(__dirname, 'src')
		}]
	}
}
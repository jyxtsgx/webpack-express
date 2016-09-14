var path = require('path');
var webpack = require('webpack');
console.log('------------kaishi---------')
module.exports = {
	devtoll: 'cheap-module-eval-source-map',
	entry: [
		// necessary for hot reloading with IE:
		'eventsource-polyfill',
		// listen to code updates emitted by hot middleware:
		'webpack-hot-middleware/client',
		// your code:
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
    loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			include: path.join(__dirname, 'src')
		}]
	}
};
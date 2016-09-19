var path = require('path');
var webpack = require('webpack');
console.log('------------kaishi---------')
module.exports = {
	devtoll: 'cheap-module-eval-source-map',
	// entry: [
	// 	// necessary for hot reloading with IE:
	// 	'eventsource-polyfill',
	// 	// listen to code updates emitted by hot middleware:
	// 	'webpack-hot-middleware/client',
	// 	// your code:
	// 	'./src/index'
	// ],
	entry: {
		app: ['eventsource-polyfill','webpack-hot-middleware/client','./src/index'],
		vendor: ['react', 'react-router', 'react-dom', 'redux', 'react-redux', 'reqwest', 'redux-thunk']
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
    loaders: [
	    	{
				test: /\.js$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.css$/, // Only .css files
      			loader: 'style!css' // Run both loade
			}
		]
	}
};
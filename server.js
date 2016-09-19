var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var configProd = require('./webpack.config.prod');

var app = express();
var compiler = webpack(config);
var debug = process.env.NODE_ENV !== 'production';
var viewDir = debug ? 'build' : 'dist';

if (debug) {
	//开发模块
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	}));
	//热加载模块
	app.use(require('webpack-hot-middleware')(compiler));
} 

app.use(express.static(path.join(__dirname, viewDir)));
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, viewDir+'/index.html'))
})
app.listen(1000, function (err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Listening at http://localhost:1000')
});
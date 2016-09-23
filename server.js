var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
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
		publicPath: config.output.publicPath,
		header: { "Access-Control-Allow-Origin": "*" },
        historyApiFallback: true,

	}));
	//热加载模块
	app.use(require('webpack-hot-middleware')(compiler));
} 

app.use(express.static(path.join(__dirname, viewDir)));
//请求解析
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({
	extended: true
}))

app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, viewDir+'/index.html'));
})
app.post('/login', function (req, res) {
	if (req.body.username == "yangyunxin" && req.body.password == "yangyunxin") {
		res.send({isLogin: 1})
	} else {
		res.send({isLogin: 0})
	}
});
app.post('/about', function (req, res) {
	console.log('----------------')
});
var goods = [
	{category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
	{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
	{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
	{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
	{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
	{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
var userData = {
		username: 'yangyunxin',
		sexist: '男',
		age: '23',
		phone: '18883283605',
		email: '850801584@qq.com'
	}
app.post('/userlist', function (req, res) {
	res.send(userData)
});
app.post('/deleteUser', function (req, res) {
	userData[req.body.key] = null;
	res.send({isDelete: 1})
});
app.post('/addUser', function (req, res) {
	console.log(req.body);
	userData[req.body.property] = req.body.value;
	res.send({isAdd: 1});
});

app.post('/getGoods', function (req, res) {
	res.send(goods);
})
app.post('/deleteGoods', function (req, res) {
	console.log(req.body)
	goods.splice(req.body['key'], 1)
	res.send({isDelete: 1});
})
app.post('/filterGoods', function (req, res) {
	console.log(req.body.filterText)
	goods.filter(function (value) {
		console.log(value.name)
		return value.name.indexOf(req.body.filterText) > 0
	})
	res.send(goods.filter(function (value) {
		return value.name.indexOf(req.body.filterText) > 0
	}));
})
app.listen(1000, function (err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Listening at http://localhost:1000')
});
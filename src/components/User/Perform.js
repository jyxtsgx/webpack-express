import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/goods';
class List extends Component {
	render() {
		console.log(this.props.data);
		// let liList = this.props.data.map(function (data, key) {
		// 	return <li key={key}>{data.name}</li>
		// 	console.log(data)
		// })
		return (
			<ul>
				<li>test</li>
			</ul>
		)
	}
}
export default class Perform extends Component {
	constructor(props) {
		super(props);
	}
	componentWillReceiveProps(nextProps) {
		console.log('-----WillReceive-------')
		console.log(nextProps.state)
	}
	shouldComponent(nextProps) {
		console.log('-----shouldComponent-------')
		console.log(nextProps.state)
		return true;
	}
	componentWillMount() {
		console.log('-----will mount-------')
		this.props.actions.getGoods()
		.then(function () {
		})
	}
	componentDidMount() {
		console.log('-----will mount-------')
	}
	render() {
		console.log('---------render --------')
		console.log(this.props.state)
		this.props.state.goods.map(function () {})
		return (
			<div>
				<h4>高阶组件</h4>
				<List data={this.props.state.goods} />
			</div>
		)
	}
}
let arr = [1,2,3,4];
function connectPromise({promiseLoader, mapResultTops}) {
	return function (Comp) {
		return class AsyncComponent extends Component {
			constructor(props) {
				super(props);
			}
			componentWillMount() {
				console.log('-----will mount-------');
				console.log(mapResultTops(arr))
				// this.props.actions.getGoods()
				// .then(function () {
				// })
			}
			render() {
				return (
					<Comp {...this.props} />
				)
			}
		}
	}
}
var test = test;
const GoodsList = connectPromise({
	test,
	mapResultTops: function (arr) { return arr}
})(List)
// connect((state) => ({state: state.Goods}), (dispatch) => ({actions: bindActionCreators(actions, dispatch)}))(connectPromise);

// module.exports = GoodsList;
module.exports = GoodsList;

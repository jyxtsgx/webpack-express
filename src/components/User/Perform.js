import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/goods';
class List extends Component {
	render() {
		console.log(this.props.data);
		let liList = this.props.data.map(function (data, key) {
			return <li key={key}>{data.name}</li>
			console.log(data)
		})
		return (
			<ul>
				{liList}
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

module.exports = connect((state) => ({state: state.Goods}), (dispatch) => ({actions: bindActionCreators(actions, dispatch)}))(Perform);

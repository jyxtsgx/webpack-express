import React, { Component } from 'react';
class Ul extends Component {
	handleKeyDown(e) {
		if (e.keyCode === 13) {
			console.log(e.target.value);
		}
	}
	render() {
		console.log('------子组件-----');
		return (
			<div>
				<input onKeyDown={this.handleKeyDown.bind(this)} type="text" />
			</div>
		)
	}
}
class Status extends Component {
	constructor(props) {
		super(props);
	}
	componentWillReceiveProps(nextProps) {
		console.log('-----WillReceive-------')
		console.log(nextProps.state)
	}
	shouldComponent(nextProps, nextState) {
		console.log('-----shouldComponent-------')
		console.log(nextProps.state)
		return true;
	}
	componentWillMount() {
		console.log('-----will mount-------')
		// this.props.actions.getGoods()
		// .then(function () {
		// })
	}
	componentDidMount() {
		console.log('-----did mount-------')
	}
	render() {
		console.log('---------render --------')
		// console.log(this.props.state)
		return (
			<div>
				<h4>生命周期</h4>
				<Ul></Ul>
			</div>
		)
	}
}
module.exports = Status;
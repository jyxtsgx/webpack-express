import React, { Component } from 'react';
class Status extends Component {
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
		// this.props.actions.getGoods()
		// .then(function () {
		// })
	}
	componentDidMount() {
		console.log('-----will mount-------')
	}
	render() {
		console.log('---------render --------')
		// console.log(this.props.state)
		return (
			<div>
				<h4>生命周期</h4>
			</div>
		)
	}
}
module.exports = Status;
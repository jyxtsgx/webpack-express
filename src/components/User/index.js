import React, { Component } from 'react';
import '../../style/user.css';

export default class User extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		
	}
	render() {
		return (
			<div>
			{this.props.children}
			</div>
		)
	}
}

module.exports = User;
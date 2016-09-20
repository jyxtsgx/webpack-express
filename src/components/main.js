import React, { Component } from 'react';
export default class Main extends Component {
	constructor(props) {
		super(props);
		if (sessionStorage && sessionStorage.username) {
			this.state = {username: sessionStorage.username}
		} else {
			this.state = {username: '游客'}
		}
	}
	componentWillMount() {
		
	}
	render() {
		return <p>欢迎你，{this.state.username}</p>
	}
}

module.exports = Main
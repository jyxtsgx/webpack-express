import React, { Component } from 'react';
class SearchBar extends Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="search..." />
				<p>
					<input type="checkbox" name="selected" value="goods" />
					Only show products in stock
				</p>
			</form>
		)
	}
}
class Business extends Component {
	constructor(props) {
		super(props);
		this.state = {test: 'test'}
	}
	componentWillMount() {
		
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.test !== this.state.test
	}
	handleChange() {
		this.setState({test: 'aaaa'})
	}
	render() {
		return (
			<div>
				<h4>个人业务</h4>
				<div>
					<SearchBar />
				</div>
				<div>{this.state.test}</div>
				<button onClick={this.handleChange.bind(this)}>change</button>
			</div>
		)
	}
}

module.exports = Business;
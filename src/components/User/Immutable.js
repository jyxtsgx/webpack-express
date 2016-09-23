import React, { Component } from 'react';
import Immutable from 'immutable';
class Immutables extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				times: 0
			}
		}
	}
	componentDidMount() {
		Immutable.fromJS({a: {b: [10, 20, 30]}, c: 40}, function (key, value) {
			// var isIndexed = Immutable.Iterable.isIndexed(value);
			// return isIndexed ? value.toList() : value.toOrderedMap();
			console.log(value.get('a'))
		});
	}
	addHandle() {
		//data和this.state.data是同一个内存地址
		var data = this.state.data;
		data.times++;
		this.setState({data: data})
	}
	render() {
		console.log('---render-----')
		return (
			<div>
				<h4>Immutable用法</h4>
				<div>
					<span>{this.state.data.times}</span>
					<button onClick={this.addHandle.bind(this)}>add</button>
				</div>
			</div>
		)
	}
}

module.exports = Immutables;
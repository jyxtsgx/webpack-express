import React, { Component } from 'react';
class Immutable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				times: 0
			}
		}
	}
	addHandle() {
		//data和this.state.data是同一个内存地址
		var data = this.state.data;
		data.times++;
		console.log(this.state.data);
		this.setState({data: data})
	}
	render() {
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

module.exports = Immutable;
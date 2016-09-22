import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/goods';

class SearchBar extends Component {
	handleChange() {
		this.props.handleFilter(this.refs.search.value, this.refs.select.checked);
	}
	render() {
		return (
			<form>
				<input ref="search" type="text" placeholder="search..."onChange={this.handleChange.bind(this)} />
				<p>
					<input ref="select" type="checkbox" name="selected" value="goods" />
					Only show products in stock
				</p>
			</form>
		)
	}
}

class ProductTable extends Component {
	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>test</td>
						<td>test</td>
					</tr>
				</tbody>
			</table>
		)
	}
}

class Business extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		}
	}
	componentWillMount() {
		
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.test !== this.state.test
	}
	handleFilter(filterText, inStockOnly) {
		console.log('------------------');
		let self = this;
		this.setState({
			filterText: filterText,
			inStockOnly: inStockOnly
		}, function () {
			console.log(this.state)
		})
	}
	render() {
		return (
			<div className="business">
				<h4>个人业务</h4>
				<div className="search_wrap">
					<SearchBar handleFilter={this.handleFilter.bind(this)} />
					<ProductTable filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
				</div>
			</div>
		)
	}
}
//绑定state actions到props
module.exports = connect((state) => ({state: state.Goods}), (dispatch) => ({actions: bindActionCreators(actions, dispatch)}))(Business);
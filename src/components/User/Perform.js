import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/goods';
/**
 * 结构组件，只展示内容数据，不做逻辑处理
 * state有props从父级接受
 */
class List extends Component {
	render() {
		let liList = this.props.state.goods.map(function (data, key) {
			return <li key={key}>{data.name}</li>
			console.log(data)
		})
		return (
			<div>
				<h4>高阶组件</h4>
				<ul>
					{liList}
				</ul>
			</div>
		)
	}
}
/**
 * 高阶组件容器函数
 * @return a component
 * 返回值是父组件，用connect绑定state和actions
 * {...this.props}是es6写法，把props全部作为子组件的属性
 * connect react-redux的函数，绑定action和state
 */
function connectPromise() {
	return function (Comp) {
		class AsyncComponent extends Component {
			constructor(props) {
				super(props);
			}
			componentWillMount() {
				console.log('-----will mount-------');
				this.props.actions.getGoods()
				.then(function () {
				})
			}
			render() {
				return (
					<Comp {...this.props} />
				)
			}
		}
		return connect((state) => ({state: state.Goods}), (dispatch) => ({actions: bindActionCreators(actions, dispatch)}))(AsyncComponent);
	}
}
const GoodsList = connectPromise()(List)
module.exports = GoodsList;

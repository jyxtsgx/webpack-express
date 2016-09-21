import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../../style/user.css';
import * as actions from '../../actions/user';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {user: null};
	}
	componentDidMount() {
		let self = this;
		this.props.actions.getUser()
		.then(function () {
			self.setState({user: self.props.state.user});
		})
	}
	deleteHandle(key) {
		let self = this;
		this.props.actions.deleteUser({key: key})
		.then(function () {
			if (self.props.state.isDelete) {
				alert('删除成功')
			}
		})
	}
	addHandle() {
		let self = this;
		let property = this.refs.property.value;
		let value = this.refs.values.value;
		console.log(property, value);
		this.props.actions.addUser({property: property, value: value})
		.then(function () {
			if (self.props.state.isAdd) {
				alert('新增成功')
			}
		})
	}
	render() {
		let data = this.props.state.user;
		let dlList = [];
		for (let key in data) {
			if (data[key]) {
				dlList.push(
					<dl key={key} className="clr">
						<dt>{key}：</dt>
						<dd>{data[key]}</dd>
						<span className="delete" onClick={this.deleteHandle.bind(this, key)}>delete</span>
					</dl>
				)
			}
		}
		return (
			<div>
				<h4>个人信息</h4>
				<div className="user_info">
					{dlList}
				</div>
				<div className="add_user">
					<div className="add_user_form">
						<input ref="property" type="text" placeholder="username" />
						<input ref="values" type="text" placeholder="username" />
					</div>
					<button onClick={this.addHandle.bind(this)}>add</button>
				</div>
			</div>
		)
	}
}
function selectState(state) {
	return {
		state: state.User
	}
}
function bindActionDispatcher(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
module.exports = connect(selectState, bindActionDispatcher)(Main);

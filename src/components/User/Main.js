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
		var self = this;
		this.props.actions.getUser()
		.then(function () {
			self.setState({user: self.props.state.user});
		})
	}
	render() {
		let data = this.state.user;
		let dlList = [];
		for (let key in data) {
			dlList.push(
				<dl key={key} className="clr">
					<dt>{key}：</dt>
					<dd>{data[key]}</dd>
				</dl>
			)
		}
		return (
			<div>
				<h4>个人信息</h4>
				<div className="user_info">
					{dlList}
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

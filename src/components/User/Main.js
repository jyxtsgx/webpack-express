import React, { Component } from 'react';
import '../../style/user.css';
export default class Main extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		
	}
	render() {
		return (
			<div>
				<h4>个人信息</h4>
				<div className="user_info">
					<dl className="clr">
						<dt>姓名：</dt>
						<dd>yangyunxin</dd>
					</dl>
					<dl className="clr">
						<dt>姓名：</dt>
						<dd>yangyunxin</dd>
					</dl>
					<dl className="clr">
						<dt>姓名：</dt>
						<dd>yangyunxin</dd>
					</dl>
				</div>
			</div>
		)
	}
}

module.exports = Main;
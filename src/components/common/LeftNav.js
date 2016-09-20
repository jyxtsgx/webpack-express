import React, { Component } from 'react';
import { Link } from 'react-router';
export default class LeftNav extends Component {
	render() {
		return (
			<div className="left_nav">
				<div className="left_list">
					<div className="left_item">
						<h4>个人展示</h4>
						<ul>
							<li><Link to="/user">个人信息</Link></li>
							<li><Link to="/user/business">个人业务</Link></li>
							<li><Link to="/user/per">个人表现</Link></li>
						</ul>
					</div>
					<div className="left_item">
						<h4>公司展示</h4>
						<ul>
							<li><Link to="/user">公司简介</Link></li>
							<li><Link to="/article">公司组成</Link></li>
							<li><Link to="/article-detail">公司成长</Link></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
import React, { Component } from 'react';
import { Link } from 'react-router';
export default class LeftNav extends Component {
	render() {
		return (
			<div className="left_nav">
				<div className="left_list">
					<div className="left_item">
						<h4>redux应用</h4>
						<ul>
							<li><Link to="/user">增删改查</Link></li>
							<li><Link to="/user/business">筛选数据</Link></li>
							<li><Link to="/user/per">高阶组件</Link></li>
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
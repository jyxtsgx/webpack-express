import React, { Component } from 'react';
import { Link } from 'react-router';
import '../style/index.css';
import LeftNav from './common/LeftNav';
class App extends Component {
	render() {
		return (
			<div className="main">
				<ul className="navbar clr">
					<li><Link to="/login">login</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/logout">logout</Link></li>
				</ul>
				<LeftNav />
				<div className="content">
					<div className="top_hd"></div>
					{this.props.children}
				</div>
			</div>
		)
	}
}
module.exports = App;
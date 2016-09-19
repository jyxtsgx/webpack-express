import React from 'react';
import ReactDOM, { render } from 'react-dom';
import routes from './router';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
	(<Router history={browserHistory} routes={routes} />),
	document.getElementById('root')
);

// render(
// 	<Router history={browserHistory}>
// 		<Route path="/" components={require('./components/App')}>
// 			<IndexRoute components={require('./components/Main')} />
// 			<Route path="about" components={require('./components/About')} />
// 			<Route path="logout" components={require('./components/Logout')} />
// 		</Route>
// 		<Route path="/login" components={require('./components/Login')} />
// 	</Router>,
// 	document.getElementById('root')
// )

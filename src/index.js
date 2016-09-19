import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
import routes from './router';
import store from './store/index';

ReactDOM.render(
	(
		<Provider store={store}>
			<Router history={browserHistory} routes={routes} />
		</Provider>
	),
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

import React from 'react';
import ReactDOM, { render } from 'react-dom';
import routes from './router';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
	(<Router history={browserHistory} routes={routes} />),
	document.getElementById('root')
);


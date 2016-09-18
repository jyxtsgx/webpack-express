export default {
	component: require('./components/App'),
	childRoutes: [
		{
			path: '/logout',
			getComponent: (nextState, cb) => {
				require.ensure([], (require) => {
					cb(null, require('./components/Logout'))
				})
			}
		},
		{
			path: '/about',
			getComponent: (nextState, cb) => {
				require.ensure([], (require) => {
					cb(null, require('./components/About'))
				})
			}
		},
		{
			path: '/login',
			getComponent: (nextState, cb) => {
				require.ensure([], (require) => {
					cb(null, require('./components/Login'))
				})
			}
		},
		{
			path: '/',
			getComponent: (nextState, cb) => {
				require.ensure([], (require) => {
					cb(null, require('./components/Main'))
				})
			}
		}
	]
}
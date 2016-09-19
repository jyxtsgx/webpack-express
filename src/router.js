export default [
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
				cb(null, require('./components/App'))
			})
		},
		indexRoute: {
			getComponent: (nextState, cb) => {
				require.ensure([], (require) => {
					cb(null, require('./components/Main'))
				})
			}
		},
		getChildRoutes: (nextState, cb) => {
			require.ensure([], (require) => {
				cb(null, [
					{
						path: 'logout',
						getComponent: (nextState, cb) => {
							require.ensure([], (require) => {
								cb(null, require('./components/Logout'))
							})
						}
					},
					{
						path: 'about',
						getComponent: (nextState, cb) => {
							require.ensure([], (require) => {
								cb(null, require('./components/About'))
							})
						}
					},
				])
			})
		}
	}
]
function rediretToLogin(nextState, replace, callback) {
	if (!sessionStorage.username) {
		console.log(nextState)
		replace({
			pathname: '/login',
			state: {nextPathname: nextState.location.pathname}
		})
	}
	callback();
}
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
		onEnter: rediretToLogin,
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
					{
						path: 'user',
						getComponent: (nextState, cb) => {
							require.ensure([], (require) => {
								cb(null, require('./components/User/index'))
							})
						},
						indexRoute: {
							getComponent: (nextState, cb) => {
								require.ensure([], (require) => {
									cb(null, require('./components/User/Main'))
								})
							}
						},
						getChildRoutes:(nextState, cb) => {
							require.ensure([], (require) => {
								cb(null, [
									{
										path: 'business',
										getComponent: (nextState, cb) => {
											require.ensure([], (require) => {
												cb(null, require('./components/User/Business'))
											})
										}
									},
									{
										path: 'per',
										getComponent: (nextState, cb) => {
											require.ensure([], (require) => {
												cb(null, require('./components/User/Perform'))
											})
										}
									},
									{
										path: 'immutable',
										getComponent: (nextState, cb) => {
											require.ensure([], (require) => {
												cb(null, require('./components/User/Immutable'))
											})
										}
									},
									{
										path: 'status',
										getComponent: (nextState, cb) => {
											require.ensure([], (require) => {
												cb(null, require('./components/User/Status'))
											})
										}
									}
								])
							})
						}
					},
					
				])
			})
		}
	}
]
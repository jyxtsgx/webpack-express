import { LOGIN_DONE, LOGIN_FAIL } from '../actions/login';
const mockState = { isLogin: 0}
export default function loginReducer(state=mockState, action) {
	switch(action.type) {
		case 'LOGIN_DONE': 
			return Object.assign({}, state, {
				isLogin: action.payload
			})
		case 'LOGIN_FAIL':
			return Object.assign({}, state, {
				error: action.payload
			})
		default:
			return state;
	}
}
import { GET_USER_DONE , GET_USER_FAIL, DELETE_USER_DONE, DELETE_USER_FAIL } from '../actions/user';
const mockState = {user: {}, isDelete: 0};
export default function loginReducer(state=mockState, action) {
	switch(action.type) {
		case 'GET_USER_DONE' : 
			return Object.assign({}, state, {
				user: action.payload
			})
		case 'GET_USER_FAIL':
			return Object.assign({}, state, {
				error: action.payload
			})
		case 'DELETE_USER_DONE':
			state.user[action.key] = null;
			return Object.assign({}, state, {
				isDelete: action.payload,
			})
		case 'DELETE_USER_FAIL':
			return Object.assign({}, state, {
				error: action.payload
			})
		case 'ADD_USER_DONE':
			return state
		case 'ADD_USER_FAIL': 
			return state
		default:
			return state;
	}
}
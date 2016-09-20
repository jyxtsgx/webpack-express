import { LOGIN_DONE, GET_USER_FAIL } from '../actions/user';
const mockState = {};
export default function loginReducer(state=mockState, action) {
	switch(action.type) {
		case LOGIN_DONE: 
			return state
		case GET_USER_FAIL:
			return state
		default:
			return state;
	}
}
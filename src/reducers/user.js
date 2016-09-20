import { GET_USER_DONE , GET_USER_FAIL } from '../actions/user';
const mockState = {user: {}};
export default function loginReducer(state=mockState, action) {
	switch(action.type) {
		case GET_USER_DONE : 
			return Object.assign({}, state, {
				user: action.payload
			})
		case GET_USER_FAIL:
			return Object.assign({}, state, {
				error: action.payload
			})
		default:
			return state;
	}
}
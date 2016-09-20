import reqwest from 'reqwest';
import API from '../API';
export const GET_USER_DONE = 'GET_USER_DONE';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export function getUser(subreddit) {
	return function (dispatch, getState) {
		return reqwest({
			url: API.getUser,
			method: 'post', 
		})
		.then(function (res) {
			dispatch(getUserDone(res));
		})
		.fail(function (error) {
			dispatch(getUserFail(error));
		})
	}
}
export function getUserDone(payload) {
	return {
		type: GET_USER_DONE,
		payload: payload
	}
}
export function getUserFail() {
	return {
		type: GET_USER_FAIL,
		payload: payload
	}
}
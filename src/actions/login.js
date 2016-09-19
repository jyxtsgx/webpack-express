import reqwest from 'reqwest';
import API from '../API';
export const LOGIN_DONE = 'LOGIN_DONE';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export function login(subreddit) {
	return function (dispatch, getState) {
		return reqwest({
			url: API.Login, 
			method: 'post', 
			data: subreddit
		})
		.then(function (resq) {
			dispatch(loginDone(resq.isLogin));
		})
		.fail(function (error) {
			dispatch(loginFail('网络错误'));
		})
	}
}
export function loginDone(payload) {
	return {
		type: LOGIN_DONE,
		payload: payload
	}
}
export function loginFail(payload) {
	return {
		type: LOGIN_FAIL,
		payload: payload
	}
}
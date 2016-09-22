import reqwest from 'reqwest';
import API from '../API';
export const GET_USER_DONE = 'GET_USER_DONE';
export const GET_USER_FAIL = 'GET_USER_FAIL';
export const DELETE_USER_DONE = 'DELETE_USER_DONE';
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL';
export const ADD_USER_DONE = 'ADD_USER_DONE';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';
//------获取用户-------//
export function getUser(subredit) {
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
export function getUserFail(payload) {
	return {
		type: GET_USER_FAIL,
		payload: payload
	}
}
//------删除用户-------//
export function deleteUser(subredit) {
	return function (dispatch, getState) {
		return reqwest({
			url: API.deleteUser,
			method: 'POST',
			data: subredit
		})
		.then(function (res) {
			console.log(res);
			dispatch(deleteUserDone(res.isDelete, subredit.key));
		})
		.fail(function (error) {
			dispatch(deleteUserFail('网络错误'));
		})
	}
}
export function deleteUserDone(payload, key) {
	return {
		type: DELETE_USER_DONE,
		payload: payload,
		key: key
	}
}
export function deleteUserFail(payload) {
	return {
		type: DELETE_USER_FAIL,
		payload: payload
	}
}
//------新增信息-------//
export function addUser(subredit) {
	return function (dispatch, getState) {
		return reqwest({
			url: API.addUser,
			method: 'GET',
			data: subredit
		})
		.then(function (res) {
			dispatch(addUserDone(res.isAdd, subredit))
		})
		.fail(function (error) {
			dispatch(addUserFail('网络错误'))
		})
	}
}
export function addUserDone(payload, data) {
	return {
		type: ADD_USER_DONE,
		payload: payload,
		data: data
	}
}
export function addUserFail(payload) {
	return {
		type: ADD_USER_FAIL,
		payload: payload
	}
}
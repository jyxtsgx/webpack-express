import reqwest from 'reqwest';
import API from '../API';
import { DELETE_GOODS_DONE, DELETE_GOODS_FAIL } from '../type';
export const GET_GOODS_DONE = 'GET_GOODS_DONE';
export const GET_GOODS_FAIL = 'GET_GOODS_FAIL';
//---------获取商品数据------------//
export function getGoods(subredit) {
	return function (dispatch, getState) {
		return reqwest({
			url: API.getGoods,
			method: 'POST',
		})
		.then(function (res) {
			dispatch(getGoodsDone(res))
		})
		.fail(function (error) {
			console.log(error);
		})
	}
}
export function getGoodsDone(payload) {
	return {
		type: GET_GOODS_DONE,
		payload: payload
	}
}
export function getGoodsFail(payload) {
	return {
		type: GET_GOODS_FAIL,
		payload: payload
	}
}
//---------删除商品数据------------//
export function deleteGoods(subredit) {
	return function (dispatch, getState) {
		return reqwest({
			url: API.deleteGoods,
			method: 'POST',
			data: {key: subredit}
		})
		.then(function (res) {
			dispatch(deleteGoodsDone(res.isDelete, subredit))
		})
		.fail(function (error) {
			dispatch(deleteGoodsFail('网络错误'))
		})
	}
}
export function deleteGoodsDone(payload, data) {
	return {
		type: DELETE_GOODS_DONE,
		payload: payload,
		data: data
	}
}
export function deleteGoodsFail(payload) {
	return {
		type: DELETE_GOODS_FAIL,
		payload: payload
	}
}
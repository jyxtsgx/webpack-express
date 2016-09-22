import reqwest from 'reqwest';
import API from '../API';
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

import { DELETE_GOODS_DONE, DELETE_GOODS_FAIL, FILTER_GOODS_DONE, FILTER_GOODS_FAIL } from '../type';
const mockState = {goods: []};
export default function goodsReducer(state=mockState, action) {
	switch (action.type) {
		case 'GET_GOODS_DONE':
			return Object.assign({}, state, {goods: action.payload});
		case 'GET_GOODS_FAIL':
			return Object.assign({}, state, {error: action.payload});
		case DELETE_GOODS_DONE:
			action.payload?state.goods.splice(action.data, 1): state
			return Object.assign({}, state, {isDelte: action.payload});
		case DELETE_GOODS_FAIL:
			return Object.assign({}, state, {error: action.payload});
		case FILTER_GOODS_DONE:
			return Object.assign({}, state, {goods: action.payload});
		case FILTER_GOODS_FAIL:
			return Object.assign({}, state, {isFilter: action.payload});
		default:
			return state
	}
}
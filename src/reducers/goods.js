const mockState = {goods: []};
export default function goodsReducer(state=mockState, action) {
	switch (action.type) {
		case 'GET_GOODS_DONE':
			return Object.assign({}, state, {goods: action.payload});
		case 'GET_GOODS_FAIL':
			return state;
		default:
			return state
	}
}
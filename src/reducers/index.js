import { combineReducers } from 'redux';

import Login from './login';

//整合reducer
const rootReducer = combineReducers({
	Login,
});
export default rootReducer;
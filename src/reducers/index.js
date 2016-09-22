import { combineReducers } from 'redux';

import Login from './login';
import User from './user';
import Goods from './goods.js';
//整合reducer
const rootReducer = combineReducers({
	Login,
	User,
	Goods
});
export default rootReducer;
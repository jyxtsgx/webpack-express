import { combineReducers } from 'redux';

import Login from './login';
import User from './user';
//整合reducer
const rootReducer = combineReducers({
	Login,
	User
});
export default rootReducer;
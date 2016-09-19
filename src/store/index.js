import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import { loginDone } from '../actions/login';
//打印数据
const loggerMiddleware = createLogger();
//把dispatch委托到action上,action上直接可以dispatch
const createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware,
    thunk
)(createStore);
let store = createStoreWithMiddleware(rootReducer);
console.log('-------store start-----------')
export default store;
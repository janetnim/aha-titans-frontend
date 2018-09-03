import { createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const prevState = {};
const middleware = [thunk, ];
const store = createStore(rootReducer, prevState, applyMiddleware(...middleware));

export default store;

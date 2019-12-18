// root reducer is just a function (not a component)
// by convention - this file is usually named index.js
//we are calling it rootReducer to avoid confusion 

//This is the root reducer
//It is the store manager for all the reducers

//To make rootReducer:
// 1. we need to get method from redux, called combineReducers
// Because each individual reducer will be combined into one big store

import { combineReducers } from 'redux';

// 2. get each individual reducer
import frozenReducer from './frozenReducer';
import meatReducer from './meatReducer';
import produceReducer from './produceReducer';

//3. call combineReducer and hand it an obj
// each key in combine Reducer will be a piece of state in the redux store
// each value, will be the value of that piece of state in the redux store

//in our redux store, we will have a piece of state called frozen, with a value of what frozenReducer returns (in this case, state)
const rootreducer = combineReducers({
    frozen: frozenReducer,
    produce: produceReducer,
    meat: meatReducer
})

export default rootreducer;

import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import blogpost from '../reducers/blogpost';
const rootReducer = combineReducers({
  blogpost
});

const store = createStore(
  rootReducer
);


export default store;
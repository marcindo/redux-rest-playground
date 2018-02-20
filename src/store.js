/* eslint-disable no-underscore-dangle  */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import posts from 'reducers/posts';
import users from 'reducers/users';
import todos from 'reducers/todos';


const mainReducer = combineReducers({
  posts,
  users,
  todos,
});

const middleware = [thunk];

// TODO(marcindo: disable devtools in prod
let enhancers = compose;
if (process.env.NODE_ENV !== 'production') {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || enhancers;
}

export default createStore(
  mainReducer,
  enhancers(applyMiddleware(...middleware)),
);

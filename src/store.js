/* eslint-disable no-underscore-dangle  */
import { createStore, combineReducers, compose } from 'redux';

const mainReducer = combineReducers({
});


// TODO(marcindo: disable devtools in prod
let enhancers = compose;
if (process.env.NODE_ENV !== 'production') {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || enhancers;
}

export default createStore(
  mainReducer,
  enhancers(),
);

/**
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Local import
 */

import Middleware from 'src/store/Middleware/Middleware';
import LoginMiddleware from 'src/store/Middleware/LoginMiddleware';

import reducer from './reducer';
/**
 * Store
 */

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(Middleware),
  applyMiddleware(LoginMiddleware),

);

const store = createStore(
  reducer,
  enhancers,
);
/* eslint-enable */

/**
 * Export
 */
export default store;

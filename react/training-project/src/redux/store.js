import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import historyReducer from './History/reducers';
import authReducer from './Auth/reducers';

const reducer = history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    history: historyReducer,
    auth: authReducer
  });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

export default function configureStore(history) {
  return createStore(
    reducer(history),
    composeEnhancer(applyMiddleware(routerMiddleware(history)), applyMiddleware(thunk))
  );
}

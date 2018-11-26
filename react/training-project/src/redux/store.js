import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import rootReducer from './History/reducers';

const reducers = {
  form: formReducer,
  rootReducer
};

const reducer = combineReducers(reducers);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

export default function configureStore() {
  return createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
}

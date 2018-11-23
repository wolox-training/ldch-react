import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createstore from './redux/store';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import App from './app'; // eslint-disable-line import/first

const store = createstore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

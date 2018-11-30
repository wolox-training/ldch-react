import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import createstore from './redux/store';
import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import App from './app'; // eslint-disable-line import/first

const history = createBrowserHistory();
const store = createstore(history);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

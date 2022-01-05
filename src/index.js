import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { Provider } from 'react-redux';
import store from './store/index';
import { addArticle } from './actions/index';

window.store = store;
window.addArticle = addArticle;
// en consola agregar store.getState(); para ver states

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

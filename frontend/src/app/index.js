import App from './containers/App';

//Redux
import { Provider } from 'react-redux';
import { combinedStore } from './redux/reducers';
import { createStore, applyMiddleware } from 'redux'

import React from 'react';
import ReactDOM from 'react-dom';

const store = createStore(combinedStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
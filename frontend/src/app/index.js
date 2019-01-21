import App from './containers/App';

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/reducers';

import React from 'react';
import ReactDOM from 'react-dom';




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
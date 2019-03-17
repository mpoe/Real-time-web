// Redux
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/reducers';
import App from './containers/App';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'),
);

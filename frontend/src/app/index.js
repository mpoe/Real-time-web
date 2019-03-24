// Redux
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/reducers';
import Router from './routes';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app'),
);

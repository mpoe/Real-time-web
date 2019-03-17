import {
	createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import { createLogger } from 'redux-logger';

import user from './user';

const reducer = combineReducers({
	user,
});

const logger = createLogger({/* Empty */});
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancers(
		applyMiddleware(
			logger,
		),
	),
);

export default store;

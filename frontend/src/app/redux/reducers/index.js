
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createLogger } from 'redux-logger';

import {user} from './user';

const reducer = combineReducers({
  user,
})

const logger = createLogger({/* Empty */});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      logger,
    )
  )
);

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger';

import {user} from './user';

const reducer = combineReducers({
  user,
})

const logger = createLogger({/* Empty */});

export const store = createStore(
  reducer,
  applyMiddleware(
    logger,
  )
);
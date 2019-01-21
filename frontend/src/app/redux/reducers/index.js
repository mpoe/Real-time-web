
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger';

import {testReducer} from './testReducer';

const reducer = combineReducers({
  testReducer,
})

const logger = createLogger({

});

export const store = createStore(
  reducer,
  applyMiddleware(
    logger,
  )
);
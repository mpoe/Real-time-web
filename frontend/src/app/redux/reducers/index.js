import { combineReducers } from 'redux';

import {testReducer} from './testReducer';

export const combinedStore = combineReducers({
  testReducer,
})
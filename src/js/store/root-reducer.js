import { combineReducers } from 'redux';

import { catalogReducer } from './features/catalogFilterSlice.js';

const rootReducer = combineReducers({
  catalog: catalogReducer
});

export default rootReducer;
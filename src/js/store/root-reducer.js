import { combineReducers } from 'redux';

import { catalogReducer } from './features/catalogFilterSlice.js';
import { searchWidgetReducer } from './features/searchWidgetSlice.js';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  searchWidget: searchWidgetReducer
});

export default rootReducer;
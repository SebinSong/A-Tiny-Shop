import { combineReducers } from 'redux';

import { catalogReducer } from './features/catalogFilterSlice.js';
import { searchWidgetReducer } from './features/searchWidgetSlice.js';
import { productDetailReducer } from './features/productDetailSlice.js';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  searchWidget: searchWidgetReducer,
  productDetail: productDetailReducer
});

export default rootReducer;
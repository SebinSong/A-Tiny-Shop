import { combineReducers } from 'redux';

import { catalogReducer } from './features/catalogFilterSlice.js';
import { searchWidgetReducer } from './features/searchWidgetSlice.js';
import { productDetailReducer } from './features/productDetailSlice.js';
import { CartWidgetReducer } from './features/cartWidgetSlice'

const rootReducer = combineReducers({
  catalog: catalogReducer,
  searchWidget: searchWidgetReducer,
  productDetail: productDetailReducer,
  cartWidget: CartWidgetReducer
});

export default rootReducer;
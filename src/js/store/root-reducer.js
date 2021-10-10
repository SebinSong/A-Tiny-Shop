import { combineReducers } from 'redux';

import { catalogReducer } from './features/catalogFilterSlice.js';
import { searchWidgetReducer } from './features/searchWidgetSlice.js';
import { productDetailReducer } from './features/productDetailSlice.js';
import { cartWidgetReducer } from './features/cartWidgetSlice'
import { cartReducer } from './features/cartSlice'

const rootReducer = combineReducers({
  catalog: catalogReducer,
  searchWidget: searchWidgetReducer,
  productDetail: productDetailReducer,
  cartWidget: cartWidgetReducer,
  cart: cartReducer
});

export default rootReducer;
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root-reducer.js';

const enhancer = composeWithDevTools();
const store = createStore(rootReducer, enhancer);

export default store;
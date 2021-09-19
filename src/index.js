import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router
} from 'react-router-dom'
import { Provider } from 'react-redux'

// global styles
import '@scss/main.scss'

// root component
import App from '@components/root/App.js'

// store
import store from '@store/store.js'

const rootEl = document.querySelector('#root')

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  rootEl
)
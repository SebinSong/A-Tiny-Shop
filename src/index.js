import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router
} from 'react-router-dom'

// global styles
import '@scss/main.scss'
// root component
import App from '@components/root/App.js'

const rootEl = document.querySelector('#root')

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootEl
)
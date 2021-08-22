import React from 'react'
import {
  Switch,
  Route
} from "react-router";

// page-components
import Home from '../pages/home'
import Catalog from '../pages/catalog'

import './App.scss'

function App (props) {

  return (
    <div className="app-container">
      <Switch>
        <Route path="/catalog">
          <Catalog />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
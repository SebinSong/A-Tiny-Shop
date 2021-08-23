import React from 'react'
import {
  Switch,
  Route
} from "react-router";

// page-components
import Home from '../pages/home'
import Catalog from '../pages/catalog'

// child-components
import NavigationBar from '../shared/navigation-bar'

import './App.scss'

function App (props) {

  return (
    <>
      <NavigationBar />

      <Switch>
        <Route path="/catalog">
          <Catalog />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
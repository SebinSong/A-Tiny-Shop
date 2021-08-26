import React from 'react'
import {
  Switch,
  Redirect,
  Route
} from "react-router";

// page-components
import Home from '../pages/home'
import Catalog from '../pages/catalog'
import ShoppingCart from '../pages/shopping-cart'

// child-components
import NavigationBar from '../shared/navigation-bar'

import './App.scss'

function App (props) {

  return (
    <>
      <NavigationBar />

      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/catalog">
          <Catalog />
        </Route>

        <Route path="/shopping-cart">
          <ShoppingCart />
        </Route>

        <Redirect to="/catalog" />
      </Switch>
    </>
  )
}

export default App
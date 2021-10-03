import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
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
import ProductDetailModal from '../shared/product-detail-modal'

// root utils
import {
  checkIfAnyOverlayActive,
  toggleMainPointerEvents
} from './root-util.js'

import './App.scss'


function App (props) {
  const isOverlayActive = useSelector(checkIfAnyOverlayActive);

  useEffect(() => {
    toggleMainPointerEvents(isOverlayActive);
  }, [isOverlayActive]);

  return (
    <>
      <NavigationBar />

      <ProductDetailModal />

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
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Switch,
  Redirect,
  Route
} from "react-router";
import loadable from '@loadable/component'

// page-components
import Fallback from '../pages/fallback'

// child-components
import NavigationBar from '../shared/navigation-bar'
import ProductDetailModal from '../shared/product-detail-modal'

// root utils
import {
  checkIfAnyOverlayActive,
  toggleMainScroll
} from './root-util.js'

// view-utils
import { pMinMax } from '@view-utils'

import './App.scss'

const [PAGE_LOAD_MIN_DELAY, PAGE_LOAD_TIMEOUT_DURATION] = [1200, 20000]
const AsyncPage = loadable(
  props => pMinMax(
    import(/* webpackChunkName: "page-chunk" */ `../pages/${props.name}`),
    PAGE_LOAD_MIN_DELAY,
    PAGE_LOAD_TIMEOUT_DURATION),
  {
    fallback: <Fallback />,
    cacheKey: props => props.name
  }
)


function App (props) {
  const isOverlayActive = useSelector(checkIfAnyOverlayActive);

  useEffect(() => {
    toggleMainScroll(isOverlayActive);
  }, [isOverlayActive]);

  return (
    <>
      <NavigationBar />

      <ProductDetailModal />

      <Switch>
        <Route path="/home">
          <AsyncPage name="home" />
        </Route>

        <Route path="/catalog">
          <AsyncPage name="catalog" />
        </Route>

        <Route path="/shopping-cart">
          <AsyncPage name="shopping-cart" />
        </Route>

        <Redirect to="/catalog" />
      </Switch>
    </>
  )
}

export default App
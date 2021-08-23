import React from 'react'
import Loadable from '@loadable/component'
import Fallback from '../fallback'

const LazyHome = Loadable(
  () => import(
    /* webpackChunkName: "home",
       webpackPrefetch: true */
    './Home.js'),
  {
    fallback: <Fallback />
  }
)
export default LazyHome;
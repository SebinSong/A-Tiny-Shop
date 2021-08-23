import React from 'react'
import Loadable from '@loadable/component'
import Fallback from '../fallback'

const LazyCatalog = Loadable(
  () => import( 
    /* webpackChunkName: "catalog",
       webpackPrefetch: true */
    './Catalog.js'),
  {
    fallback: <Fallback />
  }
)

export default LazyCatalog
import React, { memo } from 'react'

import './ShoppingCart.scss'

function ShoppingCart (prpos) {
  return (
  <main className="page shopping-cart">
    <div className="shopping-cart-page__header">
      <h1 className="header-text">Shopping cart</h1>
    </div>

    <div className="shopping-cart-page__content">
      <div className="shopping-cart-page__see-and-checkout">

      </div>
    </div>
  </main>
  )
}

export default memo(ShoppingCart);
import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'

// components
import Icon from '@components/global/icon'

import CartList from './cart-list'

import './ShoppingCart.scss'

function ShoppingCart (prpos) {
  const history = useHistory();

  // callbacks
  const navigateToCatalog = () => { history.push('/catalog') }

  return (
  <main className="page shopping-cart">
    <div className="shopping-cart-page__header">
      <h1 className="header-text">Shopping cart</h1>

      <button type="button" 
        className="header__shop-more-btn"
        onClick={navigateToCatalog}>
        <span className="shop-more-text">Shop more</span>
        <Icon classes="shop-more-icon">chevron_right</Icon>
      </button>
    </div>

    <div className="shopping-cart-page__content">
      <div className="content__see-and-checkout">
        <CartList />
      </div>
    </div>
  </main>
  )
}

export default memo(ShoppingCart);
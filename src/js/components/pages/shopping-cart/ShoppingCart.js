import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'

// components
import Icon from '@components/global/icon'
import CardSlider from '@components/shared/card-slider'

import CartList from './cart-list'
import OrderSummary from './order-summary'

import './ShoppingCart.scss'

const DiscountedProductCard = () => (
  <div className="discount-product-card">
    <Icon classes="icon">event_available</Icon>
    <span className="text">Comming Soon.</span>
  </div>
)

function ShoppingCart (prpos) {
  const history = useHistory();
  const arr = [1, 2, 3, 4]

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
        <OrderSummary />
      </div>

      <div className="content__discount-products-container">
        <h3>Discount products</h3>

        <CardSlider
          classes="content__discount-products"
          cardDataList={arr}
          slideWidth={182}>
          { v => <DiscountedProductCard key={v} /> }
        </CardSlider>
      </div>
    </div>
  </main>
  )
}

export default memo(ShoppingCart);
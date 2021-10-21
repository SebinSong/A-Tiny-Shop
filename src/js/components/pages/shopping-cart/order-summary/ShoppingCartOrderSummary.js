import React from 'react'

// hooks
import { useCart } from '@hooks'

import './ShoppingCartOrderSummary.scss'

function OrderSummary (props) {
  const {
    totalCartPrice,
    isCartEmpty
  } = useCart()
  const taxAmount = 0
  const shippingAmount = isCartEmpty ? 0 : 15
  const sum = parseFloat(totalCartPrice) + taxAmount + shippingAmount

  return (
    <div className="shopping-cart__order-summary">
      <h3 className="order-summary__heading">Order Summary</h3>

      <input type="text"
        className="order-summary__promo-input"
        placeholder="Enter promo code" />
      
      <div className="order-summary__details">
        <div className="detail-line subtotal">
          <label>Subtotal</label>
          <span className="detail-value">$ {totalCartPrice}</span>
        </div>

        <div className="detail-line tax">
          <label>Estimated tax</label>
          <span className="detail-value">$ {taxAmount.toFixed(2)}</span>
        </div>

        <div className="detail-line shipping">
          <label>Estimated Shipping / Handling</label>
          <span className="detail-value">$ {shippingAmount.toFixed(2)}</span>
        </div>
      </div>

      <div className="order-summary__total">
        <label>Total</label>
        <span className="detail-value">$ {sum.toFixed(2)}</span>
      </div>

      <div className="order-summary__btn-container">
        <button type="button"
          className="is-primary"
          disabled={isCartEmpty}>
            Check out
        </button>
      </div>
    </div>
  )
}

export default OrderSummary;
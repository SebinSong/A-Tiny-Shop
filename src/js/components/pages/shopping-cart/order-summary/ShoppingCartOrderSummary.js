import React from 'react'

import './ShoppingCartOrderSummary.scss'

function OrderSummary (props) {
  return (
    <div className="shopping-cart__order-summary">
      <h3 className="order-summary__heading">Order Summary</h3>

      <input type="text"
        className="order-summary__promo-input"
        placeholder="Enter promo code" />
      
      <div className="order-summary__details">
        <div className="detail-line subtotal">
          <label>Subtotal</label>
          <span className="detail-value">$ 430.00</span>
        </div>

        <div className="detail-line tax">
          <label>Estimated tax</label>
          <span className="detail-value">$ 0.00</span>
        </div>

        <div className="detail-line shipping">
          <label>Estimated Shipping / Handling</label>
          <span className="detail-value">$ 15.00</span>
        </div>
      </div>

      <div className="order-summary__total">
        <label>Total</label>
        <span className="detail-value">$ 445.00</span>
      </div>
    </div>
  )
}

export default OrderSummary;
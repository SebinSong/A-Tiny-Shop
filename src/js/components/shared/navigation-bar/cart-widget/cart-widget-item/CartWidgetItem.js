import React, { memo } from 'react'

// child components
import ImageLoaderBox from '@components/global/image-loader-box'
import AmountSelector from '@components/global/amount-selector'

// hooks
import { useCartItem } from '@hooks'

import './CartWidgetItem.scss' 

function CartWidgetItem ({
  classes = '', id = '', amount = 0
}) {
  // hooks
  const {
    setCartAmount,
    removeCartItem,
    currentItem
  } = useCartItem(id)
  const {
    imgPath, name, price
  } = currentItem || {}

  // etc
  const classStr = `cart-widget__item  ${classes}`

  return (
    <div className={classStr}>
      <ImageLoaderBox classes="cart-widget__item-img"
        src={imgPath}
        alt={name} />

      <span className="cart-widget__item-details">
        <span className="item-details__name">{name}</span>

        <span className="item-details__price">$ {price}</span>

        <span className="item-details__cta-container">
          <AmountSelector classes="item-details__amount-selector" 
            isSmall={true}
            disableInput={true}
            amount={amount}
            onChange={setCartAmount} />

          <button type="button"
            className="item-details__remove-btn"
            onClick={removeCartItem}>remove</button>
        </span>
      </span>
    </div>
  )
}

export default memo(CartWidgetItem)
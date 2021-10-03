import React from 'react'

// child components
import ImageLoaderBox from '@components/global/image-loader-box'
import AmountSelector from '@components/global/amount-selector'

import './CartWidgetItem.scss' 

function CartWidgetItem ({
  classes = '',
  itemData = null
}) {

  const classStr = `cart-widget__item  ${classes}`
  const {
    imgPath, name, price
  } = itemData || {}

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
            disableInput={true} />

          <button type="button"
            className="item-details__remove-btn">remove</button>
        </span>
      </span>
    </div>
  )
}

export default CartWidgetItem
import React, {
  useCallback,
  memo
} from 'react'
import { useDispatch } from 'react-redux'

// child components
import ImageLoaderBox from '@components/global/image-loader-box'
import AmountSelector from '@components/global/amount-selector'

// redux
import {
  setCartItemAmount,
  removeFromCart
} from '@store/features/cartSlice.js'

import './CartWidgetItem.scss' 

function CartWidgetItem ({
  classes = '',
  itemData = null,
  amount
}) {
  const dispatch = useDispatch()

  const classStr = `cart-widget__item  ${classes}`
  const {
    imgPath, name, price, id
  } = itemData || {}

  // callbacks
  const onAmountChange = useCallback(
    v => {
      dispatch(setCartItemAmount({ id, amount: v })) 
    }, []
  );
  const removeItem = () => {
    dispatch(removeFromCart(id))
  }

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
            onChange={onAmountChange} />

          <button type="button"
            className="item-details__remove-btn"
            onClick={removeItem}>remove</button>
        </span>
      </span>
    </div>
  )
}

export default memo(CartWidgetItem)
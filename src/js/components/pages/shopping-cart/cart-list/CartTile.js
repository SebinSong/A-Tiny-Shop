import React from 'react'

// child components
import ImageLoaderBox from '@components/global/image-loader-box'
import AmountSelector from '@components/global/amount-selector'

// hooks
import { useCartItem } from '@hooks'

function CartTile ({ id, amount }) {
  const {
    setCartAmount,
    removeCartItem,
    currentItem
  } = useCartItem(id);
  const { 
    name, imgPath, price, 
    gender, lightDark, sleeve,
    totalPurchaseCount
  } = currentItem
  const specStr = `${gender} / ${lightDark} / ${sleeve}-sleeve`

  return (
    <li className="content__cart-tile">
      <ImageLoaderBox classes="cart-tile__img"
        src={imgPath}
        alt={name} />

      <div className="cart-tile__details">
        <span className="detail-name">{name}</span>
        <span className="detail-specs">{specStr}</span>
        <span className="detail-purchase-count">
          <span className="num">{totalPurchaseCount}</span> of this item have been sold so far.
        </span>
      </div>

      <div className="cart-tile__cta">
        <div className="price-and-amount">
          <span className="detail-price">
            <span className="text">price:</span>
            <span className="num">$ {price}</span>
          </span>

          <span className="detail-amount">
            <span className="text">amount: </span>
            
            <AmountSelector
              amount={amount}
              onChange={setCartAmount} />
          </span>
        </div>

        <button type="button"
          className="is-outlined cart-tile__remove-btn"
          onClick={removeCartItem}>remove</button>
      </div>
    </li>
  )
}

export default CartTile;
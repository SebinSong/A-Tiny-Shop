import React from 'react'

// child components
import Icon from '@components/global/icon'
import ImageLoaderBox from '@components/global/image-loader-box'
import AmountSelector from '@components/global/amount-selector'

// hooks
import { useCart } from '@hooks'

function CartTile ({ id, amount }) {
  const {
    setCartAmount,
    removeCartItem,
    currentItem
  } = useCart(id);
  const { 
    name, imgPath, price, 
    gender, lightDark, sleeve
  } = currentItem
  const specStr = `${gender} / ${lightDark} / ${sleeve}-sleeve`

  return (
    <li className="content__cart-tile">
      <ImageLoaderBox classes="cart-tile__img"
        src={imgPath}
        alt={name} />

      <span className="cart-tile__details">
        <span className="detail-name">{name}</span>
        <span className="detail-specs">{specStr}</span>
        <span className="detail-price">$ {price}</span>
        
        <AmountSelector classes="details__amount-select"
          amount={amount}
          onChange={setCartAmount} />
      </span>

      <Icon tag="button"
        classes="cart-tile__close-btn"
        onClick={removeCartItem}>close</Icon>      
    </li>
  )
}

export default CartTile;
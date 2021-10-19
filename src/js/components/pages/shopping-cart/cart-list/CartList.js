import React from 'react'

// child components
import Icon from '@components/global/icon'
import CartTile from './CartTile.js'

import clothesList from '@viewdata/clothes-data'
import './CartList.scss'

const CartEmptyTile = () => (
  <li className="cart-empty-tile">
    <Icon classes="cart-empty-tile__icon">production_quantity_limits</Icon>
    <span className="cart-empty-tile__text">Your cart is empty</span>
  </li>
)

function CartList (props) {
  const showEmpty = true;
  return (
    <ul className="content__cart-list">
      {
        showEmpty ?
        <CartEmptyTile /> :
        clothesList.slice(0,3).map(
          item => <CartTile key={item.id}
            id={item.id} 
            amount={5} />
        )
      }
    </ul>
  )
}

export default CartList
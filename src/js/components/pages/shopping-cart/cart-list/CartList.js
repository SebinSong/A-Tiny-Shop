import React from 'react'

// child components
import Icon from '@components/global/icon'
import CartTile from './CartTile.js'

// hooks
import { useCart } from '@hooks'
import './CartList.scss'

const CartEmptyTile = () => (
  <li className="cart-empty-tile">
    <Icon classes="cart-empty-tile__icon">production_quantity_limits</Icon>
    
    <span className="cart-empty-tile__text">Your cart is empty</span>
  </li>
)

function CartList (props) {
  const {
    isCartEmpty,
    allCartItems
  } = useCart()

  return (
    <ul className="content__cart-list">
      {
        isCartEmpty ?
        <CartEmptyTile /> :
        allCartItems.map(
          item => <CartTile key={item.id}
            id={item.id} 
            amount={item.amount} />
        )
      }
    </ul>
  )
}

export default CartList
import React from 'react'

// child components
import CartTile from './CartTile.js'

import clothesList from '@viewdata/clothes-data'
import './CartList.scss'

const CartEmptyTile = () => (
  <li className="cart-empty-tile">
    Your cart is empty
  </li>
)

function CartList (props) {

  return (
    <ul className="content__cart-list">
      {
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
import React from 'react'

// child components
import CartTile from './CartTile.js'

import clothesList from '@viewdata/clothes-data'
import './CartList.scss'

const sampleData = clothesList[0]
const CartEmptyTile = () => (
  <li className="cart-empty-tile">
    Your cart is empty
  </li>
)

function CartList (props) {

  return (
    <ul className="content__cart-list">
      <CartTile id={sampleData.id}
        amount={3} />
    </ul>
  )
}

export default CartList
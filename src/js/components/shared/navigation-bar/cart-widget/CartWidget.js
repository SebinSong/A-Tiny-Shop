import React, { 
  memo,
  useCallback
} from 'react'
import { 
  useSelector,
  useDispatch
} from 'react-redux'

// child components
import Icon from '@components/global/icon'
import WidgetItem from './cart-widget-item/CartWidgetItem'

// utils
import {
  selectIsCartWidgetOpen,
  closeCartWidget
} from '@store/features/cartWidgetSlice'
import { toggleClass } from '@view-utils'

import './CartWidget.scss'

// redux
import {
  selectAllCartItems
} from '@store/features/cartSlice.js'

const EmptyCart = () => (
  <li className="empty-cart">
    <Icon classes="icon">face</Icon>

    <span className="text">Your cart is empty</span>
  </li>
)

function CartWidget (props) {
  const dispatch = useDispatch()
  const isWidgetActive = useSelector(selectIsCartWidgetOpen);
  const cartItems = useSelector(selectAllCartItems);

  // callbacks
  const closeWidget = useCallback(() => dispatch( closeCartWidget() ), [])

  return (
    <div className={`cart-widget-container ${toggleClass('is-open', isWidgetActive)}`}>
      <div className="cart-widget__overlay"
        onClick={closeWidget}></div>

      <div className="cart-widget__content">
        <div className="cart-widget__content-header">
          <span className="header-text">Cart</span>

          <Icon classes="header-close-btn"
            tag="button"
            onClick={closeWidget}>close</Icon>
        </div>

        <ul className="cart-widget__item-list">
          {
            cartItems.length === 0 ?
              <EmptyCart /> :
              cartItems.map(item => {
                return <WidgetItem 
                  key={item.id}
                  amount={item.amount}
                  itemData={item.data} />
              })
          }
        </ul>
      </div>
    </div>
  )
}

export default memo(CartWidget);
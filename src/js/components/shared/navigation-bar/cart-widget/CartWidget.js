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

// temp
import clothesList from '@viewdata/clothes-data.js'


const EmptyCart = () => (
  <li className="empty-cart">
    <Icon classes="icon">face</Icon>

    <span className="text">Your cart is empty</span>
  </li>
)

function CartWidget (props) {
  const dispatch = useDispatch()
  const isWidgetActive = useSelector(selectIsCartWidgetOpen);

  // callbacks
  const closeWidget = useCallback(() => dispatch( closeCartWidget() ), [])

  return (
    <div className={`cart-widget-container ${toggleClass('is-open', isWidgetActive)}`}>
      <div className="cart-widget__overlay"></div>

      <div className="cart-widget__content">
        <div className="cart-widget__content-header">
          <span className="header-text">Cart</span>

          <Icon classes="header-close-btn"
            tag="button"
            onClick={closeWidget}>close</Icon>
        </div>

        <ul className="cart-widget__item-list">
          <WidgetItem itemData={clothesList[0]} />
        </ul>
      </div>
    </div>
  )
}

export default memo(CartWidget);
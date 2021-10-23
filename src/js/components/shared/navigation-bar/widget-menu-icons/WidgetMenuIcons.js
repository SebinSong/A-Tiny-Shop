import React, {
  useCallback
} from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import { useLocation } from 'react-router-dom'

// redux
import { toggleSearchWidget } from '@store/features/searchWidgetSlice'
import { 
  openCartWidget,
  selectCartBadgeOn
 } from '@store/features/cartWidgetSlice'

import IconButton from '../icon-button/IconButton'

function WidgetMenuIcons () {
  const location = useLocation()
  const dispatch = useDispatch()
  // state
  const isBadgeOn = useSelector(selectCartBadgeOn)

  // callbacks
  const onSearchIconClick = useCallback(() => dispatch(toggleSearchWidget()), [])
  const onCartIconClick = useCallback(() => dispatch(openCartWidget()), [])

  const isInCartPage = location.pathname === '/shopping-cart'
  return (
    <ul className="toolbar__icon-btn-container">
      <IconButton classes="search-icon"
        onClick={onSearchIconClick}>search</IconButton>
      
      { 
        !isInCartPage && 
          <IconButton classes="cart-icon"
          showBadge={isBadgeOn}
          onClick={onCartIconClick}>shopping_cart</IconButton>
      }
    </ul>
  )
}

export default WidgetMenuIcons;
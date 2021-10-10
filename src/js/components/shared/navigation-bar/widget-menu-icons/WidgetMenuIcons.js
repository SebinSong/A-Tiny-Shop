import React, {
  useCallback
} from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'

// redux
import { toggleSearchWidget } from '@store/features/searchWidgetSlice'
import { 
  openCartWidget,
  selectCartBadgeOn
 } from '@store/features/cartWidgetSlice'

import IconButton from '../icon-button/IconButton'

function WidgetMenuIcons () {
  const dispatch = useDispatch()
  // state
  const isBadgeOn = useSelector(selectCartBadgeOn)

  // callbacks
  const onSearchIconClick = useCallback(() => dispatch(toggleSearchWidget()), [])
  const onCartIconClick = useCallback(() => dispatch(openCartWidget()), [])

  return (
    <ul className="toolbar__icon-btn-container">
      <IconButton classes="search-icon"
        onClick={onSearchIconClick}>search</IconButton>
      
      <IconButton classes="cart-icon"
        showBadge={isBadgeOn}
        onClick={onCartIconClick}>shopping_cart</IconButton>
    </ul>
  )
}

export default WidgetMenuIcons;
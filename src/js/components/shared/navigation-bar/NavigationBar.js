import React, { 
  useState,
  useCallback
} from 'react'
import { useDispatch } from 'react-redux'

// hooks
import { useMQ } from '@hooks'

// child components
import NavLinkItem from './nav-link-item/NavLinkItem'
import IconButton from './icon-button/IconButton'
import NavLogo from './nav-logo/NavLogo'
import DrawerMenu from './drawer-menu'
import SearchWidget from './search-widget'
import CartWidget from './cart-widget'

import { openSearchWidget } from '@store/features/searchWidgetSlice'
import { openCartWidget } from '@store/features/cartWidgetSlice'

import './NavigationBar.scss'

const navLinkList = [
  { id: 'home', name: 'Home', to: '/home' },
  { id: 'catalog', name: 'Catalog', to: '/catalog' },
  { id: 'cart', name: 'Shopping Cart', to: '/shopping-cart' }
]

function NavigationBar (props) {
  const dispatch = useDispatch()

  // hooks
  const isAfterTablet = useMQ('from-tablet')

  // states
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // methods
  const openDrawer = useCallback(() => setIsDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])
  const onSearchIconClick = useCallback(() => dispatch(openSearchWidget()), [])
  const onCartIconClick = useCallback(() => dispatch(openCartWidget()), [])

  // view
  const afterTablet = (
    <ul className="toolbar__nav-link-container">
      <NavLogo />

      {navLinkList.map(
        item => <NavLinkItem key={item.id} {...item} />
      )}
    </ul>
  )
  const beforeTablet = (
    <>
      <IconButton classes="menu-icon"
        onClick={openDrawer}>menu</IconButton>
      <NavLogo />
    </>
  )

  return (
    <aside className="navigation-bar">
      <ul className="toolbar-container">
        {isAfterTablet ? afterTablet : beforeTablet}

        <ul className="toolbar__icon-btn-container">
          <IconButton classes="search-icon"
            onClick={onSearchIconClick}>search</IconButton>
          
          <IconButton classes="cart-icon"
            onClick={onCartIconClick}>shopping_cart</IconButton>
        </ul>
      </ul>

      <DrawerMenu isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer} />
      
      <SearchWidget />

      <CartWidget />
    </aside>
  )
}

export default NavigationBar
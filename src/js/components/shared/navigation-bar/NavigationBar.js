import React, { 
  useState,
  useCallback
} from 'react'

// hooks
import { useMQ } from '@hooks'

// child components
import WidgetMenuIcons from './widget-menu-icons/WidgetMenuIcons.js'
import NavLinkItem from './nav-link-item/NavLinkItem'
import IconButton from './icon-button/IconButton'
import NavLogo from './nav-logo/NavLogo'
import DrawerMenu from './drawer-menu'
import SearchWidget from './search-widget'
import CartWidget from './cart-widget'

import './NavigationBar.scss'

const navLinkList = [
  { id: 'home', name: 'Home', to: '/home' },
  { id: 'catalog', name: 'Catalog', to: '/catalog' },
  { id: 'cart', name: 'Shopping Cart', to: '/shopping-cart' }
]

function NavigationBar (props) {
  // hooks
  const isAfterTablet = useMQ('from-tablet')

  // states
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  // methods
  const openDrawer = useCallback(() => setIsDrawerOpen(true), [])
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), [])

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

        <WidgetMenuIcons />
      </ul>

      <DrawerMenu isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer} />
      
      <SearchWidget />

      <CartWidget />
    </aside>
  )
}

export default NavigationBar
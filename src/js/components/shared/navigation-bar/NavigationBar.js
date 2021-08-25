import React from 'react'

// hooks
import { useMQ } from '@hooks'

// child components
import NavLinkItem from './nav-link-item/NavLinkItem'
import IconButton from './icon-button/IconButton'
import NavLogo from './nav-logo/NavLogo'

import './NavigationBar.scss'

const navLinkList = [
  { id: 'home', name: 'Home', to: '/home' },
  { id: 'catalog', name: 'Catalog', to: '/catalog' },
  { id: 'cart', name: 'Shopping Cart', to: '/shopping-cart' }
]

function NavigationBar (props) {
  const isAfterTablet = useMQ('from-tablet')

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
      <IconButton classes="menu-icon">menu</IconButton>
      <NavLogo />
    </>
  )

  return (
    <aside className="navigation-bar">
      <ul className="toolbar-container">
        {isAfterTablet ? afterTablet : beforeTablet}

        <ul className="toolbar__icon-btn-container">
          <IconButton classes="search-icon">search</IconButton>
          <IconButton classes="cart-icon">shopping_cart</IconButton>
        </ul>
      </ul>
    </aside>
  )
}

export default NavigationBar
import React from 'react'
import { useHistory } from 'react-router-dom'

// assets
import logoBlackPath from '@images/logo_black.png'

// child components
import NavLinkItem from './nav-link-item/NavLinkItem'

import './NavigationBar.scss'

const navLinkList = [
  { id: 'home', name: 'Home', to: '/home' },
  { id: 'catalog', name: 'Catalog', to: '/catalog' },
  { id: 'cart', name: 'Shopping Cart', to: '/shopping-cart' }
]

function NavigationBar (props) {
  const history = useHistory()

  return (
    <aside className="navigation-bar">
      <ul className="toolbar-container">
        {/* logo */}
        <li className="toolbar__item logo"
          onClick={() => history.push('/home')}
        >
          <a>
            <img className="toolbar__logo-image"
              alt="tiny-shop-logo"
              src={logoBlackPath} />
          </a>
        </li>

        <ul className="toolbar__nav-link-container">
          {navLinkList.map(
            item => <NavLinkItem key={item.id} {...item} />
          )}
        </ul>
      </ul>
    </aside>
  )
}

export default NavigationBar
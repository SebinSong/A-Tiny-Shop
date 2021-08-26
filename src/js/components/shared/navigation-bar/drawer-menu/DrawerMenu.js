import React from 'react'
import { useHistory } from 'react-router-dom'

// components
import Icon from '@components/global/Icon'

// utils
import { toggleClass } from '@view-utils'

// assets
import logoBlackPath from '@images/logo_black.png'

import './DrawerMenu.scss'

const menuItemList = [
  { id: 'home', name: 'Home', icon: 'home', navigateTo: '/home'},
  { id: 'catalog', name: 'Catalog', icon: 'category', navigateTo: '/catalog'},
  { id: 'shopping-cart', name: 'Shopping Cart', icon: 'shopping_cart', navigateTo: '/shopping-cart'}
]

function DrawerMenu ({
  isDrawerOpen = false,
  closeDrawer = null
}) {
  const history = useHistory()
  const navigate = (to) => {
    closeDrawer &&
      closeDrawer()

    setTimeout(() => history.push(to), 200)
  }

  return (
    <div className={`drawer-container ${toggleClass('is-open', isDrawerOpen)}`}>
      <ul className="drawer__menu-list">
        <li className="drawer__menu-list-header">
          <img className="menu-list-header__img" 
            alt="logo"
            src={logoBlackPath} />

          <span className="menu-list-header__close-btn"
            onClick={closeDrawer}>
            <Icon classes="icon" tag="button">close</Icon>
            <span className="hover-helper"></span>
          </span>

          <span className="menu-list-header__dash-line"></span>
        </li>

        {
          menuItemList.map(
            ({ id, name, navigateTo, icon }) => (
              <li key={id}
                onClick={() => navigate(navigateTo)}
                className="drawer__menu-list-item">
                <Icon classes="menu-list-item__icon">{icon}</Icon>
                <button className="text">{name}</button>
                <Icon classes="menu-list-item__arrow">chevron_right</Icon>
              </li>
            )
          )
        }
      </ul>

      <div className="drawer__backdrop"
        onClick={closeDrawer}></div>
    </div>
  )
}

export default DrawerMenu
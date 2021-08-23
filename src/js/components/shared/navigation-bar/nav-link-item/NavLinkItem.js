import React from 'react'
import {
  NavLink
} from 'react-router-dom'

import './NavLinkItem.scss'

function NavLinkItem ({
  children = '',
  name = '',
  to = '/'
}) {
  return (
    <li className="toolbar__item nav-link">
      <NavLink to={to}
        activeClassName="active"
      >{children || name || ''}</NavLink>
    </li>
  )
}

export default NavLinkItem
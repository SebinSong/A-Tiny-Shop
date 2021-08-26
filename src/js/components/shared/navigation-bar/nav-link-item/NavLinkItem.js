import React from 'react'
import {
  NavLink,
  useHistory
} from 'react-router-dom'

import './NavLinkItem.scss'

function NavLinkItem ({
  children = '',
  name = '',
  to = '/'
}) {
  const history = useHistory()

  return (
    <li className="toolbar__item nav-link"
      onClick={() => history.push(to)}>
      <NavLink to={to}
        activeClassName="active"
      >{children || name || ''}</NavLink>
    </li>
  )
}

export default NavLinkItem
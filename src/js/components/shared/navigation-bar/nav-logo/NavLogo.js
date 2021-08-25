import React from 'react'
import { useHistory } from 'react-router-dom'

// assets
import logoBlackPath from '@images/logo_black.png'

function NavLogo (props) {
  const history = useHistory()

  return (
    <li className="toolbar__item logo"
      onClick={() => history.push('/home')}
    >
      <a>
        <img className="toolbar__logo-image"
          alt="tiny-shop-logo"
          src={logoBlackPath} />
      </a>
    </li>
  )
}

export default NavLogo
import React from 'react'

// child components
import Icon from '@components/global/icon'

// utils
import { toggleClass } from '@view-utils'

import './IconButton.scss'

function IconButton ({
  children = '',
  classes = '',
  onClick = null,
  showBadge = false
}) {
  return (
    <li className={`toolbar__item icon-button ${classes}`}
      onClick={onClick}>
      <Icon tag="button"
        classes={`icon-button__icon ${toggleClass('has-badge', showBadge)}`}>{ children }</Icon>
    </li>
  )
}

export default IconButton
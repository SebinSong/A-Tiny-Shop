import React from 'react'

// child components
import Icon from '@components/global/Icon'

import './IconButton.scss'

function IconButton ({
  children = '',
  classes = '',
  onClick = null
}) {
  return (
    <li className={`toolbar__item icon-button ${classes}`}
      onClick={onClick}>
      <Icon tag="button"
        classes="toolbar__icon-button__icon">{ children }</Icon>
    </li>
  )
}

export default IconButton
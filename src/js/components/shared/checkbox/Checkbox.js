import React, { memo } from 'react' 
import {
  toggleClass
} from '@view-utils'

import './Checkbox.scss'

function Checkbox ({
  item = null,
  children = '',
  onChange = null,
  value = false
}) {
  const label = children || item?.name || ''
  let inputId = `checkbox-${label}`

  // methods
  const onCheckClick = () => {
    if (!onChange)
      return;
    
    const newVal = !value;

    onChange &&
      onChange(item || { id: label, name: label }, newVal);
  }

  return (
    <span className={`checkbox-container ${toggleClass('is-on', value)}`}>
      <span className="checkbox__box">
        <span className="mark"></span>

        <input id={inputId}
          type="checkbox"
          className="checkbox__input"
          checked={value}
          onChange={onCheckClick}
        />
      </span>

      <label className="checkbox__label"
        htmlFor={inputId}>{label}</label>
    </span>
  )
}

export default memo(Checkbox)
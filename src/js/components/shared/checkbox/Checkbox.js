import React, {
  useState,
  memo
} from 'react' 
import {
  toggleClass
} from '@view-utils'

import './Checkbox.scss'

function Checkbox ({
  label = '',
  children = '',
  onChange = null
}) {
  let inputId = `checkbox-${children || label}`

  const [isChecked, setIsChecked] = useState(false)


  // methods
  const onCheckClick = () => {
    setIsChecked(v => {
      const newVal = !v

      onChange &&
        onChange(children || label, newVal)
      return newVal;
    })
  }

  return (
    <span className={`checkbox-container ${toggleClass('is-on', isChecked)}`}>
      <span className="checkbox__box">
        <span className="mark"></span>

        <input id={inputId}
          type="checkbox"
          className="checkbox__input"
          checked={isChecked}
          onChange={onCheckClick}
        />
      </span>

      <label className="checkbox__label"
        htmlFor={inputId}>{children || label}</label>
    </span>
  )
}

export default memo(Checkbox)
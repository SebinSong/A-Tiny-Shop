import React, { 
  memo,
  useState,
  useRef
} from 'react'

// components
import Icon from '@components/global/icon'

import './Dropdown.scss'

function Dropdown ({
  classes = '',
  initialText = '',
  initialItem = null,
  options = [],
  onItemSelect = null // needs to be a memoized callback
}) {
  // ref
  const buttonRef = useRef()

  // state
  const [buttonText, setButtonText] = useState(
    initialItem ? initialItem.name : initialText
  )
  const [isExpanded, setIsExpanded] = useState(false)

  // methods 
  const onButtonClick = () => {
    setIsExpanded(v => !v)
  }
  const onItemClick = (item) => {
    setButtonText(item.name)
    setIsExpanded(v => !v)

    onItemSelect &&
      onItemSelect(item)

    buttonRef.current.focus();
  }

  // etc
  const containerClass = [
    'dropdown-container',
    classes,
    isExpanded && 'is-expanded'
  ].filter(Boolean).join(' ')

  return (
    <div className={containerClass}
      tabIndex="1">
      <button className="dropdown__selected-item"
        onClick={onButtonClick}
        ref={buttonRef}
      >
        <span className="text">{buttonText}</span>

        <Icon classes="selected-item__arrow">expand_more</Icon>
      </button>

      <ul className="dropdown__option-list">
        {
          options.map(
            (item) => <li key={item.id}
              className="dropdown__option-list-item"
              onClick={() => onItemClick(item)}
            >{item.name}</li>
          )
        }
      </ul>
    </div>
  )
}

export default memo(Dropdown)
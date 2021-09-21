import React from 'react'

import Icon from '@components/global/icon'

import './SearchInput.scss'

function SearchInput ({
  value = '',
  onInput = null,
  tabIndex = 0,
  classes = '',
  placeholder = ''
}) {
  return (
    <span className={`search-input ${classes}`}>
      <input className="search-input__input" 
        type="text"
        tabIndex={tabIndex}
        value={value}
        placeholder={placeholder}
        onChange={onInput} />

      <Icon classes="search-input__search-icon">search</Icon>
    </span>
  )
}

export default SearchInput;
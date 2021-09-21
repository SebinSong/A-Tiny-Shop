import React, {
  useState,
  useCallback
} from 'react'
import { 
  useDispatch,
  useSelector
} from 'react-redux'

// child components
import SearchInput from '@components/shared/search-input';
import Icon from '@components/global/icon'

// action creators
import { closeSearchWidget } from '@store/features/searchWidgetSlice'

// utils
import { toggleClass } from '@view-utils'

import './SearchWidget.scss'

function SearchWidget (props) {
  // redux
  const dispatch = useDispatch()
  const isActive = useSelector(state => state.searchWidget.isActive)

  // state
  const [searchValue, setSearchValue] = useState('')

  // callbacks
  const onSearchInputUpdate = useCallback(
    (e) => {
      const { value } = e.target

      setSearchValue(v => v !== value ? value : v)
    }
  );
  const onCloseClick = useCallback(
    () => { dispatch(closeSearchWidget()) }
  );

  return (
    <div className={`search-widget ${toggleClass('is-active', isActive)}`}>
      <div className='search-widget__search-bar'>
        <Icon classes="search-widget__close-btn"
          tag="button"
          onClick={onCloseClick}>close</Icon>

        <SearchInput classes="search-widget__search-input"
          value={searchValue}
          onInput={onSearchInputUpdate}
          placeholder={'Enter keyword'} />
      </div>

      <div className="search-widget__content">widget_content</div>
    </div>
  )
}

export default SearchWidget;

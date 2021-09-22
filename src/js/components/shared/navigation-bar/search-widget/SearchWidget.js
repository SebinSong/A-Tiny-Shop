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
import SearchItem from './search-item/SearchItem.js'
import Icon from '@components/global/icon'

// action creators
import { closeSearchWidget } from '@store/features/searchWidgetSlice'

// utils
import { toggleClass } from '@view-utils'
import clothesList from '@viewdata/clothes-data'

import './SearchWidget.scss'


function SearchWidget (props) {
  // redux
  const dispatch = useDispatch()
  const isActive = useSelector(state => state.searchWidget.isActive)

  // state
  const [searchValue, setSearchValue] = useState('')
  const [itemsToShow, setItemsToShow] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // callbacks
  const onSearchInputUpdate = useCallback(
    (e) => {
      const { value } = e.target

      setSearchValue(v => v !== value ? value : v)
      setIsLoading(true)

      setTimeout(() => {
        const trimedValue = value.trim().toLowerCase();
        const filteredItemList = !trimedValue ? [] : 
          clothesList.filter(
            item => item.name.toLowerCase().indexOf(trimedValue) >= 0
          );
  
        setItemsToShow(filteredItemList);
        setIsLoading(false);
      }, 200)
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
          placeholder={'Search ...'} />
      </div>

      <div className="search-widget__content">
        {
          isLoading ?
            <div>Loading ...</div> :
          itemsToShow.length === 0 ?
            <div>no items found</div> :
            itemsToShow.map(
              item => <SearchItem
                key={item.id}
                currentSearchKeyword={searchValue}
                itemData={item} />
            )
        }
      </div>
    </div>
  )
}

export default SearchWidget;

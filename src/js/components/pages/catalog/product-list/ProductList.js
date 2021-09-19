import React, {
  useCallback
} from 'react'
import { 
  useDispatch,
  useSelector
} from 'react-redux'

// action creator
import { 
  selectCurrentFilters,
  setSort
} from '@store/features/catalogFilterSlice.js'

// components
import Dropdown from '@components/shared/dropdown'
import ProductCard from '@components/global/product-card'
import Masonry from '@components/shared/masonry'

// view-data
import clothesList from '@viewdata/clothes-data'

import './ProductList.scss'

const optionsList = [
  { id: 'most-popular', name: 'Most popular' },
  { id: 'top-rated', name: 'Top rated' },
  { id: 'lowest-price', name: 'Lowest price' },
  { id: 'highest-price', name: 'highest price' }
]

function ProductList (props) {
  const dispatch = useDispatch()
  const { 
    sleeve: currentSleeveFilter,
    gender: currentGenderFilter,
    lightDark: currentLightDarkFilter 
  } = useSelector(selectCurrentFilters)

  // callbacks
  const onSortSelect = useCallback(
    (item) => { dispatch(setSort(item.id)) }
  )

  // etc
  const itemHasFilterValue = (item, keyName, filterList) => {
    if (filterList.length === 0)
      return true;
   
    return filterList.includes(item[keyName]);
  };
  const filteredProductList = clothesList
    .filter(item => itemHasFilterValue(item, 'sleeve', currentSleeveFilter))
    .filter(item => itemHasFilterValue(item, 'gender', currentGenderFilter))
    .filter(item => itemHasFilterValue(item, 'lightDark', currentLightDarkFilter));

  return (
    <section className="catalog-page__product-list">
      <div className="product-list__section-header">
        <div className="section-header__text">
          <h1>Available products</h1>

          <span className="items-count">
            <span className="slash">/</span>
            <span className="count">
              <span className="num">{filteredProductList.length}</span>
              items found
            </span>
          </span>
        </div>

        <div className="sort-by">
          <span className="text">Sort by :</span>

          <Dropdown classes="sort-by-dropdown"
            options={optionsList}
            onItemSelect={onSortSelect}
          />
        </div>
      </div>

      <div className="product-list__content">
        <Masonry
          itemWidth={240}
          gap={32}
          list={filteredProductList}
          itemRender={
            itemData => <ProductCard
              classes="product-list__item"
              tag="div"
              key={itemData.id}
              productInfo={itemData} 
            />
          }
        />
      </div>
    </section>
  )
}

export default ProductList
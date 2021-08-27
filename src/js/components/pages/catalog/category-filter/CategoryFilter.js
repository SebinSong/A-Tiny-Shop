import React, {
  useCallback
} from 'react'

// components
import FilterGroup from './FilterGroup'

import './CategoryFilter.scss'

const filterTypes = [
  {
    filterName: 'Sleeve',
    items: [
      { id: 'long', name: 'Long' },
      { id: 'short', name: 'Short' }
    ]
  },
  {
    filterName: 'Gender',
    items: [
      { id: 'unisex', name: 'Unisex' },
      { id: 'men', name: 'Men' },
      { id: 'women', name: 'Women' }
    ]
  },
  {
    filterName: 'Light / Dark',
    items: [
      { id: 'light', name: 'Light' },
      { id: 'dark', name: 'Dark' }
    ]
  }
]

function CategoryFilter (props) {

  const onCheckboxClick = useCallback(
    (item, value) => { console.log(`${item.id} : ${value}`); },
    []
  )
  return (
    <section className="catalog-page__category-filter">
      <div className="category-filter__section-title">
        <span className="sub">Filters</span>
        <h1>Categories</h1>
      </div>

      <div className="category-filter__filters">
        {
          filterTypes.map(
            item => <FilterGroup 
              key={item.filterName}
              onitemClick={onCheckboxClick}
              { ...item } />
          )
        }
      </div>
    </section>
  )
}

export default CategoryFilter
import React from 'react'

// components
import FilterGroup from './FilterGroup'

import { filterTypes } from '@store/features/catalogFilterSlice.js'
import './CategoryFilter.scss'

function CategoryFilter (props) {
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
              { ...item } />
          )
        }
      </div>
    </section>
  )
}

export default CategoryFilter
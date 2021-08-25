import React, {
  useCallback
} from 'react'

// components
import Checkbox from '@components/shared/checkbox'

import './CategoryFilter.scss'

function CategoryFilter (props) {

  const onCheckboxClick = useCallback(
    (label, value) => { console.log(`${label} : ${value}`); },
    []
  )
  return (
    <section className="catalog-page__category-filter">
      <div className="category-filter__section-title">
        <span className="sub">Filters</span>
        <h1>Categories</h1>
      </div>

      <div className="category-filter__filters">
        <div className="filter-group">
          <span className="group-name">Sleeve</span>

          <Checkbox onChange={onCheckboxClick}>Long</Checkbox>
          <Checkbox onChange={onCheckboxClick}>Short</Checkbox>
        </div>

        <div className="filter-group">
          <span className="group-name">Gender</span>

          <Checkbox onChange={onCheckboxClick}>Unisex</Checkbox>
          <Checkbox onChange={onCheckboxClick}>Men</Checkbox>
          <Checkbox onChange={onCheckboxClick}>Women</Checkbox>
        </div>

        <div className="filter-group">
          <span className="group-name">Light / Dark</span>

          <Checkbox onChange={onCheckboxClick}>Light</Checkbox>
          <Checkbox onChange={onCheckboxClick}>Dark</Checkbox>
        </div>
      </div>
    </section>
  )
}

export default CategoryFilter
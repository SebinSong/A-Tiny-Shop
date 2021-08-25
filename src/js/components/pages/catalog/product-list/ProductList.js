import React from 'react'

// components
import Dropdown from '@components/shared/dropdown'

import './ProductList.scss'

const optionsList = [
  { id: 'opt-1', name: 'Option 1' },
  { id: 'opt-2', name: 'Option 2' },
  { id: 'opt-3', name: 'Option 3' }
]

function ProductList (props) {
  return (
    <section className="catalog-page__product-list">
      <div className="sort-by">
        <span className="text">Sort by :</span>

        <Dropdown 
          options={optionsList}
          initialItem={optionsList[0]} />
      </div>
    </section>
  )
}

export default ProductList
import React from 'react'

// components
import Dropdown from '@components/shared/dropdown'
import ProductCard from '@components/global/product-card'
import Masonry from '@components/shared/masonry'

// view-data
import clothesList from '@viewdata/clothes-data'

import './ProductList.scss'

const optionsList = [
  { id: 'opt-1', name: 'Option 1' },
  { id: 'opt-2', name: 'Option 2' },
  { id: 'opt-3', name: 'Option 3' }
]

function ProductList (props) {
  return (
    <section className="catalog-page__product-list">
      <div className="product-list__section-header">
        <div className="section-header__text">
          <h1>Available products</h1>

          <span className="items-count">
            <span className="slash">/</span>
            <span className="count">
              <span className="num">0</span>
              items found
            </span>
          </span>
        </div>

        <div className="sort-by">
          <span className="text">Sort by :</span>

          <Dropdown classes="sort-by-dropdown"
            options={optionsList}
            initialItem={optionsList[0]} />
        </div>
      </div>

      <div className="product-list__content">
        <Masonry
          itemWidth={240}
          gap={32}
          list={clothesList.slice(0, 10)}
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
import React, {
  useReducer,
  memo
} from 'react';

// child components
import CategoryFilter from './category-filter'
import ProductList from './product-list'

import './Catalog.scss';

function Catalog (props) {
  return (
    <main className="page catalog">
      <div className="catalog-page__header">
        <h1>Catalog</h1>
      </div>

      <div className="catalog-page__content">
        <CategoryFilter />
        <ProductList />
      </div>
    </main>
  )
};

export default memo(Catalog);
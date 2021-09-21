import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import { 
  useDispatch,
  useSelector
} from 'react-redux'

import { 
  selectCurrentFilters,
  selectCurrentSort,
  setSort,
  sortMethodMap
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

let flagTimeoutId = null;

function ProductList (props) {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectCurrentFilters)
  const currentSortOption = useSelector(selectCurrentSort)

  // states
  const [isFiltering, setIsFiltering] = useState(false)
  const [productListToShow, setProductListToShow] = useState(clothesList)

  // effects
  useEffect(() => {
    setIsFiltering(true);

    // filter the product list
    const filteredProductList = clothesList.filter(
      item => {
        const filterTypes = ['sleeve', 'gender', 'lightDark'];

        return filterTypes.every(type => itemHasFilterValue(item, type, currentFilters[type]));
      }
    );

    // sort the list
    if (currentSortOption) {
      const sortMethod = sortMethodMap[currentSortOption];

      sortMethod &&
        filteredProductList.sort(sortMethod);
    }

    // set-up timers for the view update.
    clearTimeout(flagTimeoutId);
    flagTimeoutId = setTimeout(() => { 
      setIsFiltering(false);
      setProductListToShow(filteredProductList);
    }, 200 + Math.floor(Math.random() * 100));

  }, [currentFilters, currentSortOption])

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

  const productCardRender = useCallback(
    itemData => <ProductCard
              classes="product-list__item"
              tag="div"
              key={itemData.id}
              productInfo={itemData} 
            />
  );

  return (
    <section className="catalog-page__product-list">
      <div className="product-list__section-header">
        <div className="section-header__text">
          <h1>Available products</h1>

          <span className="items-count">
            <span className="slash">/</span>
            <span className="count">
              <span className="num">
                { isFiltering ? 0 : productListToShow.length }
              </span>
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
        { isFiltering ? 
          <p>Loading...</p> :
          <Masonry
            itemWidth={240}
            gap={32}
            list={productListToShow}
            itemRender={productCardRender}
          />
        }
      </div>
    </section>
  )
}

export default ProductList
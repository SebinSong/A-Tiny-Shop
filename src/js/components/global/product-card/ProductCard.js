import React, {
  memo,
  createElement 
} from 'react'

// child components
import ImageLoaderBox from '@components/global/image-loader-box'

import './ProductCard.scss'

function ProductCard ({
  productInfo = null,
  classes = '',
  tag = 'div'
}) {
  console.log('re-rendering product!: ', productInfo.name)
  if (!productInfo)
    return null

  const {
    imgPath, name, price
  } = productInfo
  const children = (
    <>
      <div className="product-card__img-container">
        <ImageLoaderBox 
          src={imgPath}
          alt={name}
          imageMinHeight={200} />
      </div>

      <div className="product-card__item-summary">
        <span className="item-summary__name">{name}</span>
        <span className="item-summary__price">$ {price.toFixed(2)}</span>
      </div>

      <button className="is-tertiary item-summary__view-detail-btn">View Detail</button>
    </>
  )

  return createElement(
    tag,
    {
      className: `product-card ${classes}`
    },
    children
  )
}

export default memo(ProductCard)
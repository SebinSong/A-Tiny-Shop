import React, {
  memo,
  createElement 
} from 'react'

import { useDispatch } from 'react-redux'

// child components
import ImageLoaderBox from '@components/global/image-loader-box'

// actions
import { openProductDetail } from '@store/features/productDetailSlice'

import './ProductCard.scss'

function ProductCard ({
  productInfo = null,
  classes = '',
  tag = 'div',
  overrideBtnClick = null
}) {
  const dispatch = useDispatch();

  if (!productInfo)
    return null

  const {
    imgPath, name, price
  } = productInfo
  
  const onBtnClick = () => {
    if (overrideBtnClick) {
      overrideBtnClick(productInfo)
      return;
    }

    dispatch(openProductDetail(productInfo))
  }

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

      <button className="is-secondary item-summary__view-detail-btn"
        onClick={onBtnClick}>View Detail</button>
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
import React, { createElement } from 'react'

import './ProductCard.scss'

import ArborealGreySweat from "@images/clothes/ArborealGreySweat_long_bright_unisex.jpg";

const dummyData = {
  productIndex: 0,
  id: "ArborealGreySweat_long_bright_unisex_0",
  imgPath: ArborealGreySweat,
  name: "Arboreal sweat - grey",
  sleeve: "long",
  lightDark: "bright",
  gender: "unisex",
  price: 45.00,
  totalPurchaseCount: 90,
  rate: 3.59
}

function ProductCard ({
  productInfo = null,
  classes = '',
  tag = 'div'
}) {
  if (!productInfo)
    return null

  const {
    imgPath, name, price
  } = productInfo
  const children = (
    <>
      <div className="product-card__img-container">
        <img src={imgPath}
          alt={name} />
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

export default ProductCard
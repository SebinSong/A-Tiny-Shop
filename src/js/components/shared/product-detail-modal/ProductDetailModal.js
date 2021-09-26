import React from 'react'

import './ProductDetailModal.scss'

// child components
import ImageLoaderBox from '@components/global/image-loader-box'
import AmountSelector from '@components/global/amount-selector'
import Icon from '@components/global/icon';

import clothesList from '@viewdata/clothes-data'

function ProductDetailModal () {
  const productData = clothesList[0]
  const {
    name, imgPath, sleeve,
    lightDark, gender, price, totalPurchaseCount
  } = productData

  // callbacks
  const closeModal = () => {
    console.log('close modal')
  }

  return (
    <div className="product-detail-modal">
      <div className="product-detail-modal__overlay"></div>

      <div className="product-detail-modal__content">
        <div className="product-detail-modal__img-container">
          <ImageLoaderBox classes="img-container__img-box"
            src={imgPath}
            alt={name} />
        </div>

        <div className="product-detail-modal__details">
          <div className="details__name">{name}</div>

          <div className="details__price">$ {price.toFixed(2)}</div>

          <div className="details__detail-group">
            <span className="detail-group__header">Details</span>

            <span className="detail-group__item">
              <label>gender</label>
              <span className="value">{gender}</span>
            </span>

            <span className="detail-group__item">
              <label>sleeve</label>
              <span className="value">{sleeve}</span>
            </span>

            <span className="detail-group__item">
              <label>light / dark</label>
              <span className="value">{lightDark}</span>
            </span>

            <span className="detail-group__item">
              <label>total purchased</label>
              <span className="value count">{totalPurchaseCount}</span>
            </span>
          </div>

          <div className="details__btn-container">
            <AmountSelector classes="details__amount-selector" />

            <button className="is-primary details__add-to-cart-btn">Add To Cart</button>
          </div>
        </div>

        <Icon classes="product-detail-modal__close-btn"
          tag="button"
          onClick={closeModal}>close</Icon>
      </div>
    </div>
  );
};

export default ProductDetailModal;
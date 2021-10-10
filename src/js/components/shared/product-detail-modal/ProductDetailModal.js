import React, {
  useCallback
} from 'react'
import {
  useSelector,
  useDispatch
} from 'react-redux'

import './ProductDetailModal.scss'

// child components
import CallToActions from './CallToActions.js'
import ImageLoaderBox from '@components/global/image-loader-box'
import Icon from '@components/global/icon';

// utils
import { toggleClass } from '@view-utils'

// redux
import {
  selectCurrentProductDetail,
  selectIsModalOpen,
  closeProductDetail
} from '@store/features/productDetailSlice'

function ProductDetailModal () {
  // redux
  const dispatch = useDispatch();

  // selectors
  const isModalOpen = useSelector(selectIsModalOpen);
  const productData = useSelector(selectCurrentProductDetail);

  const {
    name, imgPath, sleeve,
    lightDark, gender, price, totalPurchaseCount
  } = productData || {}

  // callbacks
  const closeModal = useCallback(
    () => { dispatch(closeProductDetail()) }, []
  )

  return (
    <div className={`product-detail-modal ${toggleClass('is-open', isModalOpen)}`}>
      <div className="product-detail-modal__overlay"></div>

      <div className="product-detail-modal__content">
        { Boolean(productData) &&
          <>
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

              <CallToActions
                isModalOpen={isModalOpen}
                productData={productData}
                closeModal={closeModal} />
            </div>

            <Icon classes="product-detail-modal__close-btn"
              tag="button"
              onClick={closeModal}>close</Icon>
          </>
        }
      </div>
    </div>
  );
};

export default ProductDetailModal;
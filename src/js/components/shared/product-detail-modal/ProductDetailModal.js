import React from 'react'

import './ProductDetailModal.scss'

function ProductDetailModal (props) {
  return (
    <div className="product-detail-modal">
      <div className="product-detail-modal__overlay"></div>

      <div className="product-detail-modal__content">
        Modal Content
      </div>
    </div>
  );
};

export default ProductDetailModal;
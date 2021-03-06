const initState = {
  isOpen: false,
  productData: null
}

// action creators
const openProductDetail = productData => ({
  type: 'product-detail/open',
  payload: productData
})
const closeProductDetail = () => ({
  type: 'product-detail/close'
})

function productDetailReducer (state = initState, action) {
  const { type, payload } = action
  const { isOpen } = state


  switch (type) {
    case 'product-detail/open':
      if (!isOpen) {
        return {
          isOpen: true,
          productData: payload
        }
      }
    case 'product-detail/close':
      if (isOpen) {
        return {
          ...state,
          isOpen: false
        }
      }
  }

  return state
}

// selectors
const selectCurrentProductDetail = state => state.productDetail.productData
const selectIsModalOpen = state => state.productDetail.isOpen

export {
  initState,

  // reducer
  productDetailReducer,

  // action creators
  openProductDetail,
  closeProductDetail,

  // selectors
  selectCurrentProductDetail,
  selectIsModalOpen
}
import { useCallback } from 'react'
import { 
  useDispatch,
  useSelector
} from 'react-redux'

import {
  selectAllCartItems,
  selectTotalCartPrice,
  addToCart,
  removeFromCart,
  setCartItemAmount
} from '@store/features/cartSlice.js'

import clothesList from '@viewdata/clothes-data'

function useCartItem (id) {
  const dispatch = useDispatch()

  const currentItem = clothesList.find(item => item.id === id);
  const setCartAmount = useCallback(
    v => {
      dispatch(setCartItemAmount({ id, amount: v }))
    }, [id]
  )
  const removeCartItem = useCallback(
    () => dispatch(removeFromCart(id)), [id]
  )
  const addToCartWrap = useCallback(
    payload => dispatch(addToCart(payload)), []
  )

  return {
    setCartAmount,
    removeCartItem,
    addToCart: addToCartWrap,
    currentItem
  }
}

function useCart () {
  const dispatch = useDispatch()

  const allCartItems = useSelector(selectAllCartItems)
  const totalCartPrice = useSelector(selectTotalCartPrice)
  const isCartEmpty = allCartItems.length === 0
  
  const addToCartWrap = payload => dispatch(addToCart(payload));
  const getCartItem = id => allCartItems.find(item => item.id === id) || null
  const checkIfItemInCart = id => allCartItems.some(item => item.id === id)

  return {
    allCartItems,
    totalCartPrice,
    isCartEmpty,

    addToCart: addToCartWrap,
    getCartItem,
    checkIfItemInCart
  }
}

export {
  useCartItem,
  useCart
}
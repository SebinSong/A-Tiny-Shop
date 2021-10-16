import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import {
  setCartItemAmount,
  removeFromCart
} from '@store/features/cartSlice.js'

import clothesList from '@viewdata/clothes-data'

function useCart (id) {
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

  return {
    setCartAmount,
    removeCartItem,
    currentItem
  }
}

export default useCart
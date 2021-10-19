import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import { useDispatch } from 'react-redux';

// child components
import AmountSelector from '@components/global/amount-selector'

// hooks
import { useCartItem, useCart } from '@hooks'

import { turnOnCartBadge } from '@store/features/cartWidgetSlice.js'

function CallToActions ({
  productData,
  closeModal
}) {
  const dispatch = useDispatch();
  // state
  const id = productData.id;

  const { 
    addToCart, setCartAmount
  } = useCartItem(id);
  const {
    checkIfItemInCart, getCartItem
  } = useCart();

  const [itemAmount, setItemAmount] = useState(0);
  const [isItemInCart, setIsItemInCart] = useState(false);

  // effects
  useEffect(() => {
    const itemExists = checkIfItemInCart(id);

    setIsItemInCart(itemExists);
    setItemAmount(itemExists ? getCartItem(id).amount : 1);
  }, [])

  // callbacks
  const onItemAmountChange = useCallback(
    v => setItemAmount(v), []
  );
  const onButtonClick = () => {
    if (isItemInCart)
      setCartAmount(itemAmount);
    else {
      addToCart({ 
        id: productData.id, 
        amount: itemAmount, 
        data: productData
      });

      dispatch(turnOnCartBadge());
    }

    closeModal();
  }

  return (
    <div className="details__btn-container">
      <AmountSelector classes="details__amount-selector"
        amount={itemAmount}
        onChange={onItemAmountChange} />

      <button className="is-primary details__add-to-cart-btn"
        onClick={onButtonClick}>
        {isItemInCart ? 'Update Cart' : 'Add To Cart'}
      </button>
    </div>
  )
};

export default CallToActions;
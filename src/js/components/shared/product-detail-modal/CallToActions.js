import React, {
  useState,
  useCallback,
  useEffect,
  memo
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';

// child components
import AmountSelector from '@components/global/amount-selector'

// redux
import {
  selectAllCartItems,
  addToCart,
  setCartItemAmount
} from '@store/features/cartSlice.js'

function CallToActions ({
  productData,
  closeModal
}) {
  const dispatch = useDispatch();
  // state
  const [itemAmount, setItemAmount] = useState(0);
  const [isItemInCart, setIsItemInCart] = useState(false);
  const allItems = useSelector(selectAllCartItems);

  // effects
  useEffect(() => {
    const currentItem = allItems.find(item => item.id === productData.id);

    const itemExists = Boolean(currentItem);
    setIsItemInCart(itemExists);
    setItemAmount(itemExists ? currentItem.amount : 1);
  }, [productData, allItems])

  // callbacks
  const onItemAmountChange = useCallback(
    v => setItemAmount(v), []
  );
  const onButtonClick = () => {
    if (isItemInCart) {
      const payload = {
        id: productData.id,
        amount: itemAmount
      };

      dispatch(setCartItemAmount(payload));
    } else {
      const payload = { 
        id: productData.id, 
        amount: itemAmount, 
        data: productData
      };

      dispatch(addToCart(payload));
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
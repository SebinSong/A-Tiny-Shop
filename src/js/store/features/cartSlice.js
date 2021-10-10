import { cloneDeep } from '@view-utils'

/* 
  - example item structure

  {
    id: ... ,
    amount: 5,
    data: { ... }
  }
*/

const initState = []

// helpers
const MIN_AMOUNT = 1;
const MAX_AMOUNT = 99;

const incrementAmount = v => v < MAX_AMOUNT ? v + 1 : v
const decrementAmount = v => v > MIN_AMOUNT ? v - 1 : v
const checkIfWithinRange = v => v >= MIN_AMOUNT && v <= MAX_AMOUNT

// action creators
const addToCart = ({ id, amount, data }) => ({
  type: 'cart/add',
  payload: { id, amount, data }
})
const removeFromCart = (id) => ({
  type: 'cart/remove',
  payload: { id }
})
const incrementCartItem = (id) => ({
  type: 'cart/increment-amount',
  payload: { id }
})
const decrementCartItem = (id) => ({
  type: 'cart/decrement-amount',
  payload: { id }
})
const setCartItemAmount = ({ id, amount }) => ({
  type: 'cart/set-amount',
  payload: { id, amount }
})


function cartReducer (state = initState, action) {
  const { type, payload } = action

  switch (type) {
    case 'cart/add':
      return [ ...state, cloneDeep(payload) ];

    case 'cart/remove':
      return state.filter(item => item.id !== payload.id);

    case 'cart/increment-amount':
      return state.map(item => {
        if (item.id !== payload.id)
          return item;
        else
          return {
            ...item,
            amount: incrementAmount(item.amount)
          }
      });
    
    case 'cart/decrement-amount':
      return state.map(item => {
        if (item.id !== payload.id)
          return item;
        else
          return {
            ...item,
            amount: decrementAmount(item.amount)
          }
      });

    case 'cart/set-amount':
      return state.map(item => {
        if (item.id !== payload.id)
          return item;
        else
          return {
            ...item,
            amount: checkIfWithinRange(payload.amount) ? payload.amount : item.amount
          }
      });
  }

  return state;
}

// selectors
const selectAllCartItems = state => state.cart;
const selectTotalCartPrice = state => {
  const sum = state.cart.reduce((currentTotal, item) => {
    const { amount, data } = item

    return currentTotal + amount * parseFloat(data.price)
  }, 0);

  return sum.toFixed(2);
};

export {
  // reducer
  cartReducer,

  // selectors
  selectAllCartItems,
  selectTotalCartPrice,

  // action creators
  addToCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
  setCartItemAmount
}
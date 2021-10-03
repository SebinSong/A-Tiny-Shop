const initState = {
  isOpen: false
}

// action creators
const openCartWidget = () => ({ type: 'cart-widget/open' });
const closeCartWidget = () => ({ type: 'cart-widget/close' });
const toggleCartWidget = () => ({ type: 'cart-widget/toggle' });

function CartWidgetReducer (state = initState, action) {
  const { isOpen } = state;

  switch (action.type) {
    case 'cart-widget/open':
      return { isOpen: true };
    case 'cart-widget/close':
      return { isOpen: false };
    case 'cart-widget/toggle':
      return { isOpen: !isOpen };
  }

  return state;
}

const selectIsCartWidgetOpen = state => state.cartWidget.isOpen

export {
  // action creators
  openCartWidget,
  closeCartWidget,
  toggleCartWidget,

  // reducer
  CartWidgetReducer,

  // selector
  selectIsCartWidgetOpen
}
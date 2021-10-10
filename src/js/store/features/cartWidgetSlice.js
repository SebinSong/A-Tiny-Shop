const initState = {
  isOpen: false,
  badgeOn: false
}

// action creators
const openCartWidget = () => ({ type: 'cart-widget/open' });
const closeCartWidget = () => ({ type: 'cart-widget/close' });
const toggleCartWidget = () => ({ type: 'cart-widget/toggle' });
const turnOnCartBadge = () => ({ type: 'cart-widget/badge-on' });
const turnOffCartBadge = () => ({ type: 'cart-widget/badge-off' });

function cartWidgetReducer (state = initState, action) {
  const { isOpen, badgeOn } = state;

  switch (action.type) {
    case 'cart-widget/open':
      return { isOpen: true, badgeOn: false };
    case 'cart-widget/close':
      return { isOpen: false, badgeOn: false };
    case 'cart-widget/toggle':
      return { isOpen: !isOpen, badgeOn: false };
    case 'cart-widget/badge-on':
      return { ...state, badgeOn: true };
    case 'cart-widget/badge-off':
      return { ...state, badgeOn: false };
  }

  return state;
}

const selectIsCartWidgetOpen = state => state.cartWidget.isOpen
const selectCartBadgeOn = state => state.cartWidget.badgeOn

export {
  // action creators
  openCartWidget,
  closeCartWidget,
  toggleCartWidget,
  turnOnCartBadge,
  turnOffCartBadge,

  // reducer
  cartWidgetReducer,

  // selector
  selectIsCartWidgetOpen,
  selectCartBadgeOn
}
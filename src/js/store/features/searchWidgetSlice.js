const initialState = {
  isActive: false
}

function searchWidgetReducer (state = initialState, action) {
  const { type } = action

  switch (type) {
    case 'search-widget/open':
      return { isActive: true };
    case 'search-widget/close':
      return { isActive: false };
    case 'search-widget/toggle':
      return { isActive: !state.isActive }
    default:
      return state;
  }
}

// action creators
const openSearchWidget = () => ({ type: 'search-widget/open' });
const closeSearchWidget = () => ({ type: 'search-widget/close' });
const toggleSearchWidget = () => ({ type: 'search-widget/toggle' });

export {
  searchWidgetReducer,

  openSearchWidget,
  closeSearchWidget,
  toggleSearchWidget
}
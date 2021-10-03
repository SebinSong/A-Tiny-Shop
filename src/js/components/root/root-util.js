// selector to check if any overlay UIs are active or not
const checkIfAnyOverlayActive = state => {
  const { 
    searchWidget,
    productDetail,
    cartWidget
  } = state;
  
  return productDetail.isOpen ||
    searchWidget.isActive ||
    cartWidget.isOpen
}
const toggleMainScroll = flag => {
  const handle = document.documentElement.classList; 
  
  if (flag)
    handle.add('disable-scroll');
  else
    handle.remove('disable-scroll');
}

export {
  checkIfAnyOverlayActive,
  toggleMainScroll
}
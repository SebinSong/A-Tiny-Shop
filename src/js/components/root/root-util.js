// selector to check if any overlay UIs are active or not
const checkIfAnyOverlayActive = state => {
  const { searchWidget, productDetail } = state;
  
  return productDetail.isOpen ||
    searchWidget.isActive
}
const toggleMainScroll = flag => {
  const handle = document.documentElement.classList;
  
  console.log('handle!!: ', handle)
  if (flag)
    handle.add('disable-scroll');
  else
    handle.remove('disable-scroll');
}

export {
  checkIfAnyOverlayActive,
  toggleMainScroll
}
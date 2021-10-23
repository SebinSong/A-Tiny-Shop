import React, {
  useRef,
  useEffect,
  useState
} from 'react'

// child components
import Icon from '@components/global/icon'

import './CardSlider.scss'

// helper
const getBoundingWidth = el => el.current.getBoundingClientRect().width

function CardSlider ({
  slideWidth = 200, // slide unit in px
  children = null, // render function for the card
  cardDataList = null,
  classes = ''
}) {
  if (!children || !cardDataList)
    return null;

  // states
  const [showCta, setShowCta] = useState(false)
  const [xTransition, setXtransition] = useState(0)

  // refs
  const [ containerEl, listEl ] = [ useRef(null), useRef(null) ]

  // callbacks
  const onRightClick = () => {
    const containerWidth = getBoundingWidth(containerEl)
    const listWidth = getBoundingWidth(listEl)
    const windowWidth = containerWidth - 66*2;
    const croppedRightWidth = listWidth + xTransition - windowWidth;

    if (croppedRightWidth <= 0)
      return;
    else
      setXtransition(v => v - Math.min(slideWidth, croppedRightWidth))
  }
  const onLeftClick = () => { 
    setXtransition(v => {
      if (v >= 0)
        return 0;

      return v + slideWidth < 0 ?  v + slideWidth : 0
    }) 
  }

  // effects
  useEffect(() => {
    const onWindowResize = () => {
      const containerWidth = getBoundingWidth(containerEl)
      const listWidth = getBoundingWidth(listEl)
  
      const shouldShowCta = (Math.ceil(containerWidth) - 16 * 2) <= listWidth;
      setShowCta(shouldShowCta)
  
      setXtransition(0)
    }

    window.addEventListener('resize', onWindowResize)
    onWindowResize()

    return () => { // clean-up
      window.removeEventListener('resize', onWindowResize)
    }
  }, [cardDataList])

  // etc
  const classStr = [
    'card-slider-container',
    classes,
    showCta && 'with-cta'
  ].filter(Boolean).join(' ')
  const listElStyle = Object.assign(
    {},
    showCta && {
      'transform': `translateX(${xTransition}px)`
    }
  )
  
  return (
    <div ref={containerEl} className={classStr}>
      <div ref={listEl}
        className="card-slider__list"
        style={listElStyle}>
        { cardDataList.map(children) }
      </div>

      <Icon tag="button" 
        classes="card-slider__slide-btn left"
        onClick={onLeftClick}>chevron_left</Icon>

      <Icon tag="button"
        classes="card-slider__slide-btn right"
        onClick={onRightClick}>chevron_right</Icon>
    </div>
  )
}

export default CardSlider;
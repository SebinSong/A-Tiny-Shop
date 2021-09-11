import React, {
  useRef,
  useState,
  useEffect
} from 'react'

// utils
import { createNumArray } from '@view-utils'

import './Masonry.scss'

function MasonryColumn ({ 
  itemList, itemRender
}) {
  return (
    <div className="masonry__column">
      {
        itemList.map(
          item => itemRender(item)
        )
      }
    </div>
  )
}

function Masonry ({
  classes = '',
  list = null,
  itemRender = null, // renderProp for the card item
  noPadding = false,
  itemWidth = 260, // defaults to 260px
  gap = 15 // gutter between16px
}) {
  //refs
  const containerRef = useRef(null)

  // states
  const [columnCount, setColumnCount] = useState(1)

  // effects
  useEffect(() => {
    const { current: containerEl } = containerRef
    const onScreenResize = () => {
      const getComputed = (el, prop) => window.getComputedStyle(el)[prop];
      const containerWidth = parseFloat(getComputed(containerEl, 'width'));
      const availableSpace = noPadding ? containerWidth : containerWidth - 2 * gap;

      const itemSpace = itemWidth + 2; // 2 is a margin for a buggy behavior
      const divisionVal = Math.floor(availableSpace / itemSpace);
      const remainder = availableSpace % itemSpace;

      if (divisionVal === 1)
        setColumnCount(1);
      else
        setColumnCount(() => {
          if (remainder >= gap * (divisionVal - 1))
            return divisionVal
          else
            return divisionVal - 1
        });
    };

    window.addEventListener('resize', onScreenResize);
    
    containerEl.style.setProperty('--masonry-item-width', `${itemWidth}px`)
    containerEl.style.setProperty('--masonry-gap', `${gap}px`)
    onScreenResize();

    return () => {
      window.removeEventListener('resize', onScreenResize);
    }
  }, [])

  // etc
  const additionalClasses = [
    classes,
    noPadding && 'no-padding'
  ].filter(Boolean).join(' ');
  
  const columnsList = createNumArray(columnCount).map(() => []);

  list.forEach((item, index) => {
    const colNum = index % columnCount
    columnsList[colNum].push(item);
  });

  return (
    <div ref={containerRef} 
      className={`masonry-container ${additionalClasses}`}>
      {
        columnsList.map(
          (columnItemList, index) => <MasonryColumn 
              key={`col-${index}`}
              itemList={columnItemList}
              itemRender={itemRender}
            />
        )
      }
    </div>
  )
}

export default Masonry;
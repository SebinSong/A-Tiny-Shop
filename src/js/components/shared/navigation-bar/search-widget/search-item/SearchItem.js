import React from 'react'

// child components
import ImageLoaderBox from '@components/global/image-loader-box'

import './SearchItem.scss'

// helpers
function generateHighlightedName (keyword, name) {
  if (!keyword ||
    name.indexOf(keyword) < 0)
    return <span>{name}</span>

  const index = name.indexOf(keyword)
  const [before, after] = [
    name.slice(0, index),
    name.slice(index + keyword.length)
  ]
  const arr = [ before, keyword, after ]
  return arr.map((str, index) => {
        if (index === 1)
          return <span key={index} className="highlighted">{str}</span>
        else
          return <span key={index}>{str}</span>
      });
}

function SearchItem ({
  currentSearchKeyword = '',
  itemData = null
}) {
  const {
    imgPath, name, price
  } = itemData;

  const highlightedName = generateHighlightedName(
    currentSearchKeyword.trim(), name
  );

  return (
    <div className="search-widget__search-item">
      <ImageLoaderBox classes="search-item__img"
        src={imgPath}
        alt={name} />

      <span className="search-item__item-details">
        <span className="item-details__name">
          {highlightedName}
        </span>
        <span className="item-details__price">$ {price}</span>
      </span>
    </div>
  )
};

export default SearchItem;
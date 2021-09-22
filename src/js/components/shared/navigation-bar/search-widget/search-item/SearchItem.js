import React from 'react'

// child components
import ImageLoaderBox from '@components/global/image-loader-box'

import './SearchItem.scss'

// helpers
function generateHighlightedName (keyword, name) {
  const normalizedName = name.toLowerCase();
  const index = normalizedName.indexOf(keyword.toLowerCase())

  if (!keyword || index < 0)
    return name

  return [
    name.slice(0, index),
    <span key={'highlighted'} className="highlighted">
      {name.slice(index, index + keyword.length)}
    </span>,
    name.slice(index + keyword.length)
  ]
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
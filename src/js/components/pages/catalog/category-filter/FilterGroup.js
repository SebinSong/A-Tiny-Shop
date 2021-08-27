import React, { 
  useState,
  memo
 } from 'react';

import { toggleClass } from '@view-utils'

// components
import Checkbox from '@components/shared/checkbox'
import Icon from '@components/global/icon'

function FilterGroup ({
  filterName = '',
  items = [],
  onItemClick = null
}) {
  const [isClosed, setIsclosed] = useState(false)

  return (
    <div className={`filter-group ${toggleClass('is-closed', isClosed)}`}>
      <span className="group-name"
        onClick={() => setIsclosed(v => !v)}
      >
        <span className="text">{filterName}</span>
        <Icon classes="expand-arrow">arrow_circle_up</Icon>
      </span>

      <div className="items">
        {
          items.map(
            (item) => <Checkbox key={item.id}
              item={item}
              onChange={onItemClick}
            >{item.name}</Checkbox>
          )
        }
      </div>
    </div>
  )
};

export default memo(FilterGroup);
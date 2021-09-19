import React, { 
  useState,
  useCallback,
  useContext,
  memo
} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { toggleClass } from '@view-utils'

// action creator
import { toggleFilter } from '@store/features/catalogFilterSlice.js'

// components
import Checkbox from '@components/shared/checkbox'
import Icon from '@components/global/icon'

function FilterGroup ({
  filterName = '',
  filterId = '',
  items = []
}) {
  const dispatch = useDispatch()
  const currentFilterState = useSelector(
    state => state.catalog.filters[filterId]
  )

  // states
  const [isClosed, setIsclosed] = useState(false)

  // callbacks
  const onItemClick = useCallback(
    (item, value) => { 
      dispatch(toggleFilter({
        filterType: filterId,
        filterItem: item.id
      }));
    }
  );

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
              value={currentFilterState.includes(item.id)}
            >{item.name}</Checkbox>
          )
        }
      </div>
    </div>
  )
};

export default memo(FilterGroup);
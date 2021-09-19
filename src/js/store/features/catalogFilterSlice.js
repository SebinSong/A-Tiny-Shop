const initialState = {
  filters: {
    sleeve: [], // 'long', 'short'
    gender: [], // 'men', 'women', 'unisex'
    lightDark: [] // 'light', 'dark'
  },
  sort: '' // 'most-popular', 'top-rated', 'lowest-price', 'highest-price'
};

const filterTypes = [
  {
    filterName: 'Sleeve',
    filterId: 'sleeve',
    items: [
      { id: 'long', name: 'Long' },
      { id: 'short', name: 'Short' }
    ]
  },
  {
    filterName: 'Gender',
    filterId: 'gender',
    items: [
      { id: 'unisex', name: 'Unisex' },
      { id: 'men', name: 'Men' },
      { id: 'women', name: 'Women' }
    ]
  },
  {
    filterName: 'Light / Dark',
    filterId: 'lightDark',
    items: [
      { id: 'light', name: 'Light' },
      { id: 'dark', name: 'Dark' }
    ]
  }
];

// action creators
const addFilter = ({ filterType, filterItem }) => ({
  type: 'catalog/filter/add',
  payload: { filterType, filterItem }
});
const removeFilter = ({ filterType, filterItem }) => ({
  type: 'catalog/filter/remove',
  payload: { filterType, filterItem }
});
const toggleFilter = ({ filterType, filterItem }) => ({
  type: 'catalog/filter/toggle',
  payload: { filterType, filterItem }
});
const resetFilter = (filterType) => ({
  type: 'catalog/filter/reset',
  payload: { filterType }
});
const setSort = (type) => ({
  type: 'catalog/sort/set',
  payload: { type }
});
const removeSort = () => ({
  type: 'catalog/sort/remove'
});

// reducer
function catalogReducer (state = initialState, action) {
  const { type, payload } = action
  const { filters, sort } = state

  const argsForFilterAction = [
    filters, payload?.filterType, payload?.filterItem
  ]

  switch (type) {
    case 'catalog/filter/add':
      if (!_checkIfFilterHas(...argsForFilterAction))
        return {
          ...state,
          filters: _addFilter(...argsForFilterAction)
        };

    case 'catalog/filter/remove':
      if (_checkIfFilterHas(...argsForFilterAction))
        return {
          ...state,
          filters: _removeFilter(...argsForFilterAction)
        };

    case 'catalog/filter/toggle':
      return {
        ...state,
        filters: _toggleFilter(...argsForFilterAction)
      }

    case 'catalog/filter/reset':
      return {
        ...state,
        filters: _resetFilter(filters, payload.filterType)
      };

    case 'catalog/sort/set':
      return {
        ...state,
        sort: payload.type
      };

    case 'catalog/sort/remove':
      return {
        ...state,
        sort: ''
      };
  }

  return state
}

// reducer helpers
function _checkIfFilterHas (filters, filterType, value) {
  const filter = filters[filterType];

  return filter.includes(value);
}
function _addFilter (filters, filterType, value) {
  const filterToUpdate = filters[filterType].slice();
  filterToUpdate.push(value);

  return {
    ...filters,
    [filterType]: filterToUpdate
  };
}
function _removeFilter (filters, filterType, value) {
  const filterToUpdate = filters[filterType].slice();
  const index = filterToUpdate.indexOf(value);

  filterToUpdate.splice(index, 1);
  return {
    ...filters,
    [filterType]: filterToUpdate
  };
}
function _toggleFilter (...args) {
  if (_checkIfFilterHas(...args))
    return _removeFilter(...args);
  else
    return _addFilter(...args);
}
function _resetFilter (filters, filterType) {
  return filters
}

// selectors
const selectCurrentFilters = state => state.catalog.filters

export {
  initialState,
  filterTypes,

  // action creators
  addFilter,
  removeFilter,
  toggleFilter,
  resetFilter,
  setSort,
  removeSort,

  // selectors
  selectCurrentFilters,

  // reducer
  catalogReducer
}
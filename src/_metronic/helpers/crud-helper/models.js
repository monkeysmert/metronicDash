export const initialQueryState = {
  page: 1,
  items_per_page: 10
}

export const initialQueryRequest = {
  state: initialQueryState,
  updateState: () => {}
}

export const initialQueryResponse = {
  refetch: () => {},
  isLoading: false,
  query: ""
}

export const initialListView = {
  selected: [],
  onSelect: () => {},
  onSelectAll: () => {},
  clearSelected: () => {},
  setItemIdForUpdate: () => {},
  isAllSelected: false,
  disabled: false
}

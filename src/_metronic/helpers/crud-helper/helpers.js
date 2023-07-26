import { createContext, useEffect, useState } from "react"
import qs from "qs"

function createResponseContext(initialState) {
  return createContext(initialState)
}

function isNotEmpty(obj) {
  return obj !== undefined && obj !== null && obj !== ""
}

// Example: page=1&items_per_page=10&sort=id&order=desc&search=a&filter_name=a&filter_online=false
function stringifyRequestQuery(state) {
  const pagination = qs.stringify(state, {
    filter: ["page", "items_per_page"],
    skipNulls: true
  })
  const sort = qs.stringify(state, {
    filter: ["sort", "order"],
    skipNulls: true
  })
  const search = isNotEmpty(state.search)
    ? qs.stringify(state, { filter: ["search"], skipNulls: true })
    : ""

  const filter = state.filter
    ? Object.entries(state.filter)
        .filter(obj => isNotEmpty(obj[1]))
        .map(obj => {
          return `filter_${obj[0]}=${obj[1]}`
        })
        .join("&")
    : ""

  return [pagination, sort, search, filter]
    .filter(f => f)
    .join("&")
    .toLowerCase()
}

function parseRequestQuery(query) {
  const cache = qs.parse(query)
  return cache
}

function calculatedGroupingIsDisabled(isLoading, data) {
  if (isLoading) {
    return true
  }

  return !data || !data.length
}

function calculateIsAllDataSelected(data, selected) {
  if (!data) {
    return false
  }

  return data.length > 0 && data.length === selected.length
}

function groupingOnSelect(id, selected, setSelected) {
  if (!id) {
    return
  }

  if (selected.includes(id)) {
    setSelected(selected.filter(itemId => itemId !== id))
  } else {
    const updatedSelected = [...selected]
    updatedSelected.push(id)
    setSelected(updatedSelected)
  }
}

function groupingOnSelectAll(isAllSelected, setSelected, data) {
  if (isAllSelected) {
    setSelected([])
    return
  }

  if (!data || !data.length) {
    return
  }

  setSelected(data.filter(item => item.id).map(item => item.id))
}

// Hook
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    }, // Only re-call effect if value or delay changes
    [value, delay]
  )
  return debouncedValue
}

export {
  createResponseContext,
  stringifyRequestQuery,
  parseRequestQuery,
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  groupingOnSelectAll,
  useDebounce,
  isNotEmpty
}

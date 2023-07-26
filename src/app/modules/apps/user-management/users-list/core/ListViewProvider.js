import { useState, createContext, useContext, useMemo } from "react"
import {
  calculatedGroupingIsDisabled,
  calculateIsAllDataSelected,
  groupingOnSelect,
  initialListView,
  groupingOnSelectAll
} from "../../../../../../_metronic/helpers"
import { useQueryResponse, useQueryResponseData } from "./QueryResponseProvider"

const ListViewContext = createContext(initialListView)

const ListViewProvider = ({ children }) => {
  const [selected, setSelected] = useState(initialListView.selected)
  const [itemIdForUpdate, setItemIdForUpdate] = useState(
    initialListView.itemIdForUpdate
  )
  const { isLoading } = useQueryResponse()
  const data = useQueryResponseData()
  const disabled = useMemo(
    () => calculatedGroupingIsDisabled(isLoading, data),
    [isLoading, data]
  )
  const isAllSelected = useMemo(
    () => calculateIsAllDataSelected(data, selected),
    [data, selected]
  )

  return (
    <ListViewContext.Provider
      value={{
        selected,
        itemIdForUpdate,
        setItemIdForUpdate,
        disabled,
        isAllSelected,
        onSelect: id => {
          groupingOnSelect(id, selected, setSelected)
        },
        onSelectAll: () => {
          groupingOnSelectAll(isAllSelected, setSelected, data)
        },
        clearSelected: () => {
          setSelected([])
        }
      }}
    >
      {children}
    </ListViewContext.Provider>
  )
}

const useListView = () => useContext(ListViewContext)

export { ListViewProvider, useListView }

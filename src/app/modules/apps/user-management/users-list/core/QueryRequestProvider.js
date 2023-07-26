import { useState, createContext, useContext } from "react"
import { initialQueryRequest } from "../../../../../../_metronic/helpers"

const QueryRequestContext = createContext(initialQueryRequest)

const QueryRequestProvider = ({ children }) => {
  const [state, setState] = useState(initialQueryRequest.state)

  const updateState = updates => {
    const updatedState = {
      ...state,
      ...updates
    }
    setState(updatedState)
  }

  return (
    <QueryRequestContext.Provider value={{ state, updateState }}>
      {children}
    </QueryRequestContext.Provider>
  )
}

const useQueryRequest = () => useContext(QueryRequestContext)
export { QueryRequestProvider, useQueryRequest }

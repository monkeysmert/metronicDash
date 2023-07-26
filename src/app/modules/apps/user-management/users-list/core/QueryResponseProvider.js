/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState, useEffect, useMemo } from "react"
import { useQuery } from "react-query"
import {
  createResponseContext,
  initialQueryResponse,
  initialQueryState,
  QUERIES,
  stringifyRequestQuery
} from "../../../../../../_metronic/helpers"
import { getUsers } from "./_requests"
import { useQueryRequest } from "./QueryRequestProvider"

const QueryResponseContext = createResponseContext(initialQueryResponse)
const QueryResponseProvider = ({ children }) => {
  const { state } = useQueryRequest()
  const [query, setQuery] = useState(stringifyRequestQuery(state))
  const updatedQuery = useMemo(() => stringifyRequestQuery(state), [state])

  useEffect(() => {
    if (query !== updatedQuery) {
      setQuery(updatedQuery)
    }
  }, [updatedQuery])

  const { isFetching, refetch, data: response } = useQuery(
    `${QUERIES.USERS_LIST}-${query}`,
    () => {
      return getUsers(query)
    },
    { cacheTime: 0, keepPreviousData: true, refetchOnWindowFocus: false }
  )

  return (
    <QueryResponseContext.Provider
      value={{ isLoading: isFetching, refetch, response, query }}
    >
      {children}
    </QueryResponseContext.Provider>
  )
}

const useQueryResponse = () => useContext(QueryResponseContext)

const useQueryResponseData = () => {
  const { response } = useQueryResponse()
  if (!response) {
    return []
  }

  return response?.data || []
}

const useQueryResponsePagination = () => {
  const defaultPaginationState = {
    links: [],
    ...initialQueryState
  }

  const { response } = useQueryResponse()
  if (!response || !response.payload || !response.payload.pagination) {
    return defaultPaginationState
  }

  return response.payload.pagination
}

const useQueryResponseLoading = () => {
  const { isLoading } = useQueryResponse()
  return isLoading
}

export {
  QueryResponseProvider,
  useQueryResponse,
  useQueryResponseData,
  useQueryResponsePagination,
  useQueryResponseLoading
}

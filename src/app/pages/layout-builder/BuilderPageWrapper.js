import React from "react"
import { PageTitle } from "../../../_metronic/layout/core"
import { BuilderPage } from "./BuilderPage"

const BuilderPageWrapper = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <BuilderPage />
    </>
  )
}

export default BuilderPageWrapper

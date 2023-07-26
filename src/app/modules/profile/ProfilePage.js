import { Navigate, Routes, Route, Outlet } from "react-router-dom"
import { PageTitle } from "../../../_metronic/layout/core"
import { Customers } from "./components/Customers"
import { Marketers } from "./components/Marketers"
import { Nurses } from "./components/Nurses"
import { Drivers } from "./components/Drivers"
import { Connections } from "./components/Connections"
import { ProfileHeader } from "./ProfileHeader"

const profileBreadCrumbs = [
  {
    title: "Dashboard",
    path: "/dashboard",
    isSeparator: false,
    isActive: false
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false
  }
]

const ProfilePage = () => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path="customers"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Customers</PageTitle>
            <Customers />
          </>
        }
      />
      <Route
        path="marketers"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Marketers</PageTitle>
            <Marketers />
          </>
        }
      />
      <Route
        path="nurses"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Nurses</PageTitle>
            <Nurses />
          </>
        }
      />
      <Route
        path="drivers"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Drivers</PageTitle>
            <Drivers />
          </>
        }
      />
      {/* <Route
        path="connections"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle>
            <Connections />
          </>
        }
      /> */}
      <Route
        index
        element={<Navigate to="/crafted/pages/profile/overview" />}
      />
    </Route>
  </Routes>
)

export default ProfilePage

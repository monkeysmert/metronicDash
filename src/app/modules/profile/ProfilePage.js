import { Navigate, Routes, Route, Outlet } from "react-router-dom"
import { PageTitle } from "../../../_metronic/layout/core"
import { Customers } from "./components/Customers"
import { Projects } from "./components/Projects"
import { Campaigns } from "./components/Campaigns"
import { Documents } from "./components/Documents"
import { Connections } from "./components/Connections"
import { ProfileHeader } from "./ProfileHeader"

const profileBreadCrumbs = [
  {
    title: "Profile",
    path: "/crafted/pages/customers",
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
            <Projects />
          </>
        }
      />
      <Route
        path="nurses"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Nurses</PageTitle>
            <Campaigns />
          </>
        }
      />
      <Route
        path="drivers"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Drivers</PageTitle>
            <Documents />
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

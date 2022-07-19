import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"

const permission = true

const AdminPage = () => {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            permission ? (
              <h3>panel administratora - logowanie</h3>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </>
  )
}

export default AdminPage

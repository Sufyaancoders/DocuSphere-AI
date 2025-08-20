// This will prevent authenticated users from accessing this route
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import React from 'react'

function OpenRoute({ children }) {
  const { token } = useSelector((state) => state.auth)

  if (!token) {
    return children
  } else {
    return <Navigate to="/dashboard" />
  }
}

export default OpenRoute
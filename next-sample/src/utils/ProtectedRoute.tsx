import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import AuthContext, { IAuthContext } from '../context/AuthProvider'

const ProtectedRoute = ({ children }: any) => {
  const { auth } = useContext<IAuthContext>(AuthContext)
  let location = useLocation()
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}

export default ProtectedRoute

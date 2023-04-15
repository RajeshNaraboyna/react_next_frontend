import React from 'react'
import { useContext, useDebugValue } from 'react'
import AuthContext from '../context/AuthProvider'

const useAuth = () => {
  const { auth } = useContext<any>(AuthContext)
  useDebugValue(auth, (auth) => (auth?.user ? 'Logged In' : 'Logged Out'))
  return useContext<any>(AuthContext)
}

export default useAuth

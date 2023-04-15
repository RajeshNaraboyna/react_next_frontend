import React, { createContext, useState } from 'react'

export interface IUserAuth {
  user?: any
  email?: string
  token?: string
}

export interface IAuthContext {
  auth?: any
  setAuth?: any
}

const AuthContext = createContext<IAuthContext>({})

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState<IUserAuth>({})
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

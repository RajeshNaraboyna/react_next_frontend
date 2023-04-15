import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// import { useNavigate } from 'react-router-dom'
// import auth0 from 'auth0-js'
// import useAuth from '../../../auth/useAuth'
import { getConfig } from '../../utils/config'

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export const useCustomHook = () => {
  const config = getConfig()
  const domain = config.domain
  // const { setAuth } = useAuth()
  const { user, isAuthenticated, loginWithRedirect, getAccessTokenSilently } =
    useAuth0()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [enableLogin, setEnableLogin] = useState(false)
  // let navigate = useNavigate()

  let getToken = async () => {
    let token = await getAccessTokenSilently({})
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('user', JSON.stringify(user))
    window.localStorage.setItem('email', user?.email as string)
    // setAuth({ user, email: user?.email, token: token })
    // navigate('/home')
  }

  const getUserMetadata = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: 'read:current_user',
      })
      window.localStorage.setItem('token', accessToken)
      window.localStorage.setItem('user', JSON.stringify(user))
      window.localStorage.setItem('email', user?.email as string)
      // setAuth({ user, email: user?.email, token: accessToken })
      // navigate('/home')
    } catch (e: any) {
      console.error(e.message)
    }
  }
  useEffect(() => {
    getUserMetadata()
  }, [getAccessTokenSilently, user?.sub])

  useEffect(() => {
    if (isAuthenticated) {
      // upsert user data into DB
      getToken()
    }
  }, [isAuthenticated])

  const handleLogin = async (data: any) => {
    // var auth0Gen = new auth0.WebAuth({
    //   domain: domain,
    //   clientID: config.clientId,
    // })
    // auth0Gen.client.login(
    //   {
    //     realm: 'Username-Password-Authentication', //connection name or HRD domain
    //     username: email,
    //     password: password,
    //     audience: `https://${domain}/api/v2/`,
    //     scope: process.env.REACT_APP_SCOPE,
    //   },
    //   (err, authResult) => {
    //     window.localStorage.setItem('token', authResult.accessToken)
    //     auth0Gen.client.userInfo(authResult.accessToken, (err, user) => {
    //       window.localStorage.setItem('user', JSON.stringify(user))
    //       window.localStorage.setItem('email', user?.email as string)
    //       setAuth({ user, email: user?.email, token: authResult.accessToken })
    //       navigate('/home')
    //     })
    //   }
    // )
  }

  const onGoogleLoginClick = () => {
    loginWithRedirect({})
  }

  const togglePageType = () => {
    // navigate('/signup')
  }

  const onChangePassword = (value: string) => {
    setPassword(value)
  }

  const onChangeEmail = (value: string) => {
    setEmail(value)
  }

  useEffect(() => {
    setEnableLogin(false)
    setEnableLogin(email && password && emailRegex.test(email) ? true : false)
  }, [email, password])

  return {
    email,
    onChangeEmail,
    onChangePassword,
    password,
    enableLogin,
    onGoogleLoginClick,
    togglePageType,
    handleLogin,
  }
}

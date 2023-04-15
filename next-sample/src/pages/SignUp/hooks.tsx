import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export const useCustomHook = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const [signUpEmail, setSignUpEmail] = useState('')
  const [enableNext, setEnableNext] = useState(false)

  let navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/home')
  }, [isAuthenticated])

  const onGoogleLoginClick = () => {
    loginWithRedirect()
  }

  const togglePageType = () => {
    navigate('/login')
  }

  const onChangeSignUpEmail = (value: string) => {
    setSignUpEmail(value)
  }

  const onNextSignUpClick = () => {
    navigate('/registration', { state: { email: signUpEmail } })
  }

  useEffect(() => {
    setEnableNext(false)
    setEnableNext(signUpEmail && emailRegex.test(signUpEmail) ? true : false)
  }, [signUpEmail])

  return {
    signUpEmail,
    onChangeSignUpEmail,
    enableNext,
    onNextSignUpClick,
    onGoogleLoginClick,
    togglePageType,
  }
}

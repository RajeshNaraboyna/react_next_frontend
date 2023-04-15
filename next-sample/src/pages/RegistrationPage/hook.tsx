import { useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { StepData } from '../../../utils/types'
import AccountTypeStepper from '../../organisms/AccountTypeStepper'
import CountryDrop from '../../organisms/CountryStepper'
import PasswordField from '../../organisms/PasswordField'
import TwoFactAuthStepper from '../../organisms/TwoFactAuthStepper'
import auth0 from 'auth0-js'
import { getConfig } from '../../../utils/config'
import useAuth from '../../../auth/useAuth'

const config = getConfig()
interface EmailLocationState {
  email: string
}

export const useCustomHook = () => {
  const { setAuth } = useAuth()
  const location = useLocation()
  let { email: email1 } = location.state as EmailLocationState
  const [emailSt] = useState(email1 ? email1 : '')
  const [activeTab, setActiveTab] = useState(1)
  const [accountType, setAccountType] = useState<string>('')
  const [countryRegistration, setCountryRegistration] = useState<string>('')
  const [mobileNumber, setMobileNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  let navigate = useNavigate()

  const handleContinueClick = useCallback(() => {
    setActiveTab(activeTab + 1)
  }, [activeTab])
  const handleBackClick = useCallback(() => {
    setActiveTab(activeTab - 1)
  }, [activeTab])

  const handleAccountTypeStepperTabContinue = useCallback(
    (arg: string) => {
      setAccountType(arg)
      handleContinueClick()
    },
    [accountType, activeTab]
  )
  const handleAccountTypeStepperTabBack = () => {
    navigate('/signup')
  }

  const handleCountryStepperTabContinue = useCallback(
    (arg: string) => {
      setCountryRegistration(arg)
      handleContinueClick()
    },
    [countryRegistration, activeTab]
  )

  const handleTwoFactAuthStepperTabContinue = useCallback(
    (arg: string) => {
      setMobileNumber(arg)
      handleContinueClick()
    },
    [mobileNumber, activeTab]
  )

  const handlePasswordStepperTabContinue = useCallback(
    (arg: string) => {
      setPassword(arg)
      var auth0Gen = new auth0.WebAuth({
        domain: config.domain,
        clientID: config.clientId,
      })
      auth0Gen.signupAndAuthorize(
        {
          connection: 'Username-Password-Authentication',
          email: emailSt,
          password: arg,
        },
        (err, authResult) => {
          window.localStorage.setItem('token', authResult.accessToken)
          auth0Gen.client.userInfo(authResult.accessToken, (err, user) => {
            window.localStorage.setItem('user', JSON.stringify(user))
            window.localStorage.setItem('email', user?.email as string)
            setAuth({
              user,
              email: user?.email,
              token: authResult.accessToken,
            })
            navigate('/business_registration', {
              state: {
                email: emailSt,
                accountType: accountType,
                countryRegistration: countryRegistration,
                mobileNumber: mobileNumber,
                password: arg,
              },
            })
          })
        }
      )
    },
    [password, activeTab]
  )

  const stepperDataArray: StepData[] = [
    { label: 'Email', content: <></> },
    {
      label: 'Account type',
      content: (
        <AccountTypeStepper
          handleBackClick={handleAccountTypeStepperTabBack}
          handleClick={handleAccountTypeStepperTabContinue}
        />
      ),
    },
    {
      label: 'Country',
      content: (
        <CountryDrop
          onClickContinue={handleCountryStepperTabContinue}
          onClickBack={handleBackClick}
          value={countryRegistration}
        />
      ),
    },
    {
      label: '2-factor-authentication',
      content: (
        <TwoFactAuthStepper
          value={mobileNumber}
          onClickSubmit={handleTwoFactAuthStepperTabContinue}
          onClickBack={handleBackClick}
        />
      ),
    },
    {
      label: 'Password',
      content: (
        <PasswordField
          onClickContinue={handlePasswordStepperTabContinue}
          onClickBack={handleBackClick}
        />
      ),
    },
  ]

  return {
    activeTab,
    stepperDataArray,
  }
}

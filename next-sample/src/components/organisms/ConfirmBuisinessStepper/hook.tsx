import { useState } from 'react'
import { ForYourProps } from '.'

export const useCustomHook = (props: ForYourProps) => {
  const { onClickContinue, onClickBack } = props
  const [isInEditPage, setIsInEditPage] = useState(false)
  const [businessName, setBusinessName] = useState(props.businessName)
  const [registrationNum, setRegistrationNum] = useState(props.registrationNum)
  const [registrationAddr, setRegistrationAddr] = useState(
    props.registrationAddr
  )

  const [newBusinessName, setNewBusinessName] = useState('')
  const [newRegistrationNum, setNewRegistrationNum] = useState('')
  const [newRegistrationAddr, setNewRegistrationAddr] = useState('')

  const handleEditClick = () => {
    setNewBusinessName(businessName)
    setNewRegistrationNum(registrationNum)
    setNewRegistrationAddr(registrationAddr)
    setIsInEditPage(true)
  }
  const handleSaveClick = () => {
    setBusinessName(newBusinessName)
    setRegistrationNum(newRegistrationNum)
    setRegistrationAddr(newRegistrationAddr)
    setIsInEditPage(false)
  }
  const handleContinue = () => {
    onClickContinue(businessName, registrationNum, registrationAddr)
  }

  const handleBack = () => {
    onClickBack()
  }
  const handleCancelClick = () => {
    setIsInEditPage(false)
  }

  const changeNewBusinessName = (newVal: string) => {
    setNewBusinessName(newVal)
  }
  const changeNewRegistrationNum = (newVal: string) => {
    setNewRegistrationNum(newVal)
  }
  const changeNewRegistrationAddr = (newVal: string) => {
    setNewRegistrationAddr(newVal)
  }

  return {
    isInEditPage,
    handleCancelClick,
    handleContinue,
    handleBack,
    handleSaveClick,
    handleEditClick,
    businessName,
    registrationNum,
    registrationAddr,
    newBusinessName,
    newRegistrationNum,
    newRegistrationAddr,
    changeNewBusinessName,
    changeNewRegistrationNum,
    changeNewRegistrationAddr,
  }
}

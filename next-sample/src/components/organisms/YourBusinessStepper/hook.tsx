import { useState } from 'react'
import { CompanyData, YourBusinessProps } from '.'

export const useCustomHook = (props: YourBusinessProps) => {
  const { options } = props
  const [businessName, setBusinessName] = useState('')
  const [registrationNum, setRegistrationNum] = useState('')
  const [registrationAddr, setRegistrationAddr] = useState('')

  const [isCompanySelected, setIsCompanySelected] = useState(false)
  const [showConfirmTradingAddr, setShowConfirmTradingAddr] = useState(false)

  const onConfirmTradingAddr = (addressesList: string[], address: string) => {
    props.onClickConfirm(
      businessName,
      registrationNum,
      registrationAddr,
      addressesList,
      address
    )
  }

  const onSelectBusinessName = (value: string) => {
    setBusinessName(value)
    let companySelected = options.find(
      (comapny: CompanyData) => comapny.name === value
    )
    if (companySelected) {
      setRegistrationNum(companySelected.regNum)
      setRegistrationAddr(companySelected.addr)
      setIsCompanySelected(true)
    }
  }

  const clickBack = () => {
    setBusinessName('')
    setRegistrationNum('')
    setRegistrationAddr('')
    setIsCompanySelected(false)
  }

  const handleConfirmContinue = (
    confirmBusinessName: string,
    confirmRegNumber: string,
    confirmAddress: string
  ) => {
    setShowConfirmTradingAddr(true)
    setRegistrationAddr(confirmAddress)
    setBusinessName(confirmBusinessName)
    setRegistrationNum(confirmRegNumber)
  }

  return {
    showConfirmTradingAddr,
    registrationAddr,
    isCompanySelected,
    onSelectBusinessName,
    businessName,
    registrationNum,
    clickBack,
    handleConfirmContinue,
    onConfirmTradingAddr,
  }
}

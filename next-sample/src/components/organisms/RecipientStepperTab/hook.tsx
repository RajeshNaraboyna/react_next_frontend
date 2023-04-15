import { useEffect, useState } from 'react'
import { RecipientStepperProp } from '.'
import { getPersonOrRecipientDetails } from '../../../apis/library'
import { RecipientDetails } from '../../../utils/types'

export const useCustomHook = (props: RecipientStepperProp) => {
  const [email, setEmail] = useState(props.recipientData.email)
  const [firstName, setFirstName] = useState(props.recipientData.firstName)
  const [lastName, setLastName] = useState(props.recipientData.lastName)
  const [accountNumber, setAccountNumber] = useState<number>(
    props.recipientData.accountNumber as number
  )
  const [indianFinancialCode, setIndianFinancialCode] = useState(
    props.recipientData.ifscCode
  )
  const [accountTypeSelected, setAccountTypeSelected] = useState(
    props.recipientData.accountType
  )
  const [buttonEnable, setButtonEnable] = useState(false)
  const [checkBox, setCheckBox] = useState(false)

  useEffect(() => {
    if (checkBox) {
      const getReceipient = async () => {
        try {
          const recipient = await getPersonOrRecipientDetails(email)
          if (recipient) {
            setFirstName(recipient.first_name)
            setLastName(recipient.last_name)
            setAccountNumber(recipient.account_number)
            setAccountTypeSelected(recipient.account_type)
            setIndianFinancialCode(recipient.ifsc_code)
          }
        } catch (error) {
          console.error(error)
        }
      }
      getReceipient()
    }
  }, [checkBox])

  const onEmailChange = (value: any) => {
    setEmail(value)
  }
  const onFirstNameChange = (value: any) => {
    setFirstName(value)
  }
  const onLastNameChange = (value: any) => {
    setLastName(value)
  }
  const onAccountNumberChange = (value: any) => {
    setAccountNumber(value)
  }
  const onDropChange = (value: any) => {
    setAccountTypeSelected(value)
  }
  const onIndianFinancialCodeChange = (value: any) => {
    setIndianFinancialCode(value)
  }

  const onContinueHandler = () => {
    const newRecipientData: RecipientDetails = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      accountNumber: accountNumber,
      ifscCode: indianFinancialCode,
      accountType: accountTypeSelected,
    }
    props.onContinue(newRecipientData)
  }

  const enableBunttonHandler = () => {
    if (
      firstName &&
      lastName &&
      email &&
      accountNumber &&
      indianFinancialCode &&
      accountTypeSelected
    ) {
      setButtonEnable(true)
    } else {
      setButtonEnable(false)
    }
  }

  useEffect(
    function () {
      enableBunttonHandler()
    },
    [
      firstName,
      lastName,
      email,
      accountNumber,
      indianFinancialCode,
      accountTypeSelected,
    ]
  )
  return {
    email,
    onEmailChange,
    accountNumber,
    onAccountNumberChange,
    firstName,
    onFirstNameChange,
    lastName,
    onLastNameChange,
    indianFinancialCode,
    onIndianFinancialCodeChange,
    onDropChange,
    onContinueHandler,
    buttonEnable,
    checkBox,
    setCheckBox,
    accountTypeSelected,
  }
}

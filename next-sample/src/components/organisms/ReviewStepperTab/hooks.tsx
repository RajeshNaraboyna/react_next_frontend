import { useCallback, useState } from 'react'
import { ReviewStepperTabProps } from '.'
import { amountStepperConsts } from '../../../utils/constants'
import { RecipientDetails, TransferDetails } from '../../../utils/types'

export const useCustomHook = (props: ReviewStepperTabProps) => {
  const { accountDetails, transferDetails } = props
  const [currentAccountDetails, setAccountDetails] = useState(accountDetails)
  const [currentName, setName] = useState(
    accountDetails.firstName + ' ' + accountDetails.lastName
  )
  const [currentEmail, setEmail] = useState(accountDetails.email)
  const [currentAccNumber, setAccNumber] = useState(
    accountDetails.accountNumber
  )
  const [currentAccType, setAccType] = useState(accountDetails.accountType)
  const [isEditTransfer, setEditTransfer] = useState(false)
  const [isEditRecipient, setEditRecipient] = useState(false)
  const [currentTransferDetails, setTransferDetails] = useState(transferDetails)
  const [currentAmount, setAmount] = useState(transferDetails.senderAmountBeforeDeduction)
  const [currentFee, setFee] = useState(transferDetails.fee)
  const [currentRate, setRate] = useState(transferDetails.rate)
  const [currentConvert, setConvert] = useState(transferDetails.senderAmountAfterDeduction)
  const [currentReceipientValue, setReceipientValue] = useState(
    transferDetails.receiverAmountAfterDeduction
  )
  const handleEditClick = () => {
    setEditRecipient(false)
    setEditTransfer(true)
  }
  const handleEditRecipient = () => {
    setEditTransfer(false)
    setEditRecipient(true)
  }
  const handleCancelAccount = () => {
    setName(
      currentAccountDetails.firstName + ' ' + currentAccountDetails.lastName
    )
    setEmail(currentAccountDetails.email)
    setAccNumber(currentAccountDetails.accountNumber)
    setAccType(currentAccountDetails.accountType)
    setEditTransfer(false)
    setEditRecipient(false)
  }
  const handleCancelTransaction = () => {
    setAmount(currentTransferDetails.senderAmountBeforeDeduction)
    setConvert(currentTransferDetails.senderAmountAfterDeduction)
    setFee(currentTransferDetails.fee)
    setRate(currentTransferDetails.rate)
    setEditTransfer(false)
    setEditRecipient(false)
  }
  const handleSaveAccount = () => {
    const newRecipientDetails: RecipientDetails = {
      firstName: currentName.split(' ')[0],
      lastName: currentName.split(' ')[1],
      email: currentEmail,
      accountNumber: currentAccNumber,
      accountType: currentAccType,
      ifscCode: accountDetails.ifscCode,
    }
    setAccountDetails(newRecipientDetails)
    setEditTransfer(false)
    setEditRecipient(false)
  }
  const handleSaveTransaction = () => {
    const newTransferDetails: TransferDetails = {
      senderAmountBeforeDeduction: currentAmount,
      receiverAmountAfterDeduction: currentReceipientValue,
      fee: currentFee,
      senderAmountAfterDeduction: currentConvert,
      sendingCurrency: transferDetails.sendingCurrency,
      recipientCurrency: transferDetails.recipientCurrency,
      rate: currentRate,
    }
    setTransferDetails(newTransferDetails)
    setEditTransfer(false)
    setEditRecipient(false)
  }
  const calculateReceipientAmount = (
    currentSenderCountry: any,
    currentReceipientCountry: any,
    senderCurrencyValue: number
  ) => {
    const transaction_fee = (3.69 / 100) * Number(senderCurrencyValue)
    const total_amount = Number(senderCurrencyValue) - transaction_fee
    let guaranteed_rate = transferDetails.rate
    const receipient_value = (guaranteed_rate * total_amount).toFixed(2)
    return { guaranteed_rate, transaction_fee, total_amount, receipient_value }
  }
  const handleAmountChange = (amount: string) => {
    setAmount(parseFloat(amount))
    const currentSenderCountry = amountStepperConsts.countryInfo.filter(
      (country) => {
        return country.currency === transferDetails.sendingCurrency
      }
    )[0]
    const currentReceipientCountry = amountStepperConsts.countryInfo.filter(
      (country) => {
        return country.currency === transferDetails.recipientCurrency
      }
    )[0]
    const { guaranteed_rate, transaction_fee, total_amount, receipient_value } =
      calculateReceipientAmount(
        currentSenderCountry,
        currentReceipientCountry,
        parseFloat(amount)
      )
    setConvert(parseFloat(total_amount.toFixed(2)))
    setFee(parseFloat(transaction_fee.toFixed(2)))
    setRate(parseFloat(guaranteed_rate.toFixed(4)))
    setReceipientValue(parseFloat(receipient_value))
  }
  const handleTextChange = (value: string) => {
    //empty function for text fiels as onChange is mandatory
  }
  const getCancelHandler = (
    isEditRecipient: boolean,
    isEditTransfer: boolean
  ) => {
    if (isEditRecipient) return handleCancelAccount
    if (isEditTransfer) return handleCancelTransaction
    return ''
  }
  const getSaveHandler = (
    isEditRecipient: boolean,
    isEditTransfer: boolean
  ) => {
    if (isEditRecipient) return handleSaveAccount
    if (isEditTransfer) return handleSaveTransaction
    return ''
  }
  const handleContinueClick = useCallback(() => {
    props.onContinueClick(currentAccountDetails, currentTransferDetails)
  },[currentAccountDetails, currentTransferDetails])

  const handleAccountNumberChange = useCallback((arg:string)=>{
    setAccNumber(parseInt(arg))
  },[currentAccNumber])

  return {
    currentAccountDetails,
    currentName,
    currentEmail,
    currentAccNumber,
    currentAccType,
    isEditTransfer,
    isEditRecipient,
    currentAmount,
    currentTransferDetails,
    currentFee,
    currentRate,
    currentConvert,
    setName,
    setEmail,
    setAccNumber,
    setAccType,
    handleEditClick,
    handleEditRecipient,
    handleAmountChange,
    handleTextChange,
    getCancelHandler,
    getSaveHandler,
    handleContinueClick,
    handleAccountNumberChange
  }
}

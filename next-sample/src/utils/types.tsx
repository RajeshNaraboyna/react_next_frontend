export interface OwnerDirectorDetails {
  firstName: string
  lastName: string
  dateOfBirth: Date | null
  countryOfResidence: string | null
}

export interface RecipientDetails {
  email: string
  firstName: string
  lastName: string
  ifscCode: string
  accountNumber: number | null
  accountType: string
}

export interface TransactionTimeDetailsRow {
  content: string
  statusInTimeline: 'pending' | 'completed' | 'inProgress' | ''
  timeString: string
}

export interface TransactionDetails {
  transactionStatus: 'inProgress' | 'completed' | 'canceled'
  transactionTimeStamps: Date[]
  sendingCurrency: string
  receivingCurrency: string
  senderName: string
  receiverName: string
  transactionFee: number
  sendingMoney: number
  receivingMoney: number
  guaranteedRate: number
  transactionRefId: number
}

export interface TransferDetails {
  senderAmountBeforeDeduction: number | null
  receiverAmountAfterDeduction: number | null
  fee: number
  senderAmountAfterDeduction: number
  sendingCurrency: string
  recipientCurrency: string
  rate: number
}

export interface StepData {
  label: string
  content: JSX.Element
}


export interface Money {
  value: string
  currencyCode: string
}

export interface AmountStepperData {
  senderMoney: Money
  receipientMoney: Money
  guaranteedRate: string
}

export interface StepDataBusiness {
  label: string
  content: JSX.Element
}

export interface CurrencyDetails {
  symbol: string
  worth_in_usd: number
  country: string
}


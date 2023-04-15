import axios from 'axios'
import moment from 'moment'
import { BusinessActivityData } from '../components/organisms/BusinessActivityStepper'
import { newPerson } from '../components/organisms/ConfirmOwnerConfirmDirector/hook'
import { YourDetailsData } from '../components/organisms/YourDetailsStepper'
import { countryOptions, sampleTransactionDetails } from '../utils/constants'
import {
  OwnerDirectorDetails,
  RecipientDetails,
  TransactionDetails,
  TransferDetails,
} from '../utils/types'

const baseURL = process.env.REACT_APP_BASE_URL

export const addAccount = async (
  accountDetails: {
    email: string
    accountType: string
    countryRegistration: string
    mobileNumber: string
    password: string
  },
  yourBusinessData: {
    businessName: string
    registrationNum: string
    registrationAddr: string
    addressesList: string[]
    address: string
  },
  yourBusinessActivityData: BusinessActivityData,
  yourDetailsData: YourDetailsData
) => {
  const accountId = await axios
    .get(baseURL + 'account')
    .then((data) => data.data.length + 1)
    .catch((error) => {
      throw error
    })
  await axios
    .post(baseURL + 'account', {
      id: accountId,
      email: accountDetails.email,
      account_type: accountDetails.accountType,
      country_of_registration: countryOptions.find(
        (option) => accountDetails.countryRegistration === option.code
      )?.label,
      mobile_number: accountDetails.mobileNumber,
      password: accountDetails.password,
    })
    .catch((error) => {
      throw error
    })
  const personId = await axios
    .get(baseURL + 'person')
    .then((data) => data.data.length + 1)
    .catch((error) => {
      throw error
    })
  await axios
    .post(baseURL + 'person', {
      id: personId,
      first_name: yourDetailsData.firstName,
      last_name: yourDetailsData.lastName,
      date_of_birth: yourDetailsData.enteredDate,
      country_of_residence: yourDetailsData.countrySelected,
      home_address: yourDetailsData.homeAddress,
      city: yourDetailsData.city,
      postal_code: yourDetailsData.pincode,
    })
    .catch((error) => {
      throw error
    })

  const businessId = await axios
    .get(baseURL + 'business')
    .then((data) => data.data.length + 1)
    .catch((error) => {
      throw error
    })
  await axios
    .post(baseURL + 'business', {
      id: businessId,
      account_id: accountId,
      name: yourBusinessData.businessName,
      registeredNumber: yourBusinessData.registrationNum,
      registered_address: yourBusinessData.registrationAddr,
      trading_address: yourBusinessData.addressesList,
      category: yourBusinessActivityData.category,
      sub_category: yourBusinessActivityData.subcategory,
      size_of_business: yourBusinessActivityData.businessSize,
    })
    .catch((error) => {
      throw error
    })

  const businessPersonId = await axios
    .get(baseURL + 'business_person')
    .then((data) => data.data.length + 1)
    .catch((error) => {
      throw error
    })

  await axios
    .post(baseURL + 'business_person', {
      id: businessPersonId,
      business_id: businessId,
      person_id: personId,
      role: 'M',
    })
    .catch((error) => {
      throw error
    })
}

export const getCurrencyString = async (id: number) => {
  return await axios
    .get(baseURL + `currency?id=${id}`)
    .then((data) => {
      return data.data[0].symbol
    })
    .catch((error) => {
      throw error
    })
}

export const getCurrencyId = async (symbol: string) => {
  return await axios
    .get(baseURL + `currency?symbol=${symbol}`)
    .then((data) => {
      return data.data[0].id
    })
    .catch((error) => {
      throw error
    })
}

export const getPersonOrRecipientName = async (
  id: number,
  isSender: boolean
) => {
  return await axios
    .get(baseURL + `${isSender ? 'person' : 'recipient'}?id=${id}`)
    .then((data) => data.data[0].first_name + ' ' + data.data[0].last_name)
    .catch((error) => {
      throw error
    })
}

export const getAccountInformation = async (userMail: string) => {
  return await axios
    .get(baseURL + `account?email=${userMail}`)
    .then((data) => data.data[0])
    .catch((error) => {
      throw error
    })
}

export const getBusinessInformation = async (account_id: string) => {
  return await axios
    .get(baseURL + `business?account_id=${account_id}`)
    .then((data) => data.data[0])
    .catch((error) => {
      throw error
    })
}

export const getPersonsInBusiness = async (business_id: string) => {
  return await axios
    .get(baseURL + `business_person?business_id=${business_id}`)
    .then((data) => data.data)
    .catch((error) => {
      throw error
    })
}

export const getPersons = async () => {
  return await axios
    .get(baseURL + `person`)
    .then((data) => data.data)
    .catch((error) => {
      throw error
    })
}

export const getTransactionsForAccount = async (userMail: string) => {
  let transactionsList: TransactionDetails[] = new Array()
  try {
    const userInfo = await getAccountInformation(userMail)
    const userTransactions = await axios
      .get(baseURL + `transaction?account_id=${userInfo.id}`)
    userTransactions.data.map((data: any) => {
      let transaction: TransactionDetails = { ...sampleTransactionDetails }
      transaction.transactionStatus = data.status
      transaction.transactionTimeStamps[0] = new Date(
        data.timestamps.transaction_initiation
      )
      transaction.transactionTimeStamps[1] = new Date(
        data.timestamps.receiving_money
      )
      transaction.transactionTimeStamps[2] = new Date(
        data.timestamps.processing_money
      )
      transaction.transactionTimeStamps[3] = new Date(data.timestamps.pay_out)
      transaction.transactionTimeStamps[4] = new Date(
        data.timestamps.receiver_confirmation
      )
      getCurrencyString(data.sending_currency_id)
        .then((data: string) => (transaction.sendingCurrency = data))
      getCurrencyString(data.receiver_currency_id)
        .then((data: string) => (transaction.receivingCurrency = data))
      getPersonOrRecipientName(data.sender_id, true)
        .then((data: string) => (transaction.senderName = data))
      getPersonOrRecipientName(data.sender_id, false)
        .then((data: string) => (transaction.receiverName = data))
      transaction.transactionFee = data.transaction_fee
      transaction.sendingMoney = data.sending_amount
      transaction.receivingMoney = data.receiving_amount
      transaction.guaranteedRate = data.guaranteed_rate
      transaction.transactionRefId = data.reference_number
      transactionsList.push(transaction)
    })
  } catch (error) {
    console.error(error)
    throw error
  }
  return transactionsList
}

export const getDirectorsAndOwner = async (userMail: string) => {
  let directorsList: OwnerDirectorDetails[] = new Array()
  let ownersList: OwnerDirectorDetails[] = new Array()
  try {
    const account = await getAccountInformation(userMail)
    const business = await getBusinessInformation(account.id)
    const businessPersons = await getPersonsInBusiness(business.id)
    const persons = await getPersons()
    businessPersons.map((data: any) => {
      let person: OwnerDirectorDetails = { ...newPerson }
      let fetchedPerson = persons.find(
        (person: any) => person.id === data.person_id
      )
      person.firstName = fetchedPerson.first_name
      person.lastName = fetchedPerson.last_name
      person.dateOfBirth = new Date(fetchedPerson.date_of_birth)
      const countryOption = countryOptions.find(
        (country) => country.label === fetchedPerson.country_of_residence
      )
      person.countryOfResidence = countryOption?.code as string
      if (data.role === 'Director') {
        directorsList.push(person)
      } else if (data.role === 'Owner') {
        ownersList.push(person)
      }
    })
  } catch (e) {
    console.error(e)
  } 
  return { directorsList, ownersList }
}

export const updateTransactionDetails = async (
  transactionId: number,
  data: any
) => {
  const transaction = await axios
    .get(baseURL + `transaction/?reference_number=${transactionId}`)
    .then((data) => data.data[0])
    .catch((error) => {
      throw error
    })
  return await axios
    .patch(baseURL + `transaction/${transaction.id}`, data)
    .catch((error) => {
      throw error
    })
}

export const getBankDetailsForAccount = async (userMail: string) => {
  return getAccountInformation(userMail).then(async (data: any) => {
    return await axios
      .get(baseURL + `bank_account?account_id=${data.id}`)
      .then((data) => {
        let accountList = new Array()
        data.data.map((data: any, index: number) => {
          accountList.push({
            code: index + 1,
            label: data.account_holder_name ? data.account_holder_name : 'NA',
            cardLabel: data.account_number
              .toString()
              .substr(data.account_number.toString().length - 4),
          })
        })
        return accountList
      })
      .catch((error) => {
        throw error
      })
  })
}

export const getPersonOrRecipientDetails = async (email: string) => {
  return await axios
    .get(baseURL + `recipient/?email=${email}`)
    .then((data) => data.data[0])
    .catch((error) => {
      throw error
    })
}

export const getCardsForAccount = async (userMail: string) => {
  return getAccountInformation(userMail).then(async (data: any) => {
    return await axios
      .get(baseURL + `cards?account_id=${data.id}`)
      .then((data) => {
        let cardsList = new Array()
        data.data.map((data: any, index: number) => {
          cardsList.push({
            exp_date: data.expiry_date,
            card_number: data.card_number,
          })
        })
        return cardsList
      })
      .catch((error) => {
        throw error
      })
  })
}

export const addTransaction = async (
  recipientData: RecipientDetails,
  transferDetails: TransferDetails,
  purpose: string,
  email: string
) => {
  try {
    const transactionId = await axios
      .get(baseURL + 'transaction')
      .then((data) => data.data.length + 1)
      .catch((error) => {
        throw error
      })
    const account_id = await getAccountInformation(email).then(data=>data.id).catch((error) => {
      throw error
    })
    const recipient: any = await getPersonOrRecipientDetails(
      recipientData.email
    ).catch((error) => {
      throw error
    })
    const sending_currency_id: number = await getCurrencyId(
      transferDetails.sendingCurrency
    ).catch((error) => {
      throw error
    })
    const receiver_currency_id: number = await getCurrencyId(
      transferDetails.recipientCurrency
    ).catch((error) => {
      throw error
    })
    const timestamps = {
      transaction_initiation: moment().toDate(),
      receiving_money: moment().add(1, 'm').toDate(),
      processing_money: moment().add(7, 'm').toDate(),
      pay_out: moment().add(317, 'm').toDate(),
      receiver_confirmation: moment().add(677, 'm').toDate(),
    }
    await axios
      .post(baseURL + 'transaction', {
        id: transactionId,
        account_id: account_id,
        sender_id: 1,
        recipient_id: recipient.id,
        sending_currency_id: sending_currency_id,
        receiver_currency_id: receiver_currency_id,
        status: 'inProgress',
        sending_amount: transferDetails.senderAmountBeforeDeduction,
        receiving_amount: transferDetails.receiverAmountAfterDeduction,
        converted_amount: transferDetails.senderAmountAfterDeduction,
        guaranteed_rate: transferDetails.rate,
        transaction_fee: transferDetails.fee,
        reason: purpose,
        timestamps: timestamps,
        reference_number: Math.floor(100000 + Math.random() * 900000),
      })
      .catch((error) => {
        throw error
      })
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const getCurrencyDetails = async () => {
  try {
    return await axios.get(baseURL + 'currency').then((data) => {
      return data.data.map((currencyElement: any) => {
        return {
          symbol: currencyElement.symbol,
          worth_in_usd: currencyElement.worth_in_usd,
          country: currencyElement.country,
        }
      })
    })
  } catch (error) {
    console.error(error)
  }
}

import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import {
  addAccount,
  getCurrencyString,
  getCurrencyId,
  getPersons,
  getPersonOrRecipientName,
  getPersonOrRecipientDetails,
  getPersonsInBusiness,
  getAccountInformation,
  getBusinessInformation,
  getTransactionsForAccount,
  getDirectorsAndOwner,
  updateTransactionDetails,
  getBankDetailsForAccount,
  getCardsForAccount,
  addTransaction,
  getCurrencyDetails,
} from './library'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const accounts = {
  data: [
    {
      id: 1,
      email: 'ross.chandler@gmail.com',
      account_type: 'B',
      country_of_registration: 'United Kingdom',
      mobile_number: '+44 020 7947 6330',
      password: 'password@123',
    },
  ],
}

const persons = {
  data: [
    {
      id: 1,
      first_name: 'Ross',
      last_name: 'Gener',
      date_of_birth: '09/19/1998',
      country_of_residence: 'United Kingdom',
      home_address: '43 Bishopthorpe Road',
      city: 'Pencoed',
      postal_code: 'CF357R',
    },
  ],
}

const businesses = {
  data: [
    {
      id: 1,
      account_id: 1,
      name: 'Zentech Solutions Pvt Ltd',
      registeredNumber: '2020ZEN5367GJ',
      registered_address:
        '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
      trading_address: [
        '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
        '3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003',
      ],
      category: 'Real estate or construction',
      sub_category: 'Real estate sale, purchase and management',
      size_of_business: '50-100',
    },
  ],
}

const business_persons = {
  data: [
    {
      id: 1,
      business_id: 1,
      person_id: 1,
      role: 'Manger',
    },
    {
      id: 2,
      business_id: 1,
      person_id: 2,
      role: 'Director',
    },
    {
      id: 3,
      business_id: 1,
      person_id: 3,
      role: 'Owner',
    },
  ],
}

const currencies = {
  data: [
    {
      id: 1,
      symbol: 'GBP',
      worth_in_usd: 1.217,
      country: 'United Kingdom',
    },
  ],
}

const transactions = {
  data: [
    {
      id: 1,
      reference_number: 123456978,
      account_id: 1,
      sender_id: 1,
      recipient_id: 1,
      sending_currency_id: 1,
      receiver_currency_id: 2,
      status: 'completed',
      sending_amount: 100,
      receiving_amount: 111.67,
      converted_amount: 96.39,
      guaranteed_rate: 1.1586,
      transaction_fee: 3.69,
      reason: 'Paying for goods or services abroad',
      timestamps: {
        transaction_initiation:
          'Thu Jan 05 2023 18:44:19 GMT+0530 (India Standard Time)',
        receiving_money:
          'Thu Jan 05 2023 18:46:19 GMT+0530 (India Standard Time)',
        processing_money:
          'Thu Jan 05 2023 18:50:19 GMT+0530 (India Standard Time)',
        pay_out: 'Thu Jan 05 2023 22:44:19 GMT+0530 (India Standard Time)',
        receiver_confirmation:
          'Thu Jan 05 2023 23:44:19 GMT+0530 (India Standard Time)',
      },
    },
  ],
}

const cards = {
  data: [
    {
      id: 1,
      account_id: 1,
      card_type: 'C',
      card_number: '123456789',
      expiry_date: '31/12/2024',
    },
    {
      id: 2,
      account_id: 1,
      card_type: 'D',
      card_number: '123456789',
      expiry_date: '31/12/2025',
    },
  ],
}

const bank_accounts = {
  data: [
    {
      id: 1,
      account_id: 1,
      account_number: 56789456123,
      routing_number: '56745634F4',
      bank_name: 'Lloyds',
      account_holder_name: 'Ross Chandler',
    },
  ],
}

describe('adding account', () => {
  beforeEach(() => jest.clearAllMocks())
  it('adding Account', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.post.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(persons)
    mockedAxios.post.mockResolvedValueOnce(persons)
    mockedAxios.get.mockResolvedValueOnce(businesses)
    mockedAxios.post.mockResolvedValueOnce(businesses)
    mockedAxios.get.mockResolvedValueOnce(business_persons)
    mockedAxios.post.mockResolvedValueOnce(business_persons)

    addAccount(
      {
        email: 'mario.gabriel@gmail.com',
        accountType: 'Business',
        countryRegistration: 'United Kingdom',
        mobileNumber: '+44987546123',
        password: 'Password@123',
      },
      {
        businessName: 'Zentech Technologies',
        registrationNum: 'R456T543',
        registrationAddr: 'Pencode, United Kingdom',
        addressesList: ['Pencode, United Kingdom'],
        address: 'Pencode, United Kingdom',
      },
      {
        category: 'Real Estate',
        subcategory: 'Real Estate',
        businessSize: '100-200',
      },
      {
        firstName: 'Mario',
        lastName: 'Gabriel',
        countrySelected: 'United Kingdom',
        homeAddress: 'H.No: 52856',
        city: 'Pencode, United Kingdom',
        pincode: '785236',
        enteredDate: new Date(),
      }
    )
    expect(mockedAxios.get).toBeCalledTimes(1)
    expect(mockedAxios.post).toBeCalledTimes(0)
  })
  it('error while getting account', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await addAccount(
      {
        email: 'mario.gabriel@gmail.com',
        accountType: 'Business',
        countryRegistration: 'United Kingdom',
        mobileNumber: '+44987546123',
        password: 'Password@123',
      },
      {
        businessName: 'Zentech Technologies',
        registrationNum: 'R456T543',
        registrationAddr: 'Pencode, United Kingdom',
        addressesList: ['Pencode, United Kingdom'],
        address: 'Pencode, United Kingdom',
      },
      {
        category: 'Real Estate',
        subcategory: 'Real Estate',
        businessSize: '100-200',
      },
      {
        firstName: 'Mario',
        lastName: 'Gabriel',
        countrySelected: 'United Kingdom',
        homeAddress: 'H.No: 52856',
        city: 'Pencode, United Kingdom',
        pincode: '785236',
        enteredDate: new Date(),
      }
    ).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('error while posting account', async () => {
    mockedAxios.get.mockResolvedValue(accounts)
    mockedAxios.post.mockRejectedValueOnce('data is not getting')
    let value
    await addAccount(
      {
        email: 'mario.gabriel@gmail.com',
        accountType: 'Business',
        countryRegistration: 'United Kingdom',
        mobileNumber: '+44987546123',
        password: 'Password@123',
      },
      {
        businessName: 'Zentech Technologies',
        registrationNum: 'R456T543',
        registrationAddr: 'Pencode, United Kingdom',
        addressesList: ['Pencode, United Kingdom'],
        address: 'Pencode, United Kingdom',
      },
      {
        category: 'Real Estate',
        subcategory: 'Real Estate',
        businessSize: '100-200',
      },
      {
        firstName: 'Mario',
        lastName: 'Gabriel',
        countrySelected: 'United Kingdom',
        homeAddress: 'H.No: 52856',
        city: 'Pencode, United Kingdom',
        pincode: '785236',
        enteredDate: new Date(),
      }
    ).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
    expect(mockedAxios.post).toBeCalledTimes(1)
  })
  it('error while posting persons', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.post.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await addAccount(
      {
        email: 'mario.gabriel@gmail.com',
        accountType: 'Business',
        countryRegistration: 'United Kingdom',
        mobileNumber: '+44987546123',
        password: 'Password@123',
      },
      {
        businessName: 'Zentech Technologies',
        registrationNum: 'R456T543',
        registrationAddr: 'Pencode, United Kingdom',
        addressesList: ['Pencode, United Kingdom'],
        address: 'Pencode, United Kingdom',
      },
      {
        category: 'Real Estate',
        subcategory: 'Real Estate',
        businessSize: '100-200',
      },
      {
        firstName: 'Mario',
        lastName: 'Gabriel',
        countrySelected: 'United Kingdom',
        homeAddress: 'H.No: 52856',
        city: 'Pencode, United Kingdom',
        pincode: '785236',
        enteredDate: new Date(),
      }
    ).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(2)
    expect(mockedAxios.post).toBeCalledTimes(1)
  })
  it('error while posting persons', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.post.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(persons)
    mockedAxios.post.mockRejectedValueOnce('data is not getting')
    let value
    await addAccount(
      {
        email: 'mario.gabriel@gmail.com',
        accountType: 'Business',
        countryRegistration: 'United Kingdom',
        mobileNumber: '+44987546123',
        password: 'Password@123',
      },
      {
        businessName: 'Zentech Technologies',
        registrationNum: 'R456T543',
        registrationAddr: 'Pencode, United Kingdom',
        addressesList: ['Pencode, United Kingdom'],
        address: 'Pencode, United Kingdom',
      },
      {
        category: 'Real Estate',
        subcategory: 'Real Estate',
        businessSize: '100-200',
      },
      {
        firstName: 'Mario',
        lastName: 'Gabriel',
        countrySelected: 'United Kingdom',
        homeAddress: 'H.No: 52856',
        city: 'Pencode, United Kingdom',
        pincode: '785236',
        enteredDate: new Date(),
      }
    ).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(2)
    expect(mockedAxios.post).toBeCalledTimes(2)
  })
  it('error while getting business', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.post.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(persons)
    mockedAxios.post.mockResolvedValueOnce(persons)
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await addAccount(
      {
        email: 'mario.gabriel@gmail.com',
        accountType: 'Business',
        countryRegistration: 'United Kingdom',
        mobileNumber: '+44987546123',
        password: 'Password@123',
      },
      {
        businessName: 'Zentech Technologies',
        registrationNum: 'R456T543',
        registrationAddr: 'Pencode, United Kingdom',
        addressesList: ['Pencode, United Kingdom'],
        address: 'Pencode, United Kingdom',
      },
      {
        category: 'Real Estate',
        subcategory: 'Real Estate',
        businessSize: '100-200',
      },
      {
        firstName: 'Mario',
        lastName: 'Gabriel',
        countrySelected: 'United Kingdom',
        homeAddress: 'H.No: 52856',
        city: 'Pencode, United Kingdom',
        pincode: '785236',
        enteredDate: new Date(),
      }
    ).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(3)
    expect(mockedAxios.post).toBeCalledTimes(2)
  })
  it('error while posting business', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.post.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(persons)
    mockedAxios.post.mockResolvedValueOnce(persons)
    mockedAxios.get.mockResolvedValueOnce(businesses)
    mockedAxios.post.mockRejectedValueOnce('data is not getting')
    let value
    await addAccount(
      {
        email: 'mario.gabriel@gmail.com',
        accountType: 'Business',
        countryRegistration: 'United Kingdom',
        mobileNumber: '+44987546123',
        password: 'Password@123',
      },
      {
        businessName: 'Zentech Technologies',
        registrationNum: 'R456T543',
        registrationAddr: 'Pencode, United Kingdom',
        addressesList: ['Pencode, United Kingdom'],
        address: 'Pencode, United Kingdom',
      },
      {
        category: 'Real Estate',
        subcategory: 'Real Estate',
        businessSize: '100-200',
      },
      {
        firstName: 'Mario',
        lastName: 'Gabriel',
        countrySelected: 'United Kingdom',
        homeAddress: 'H.No: 52856',
        city: 'Pencode, United Kingdom',
        pincode: '785236',
        enteredDate: new Date(),
      }
    ).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(3)
    expect(mockedAxios.post).toBeCalledTimes(3)
  })
})

describe('adding account test 2', () => {
  beforeEach(() => jest.clearAllMocks())
  it('error while getting business_persons', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.post.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(persons)
    mockedAxios.post.mockResolvedValueOnce(persons)
    mockedAxios.get.mockResolvedValueOnce(businesses)
    mockedAxios.post.mockResolvedValueOnce(businesses)
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await addAccount(
      {
        email: 'mario.gabriel@gmail.com',
        accountType: 'Business',
        countryRegistration: 'United Kingdom',
        mobileNumber: '+44987546123',
        password: 'Password@123',
      },
      {
        businessName: 'Zentech Technologies',
        registrationNum: 'R456T543',
        registrationAddr: 'Pencode, United Kingdom',
        addressesList: ['Pencode, United Kingdom'],
        address: 'Pencode, United Kingdom',
      },
      {
        category: 'Real Estate',
        subcategory: 'Real Estate',
        businessSize: '100-200',
      },
      {
        firstName: 'Mario',
        lastName: 'Gabriel',
        countrySelected: 'United Kingdom',
        homeAddress: 'H.No: 52856',
        city: 'Pencode, United Kingdom',
        pincode: '785236',
        enteredDate: new Date(),
      }
    ).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(4)
    expect(mockedAxios.post).toBeCalledTimes(3)
  })
  it('error while posting business_persons', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.post.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(persons)
    mockedAxios.post.mockResolvedValueOnce(persons)
    mockedAxios.get.mockResolvedValueOnce(businesses)
    mockedAxios.post.mockResolvedValueOnce(businesses)
    mockedAxios.get.mockResolvedValueOnce(business_persons)
    mockedAxios.post.mockRejectedValueOnce('data is not getting')
    let value
    await addAccount(
      {
        email: 'mario.gabriel@gmail.com',
        accountType: 'Business',
        countryRegistration: 'United Kingdom',
        mobileNumber: '+44987546123',
        password: 'Password@123',
      },
      {
        businessName: 'Zentech Technologies',
        registrationNum: 'R456T543',
        registrationAddr: 'Pencode, United Kingdom',
        addressesList: ['Pencode, United Kingdom'],
        address: 'Pencode, United Kingdom',
      },
      {
        category: 'Real Estate',
        subcategory: 'Real Estate',
        businessSize: '100-200',
      },
      {
        firstName: 'Mario',
        lastName: 'Gabriel',
        countrySelected: 'United Kingdom',
        homeAddress: 'H.No: 52856',
        city: 'Pencode, United Kingdom',
        pincode: '785236',
        enteredDate: new Date(),
      }
    ).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(4)
    expect(mockedAxios.post).toBeCalledTimes(4)
  })
})

describe('test getCurrency ', () => {
  beforeEach(() => jest.clearAllMocks())
  it('getCurrencyId', async () => {
    mockedAxios.get.mockResolvedValueOnce(currencies)
    let value
    await getCurrencyId('GBP')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getCurrencyId error', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getCurrencyId('GBP').catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getCurrencyString', async () => {
    mockedAxios.get.mockResolvedValueOnce(currencies)
    let value
    await getCurrencyString(1)
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getCurrencyString error', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getCurrencyString(1).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
})

describe('test getPersonsInBusiness getPersons  getPersonOrRecipientDetails getPersonOrRecipientName', () => {
  beforeEach(() => jest.clearAllMocks())
  it('getPersonsInBusiness', async () => {
    mockedAxios.get.mockResolvedValueOnce(persons)
    let value
    await getPersonsInBusiness('1')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getPersonsInBusiness error', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getPersonsInBusiness('1').catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getPersons', async () => {
    mockedAxios.get.mockResolvedValueOnce(persons)
    let value
    await getPersons()
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getPersons error', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getPersons().catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getPersonOrRecipientDetails', async () => {
    mockedAxios.get.mockResolvedValueOnce(persons)
    let value
    await getPersonOrRecipientDetails('1')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getPersonOrRecipientDetails error', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getPersonOrRecipientDetails('1').catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getPersonOrRecipientName isSender true', async () => {
    mockedAxios.get.mockResolvedValueOnce(persons)
    let value
    await getPersonOrRecipientName(1, true)
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getPersonOrRecipientName error isSender true', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getPersonOrRecipientName(1, true).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getPersonOrRecipientName isSender false ', async () => {
    mockedAxios.get.mockResolvedValueOnce(persons)
    let value
    await getPersonOrRecipientName(1, true)
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getPersonOrRecipientName error isSender false', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getPersonOrRecipientName(1, false).catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
})

describe('test getAccountInformation getBusinessInformation getTransactionsForAccount', () => {
  beforeEach(() => jest.clearAllMocks())
  it('getAccountInformation', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    let value
    await getAccountInformation('1')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getAccountInformation error', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getAccountInformation('1').catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getBusinessInformation', async () => {
    mockedAxios.get.mockResolvedValueOnce(businesses)
    let value
    await getBusinessInformation('1')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getBusinessInformation error', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getBusinessInformation('1').catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getTransactionsForAccount', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(transactions)
    let value
    await getTransactionsForAccount('1')
    expect(mockedAxios.get).toBeCalledTimes(6)
  })
  it('getTransactionsForAccount error', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getTransactionsForAccount('1').catch((error) => (value = error))
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
})

describe('test getCurrencyDetails getCardsForAccount getBankDetailsForAccount updateTransactionDetails', () => {
  beforeEach(() => jest.clearAllMocks())
  it('getCurrencyDetails', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    let value
    await getCurrencyDetails()
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getCurrencyDetails error', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getCurrencyDetails()
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('getCardsForAccount', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(cards)
    let value
    await getCardsForAccount('mario.gabriel@gmail.com')
    expect(mockedAxios.get).toBeCalledTimes(2)
  })
  it('getCardsForAccount error', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getCardsForAccount('mario.gabriel@gmail.com').catch(
      (error) => (value = error)
    )
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(2)
  })
  it('getBankDetailsForAccount', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(bank_accounts)
    let value
    await getBankDetailsForAccount('mario.gabriel@gmail.com')
    expect(mockedAxios.get).toBeCalledTimes(2)
  })
  it('getBankDetailsForAccount error', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await getBankDetailsForAccount('mario.gabriel@gmail.com').catch(
      (error) => (value = error)
    )
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(2)
  })
  it('updateTransactionDetails', async () => {
    mockedAxios.get.mockResolvedValueOnce(transactions)
    mockedAxios.patch.mockResolvedValueOnce(transactions.data[0])
    let value
    await updateTransactionDetails(1, { ...transactions.data[0] })
    expect(mockedAxios.get).toBeCalledTimes(1)
    expect(mockedAxios.patch).toBeCalledTimes(1)
  })
  it('updateTransactionDetails error while fetching transactions', async () => {
    mockedAxios.get.mockRejectedValueOnce('data is not getting')
    let value
    await updateTransactionDetails(1, { ...transactions.data[0] }).catch(
      (error) => (value = error)
    )
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
  })
  it('updateTransactionDetails error', async () => {
    mockedAxios.get.mockResolvedValueOnce(transactions)
    mockedAxios.patch.mockRejectedValueOnce('data is not getting')
    let value
    await updateTransactionDetails(1, { ...transactions.data[0] }).catch(
      (error) => (value = error)
    )
    expect(value).toEqual('data is not getting')
    expect(mockedAxios.get).toBeCalledTimes(1)
    expect(mockedAxios.patch).toBeCalledTimes(1)
  })
})

describe('test getDirectorsAndOwner', () => {
  beforeEach(() => jest.clearAllMocks())
  it('getDirectorsAndOwner', async () => {
    mockedAxios.get.mockResolvedValueOnce(accounts)
    mockedAxios.get.mockResolvedValueOnce(businesses)
    mockedAxios.get.mockResolvedValueOnce(business_persons)
    mockedAxios.get.mockResolvedValueOnce(persons)
    await getDirectorsAndOwner("mario.gabriel@gmail.com")
    expect(mockedAxios.get).toBeCalledTimes(4)
  })
})

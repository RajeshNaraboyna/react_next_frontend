import { useState } from 'react'
import { BusinessRegistrationProps } from '.'
import { BusinessActivityData } from '../../organisms/BusinessActivityStepper'
import { YourDetailsData } from '../../organisms/YourDetailsStepper'
import { useLocation, useNavigate } from 'react-router-dom'
import { addAccount } from '../../../apis/library'

type AccountRegistrationDetails = {
  email: string
  accountType: string
  countryRegistration: string
  mobileNumber: string
  password: string
}
const yourBusinessConfirmData = {
  businessName: '',
  registrationNum: '',
  registrationAddr: '',
  addressesList: [''],
  address: '',
}

const businessActivityConfirmData: BusinessActivityData = {
  category: '',
  subcategory: '',
  businessSize: '',
}

const yourDetailsConfirmData: YourDetailsData = {
  firstName: '',
  lastName: '',
  countrySelected: '',
  homeAddress: '',
  city: '',
  pincode: '',
  enteredDate: new Date(),
}

export const useCustomHook = (props: BusinessRegistrationProps) => {
  const location = useLocation()
  const { email, accountType, countryRegistration, mobileNumber, password } =
    location.state as AccountRegistrationDetails
  const [activeTab, setActiveTab] = useState(0)
  const [yourBusinessData, setYourBusinessData] = useState(
    yourBusinessConfirmData
  )
  const [yourBusinessActivityData, setYourBusinessActivityData] = useState(
    businessActivityConfirmData
  )
  const [yourDetailsData, setYourDetailsData] = useState(yourDetailsConfirmData)

  const yourBusinessConfirm = (
    businessName: string,
    registrationNum: string,
    registrationAddr: string,
    addressesList: string[],
    address: string
  ) => {
    yourBusinessConfirmData.businessName = businessName
    yourBusinessConfirmData.registrationNum = registrationNum
    yourBusinessConfirmData.registrationAddr = registrationAddr
    yourBusinessConfirmData.addressesList = addressesList
    yourBusinessConfirmData.address = address
    setYourBusinessData(yourBusinessConfirmData)
    setActiveTab(1)
  }
  const yourBusinessActivityContinue = (data: BusinessActivityData) => {
    setYourBusinessActivityData(data)
    setActiveTab(2)
  }
  let navigate = useNavigate()
  const yourDetailsDataContinue = async (data: YourDetailsData) => {
    setYourDetailsData(data)
    await addAccount(
      {
        email: email,
        accountType: accountType,
        countryRegistration: countryRegistration,
        mobileNumber: mobileNumber,
        password: password,
      },
      yourBusinessData,
      yourBusinessActivityData,
      data
    )
      .then(() => navigate('/home'))
      .catch((error) => {
        console.error(error)
      })
  }

  return {
    activeTab,
    yourBusinessConfirm,
    yourBusinessActivityContinue,
    yourDetailsDataContinue,
  }
}

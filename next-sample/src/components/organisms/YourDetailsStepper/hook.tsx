import { useEffect, useState } from 'react'
import { YourDetailsProps } from '.'

export const useCustomHook = (props: YourDetailsProps) => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [countrySelected, setCountrySelected] = useState()
  const [homeAddress, setHomeAddress] = useState()
  const [city, setCity] = useState()
  const [pincode, setPincode] = useState()
  const [enteredDate, setEnteredDate] = useState()
  const [buttonEnable, setButtonEnable] = useState(false)

  const onFirstNameChange = (value: any) => {
    setFirstName(value)
  }
  const onLastNameChange = (value: any) => {
    setLastName(value)
  }
  const onDropChange = (value: any) => {
    setCountrySelected(value)
  }
  const onCityChange = (value: any) => {
    setCity(value)
  }
  const onAddChange = (value: any) => {
    setHomeAddress(value)
  }
  const onPinChange = (value: any) => {
    setPincode(value)
  }
  const onDateChange = (value: any) => {
    setEnteredDate(value)
  }

  const onContinueHandler = () => {
    props.onContinue({
      firstName: firstName,
      lastName: lastName,
      countrySelected: countrySelected,
      homeAddress: homeAddress,
      city: city,
      pincode: pincode,
      enteredDate: enteredDate,
    })
  }

  const enableBunttonHandler = () => {
    if (
      firstName &&
      lastName &&
      homeAddress &&
      city &&
      pincode &&
      enteredDate
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
      countrySelected,
      homeAddress,
      city,
      pincode,
      enteredDate,
    ]
  )
  return {
    onFirstNameChange,
    onLastNameChange,
    onDateChange,
    onDropChange,
    onAddChange,
    onCityChange,
    onPinChange,
    onContinueHandler,
    buttonEnable,
  }
}

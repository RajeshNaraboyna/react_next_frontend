import { useEffect, useState } from 'react'
import { ConfirmDirectorOwnerProps, DirectorOwnerComponentProps } from '.'
import { OwnerDirectorDetails } from '../../../utils/types'

export const newPerson: OwnerDirectorDetails = {
  firstName: '',
  lastName: '',
  dateOfBirth: null,
  countryOfResidence: '',
}
const checkIfFieldsAreNull = (list: OwnerDirectorDetails[]) => {
  let flag = 0
  list.forEach((person) => {
    if (
      person.firstName === '' ||
      person.lastName === '' ||
      person.dateOfBirth === null ||
      person.countryOfResidence === ''
    ) {
      flag = 1
    }
  })
  if (flag === 1) return true
  else return false
}

interface HandlePersonProps {
  directorsList: OwnerDirectorDetails[]
  setDirectorsList: React.Dispatch<React.SetStateAction<OwnerDirectorDetails[]>>
  ownersList: OwnerDirectorDetails[]
  setOwnersList: React.Dispatch<React.SetStateAction<OwnerDirectorDetails[]>>
  screenNumber: number
  setScreenNumber: React.Dispatch<React.SetStateAction<number>>
}
const useHandlePersonHook = ({
  directorsList,
  setDirectorsList,
  ownersList,
  setOwnersList,
  screenNumber,
  setScreenNumber,
}: HandlePersonProps) => {
  const handlePersonChange = (
    updatedPerson: OwnerDirectorDetails,
    number: number,
    type: string
  ) => {
    if (type === 'director') {
      const tempList = directorsList.map((person, index) => {
        if (index === number) {
          return { ...updatedPerson }
        }
        return person
      })
      setDirectorsList(tempList)
    } else {
      const tempList = ownersList.map((person, index) => {
        if (index === number) {
          return { ...updatedPerson }
        }
        return person
      })
      setOwnersList(tempList)
    }
  }

  const handleAddPersonClick = () => {
    if (screenNumber === 0) {
      setDirectorsList((prev) => [...prev, newPerson])
    } else {
      setOwnersList((prev) => [...prev, newPerson])
    }
  }

  const handleRemovePerson = (number: number) => {
    if (screenNumber === 0) {
      const tempList = directorsList.filter((person, index) => index !== number)
      setDirectorsList(tempList)
    } else {
      const tempList = ownersList.filter((person, index) => index !== number)
      setOwnersList(tempList)
    }
  }

  return { handlePersonChange, handleAddPersonClick, handleRemovePerson }
}

export const useCustomHook = (props: ConfirmDirectorOwnerProps) => {
  const { directors, owners, onContinueClick, onBackClick, screenNo } = props
  const [screenNumber, setScreenNumber] = useState(screenNo ? screenNo : 0)
  const [directorsList, setDirectorsList] = useState<OwnerDirectorDetails[]>(
    directors ? directors : [newPerson]
  )
  const [ownersList, setOwnersList] = useState<OwnerDirectorDetails[]>(
    owners ? owners : [newPerson]
  )
  const [disableContinueButton, setDisableContinueButton] = useState(
    screenNumber === 0
      ? checkIfFieldsAreNull(directorsList)
      : checkIfFieldsAreNull(ownersList)
  )
  const { handleRemovePerson, handlePersonChange, handleAddPersonClick } =
    useHandlePersonHook({
      directorsList,
      setDirectorsList,
      ownersList,
      setOwnersList,
      screenNumber,
      setScreenNumber,
    })

  const handelContinueButton = () => {
    if (screenNumber === 0) setScreenNumber(1)
    else onContinueClick(directorsList, ownersList)
  }
  const handelBackButton = () => {
    if (screenNumber === 1) setScreenNumber(0)
    else onBackClick()
  }

  useEffect(() => {
    if (screenNumber === 0) {
      setDisableContinueButton(checkIfFieldsAreNull(directorsList))
    }
  }, [directorsList])
  useEffect(() => {
    if (screenNumber === 1) {
      setDisableContinueButton(checkIfFieldsAreNull(ownersList))
    }
  }, [ownersList])

  return {
    handelBackButton,
    screenNumber,
    directorsList,
    ownersList,
    handleRemovePerson,
    handlePersonChange,
    handleAddPersonClick,
    disableContinueButton,
    handelContinueButton,
  }
}

export const useCustomHookForSubComponent = (
  props: DirectorOwnerComponentProps
) => {
  const { person, type, number, onChange, handleRemovePerson } = props
  const [firstName, setFirstName] = useState<string | null>(person.firstName)
  const [lastName, setLastName] = useState<string | null>(person.lastName)
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(
    person.dateOfBirth
  )
  const [countryOfResidence, setCountryOfResidence] = useState<string | null>(
    person.countryOfResidence
  )
  useEffect(() => {
    onChange(
      {
        firstName: firstName as string,
        lastName: lastName as string,
        dateOfBirth: dateOfBirth,
        countryOfResidence: countryOfResidence,
      },
      number,
      type
    )
  }, [firstName, lastName, dateOfBirth, countryOfResidence])
  const removePerson = () => {
    handleRemovePerson(number)
  }
  return {
    type,
    number,
    removePerson,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
    countryOfResidence,
    setCountryOfResidence,
  }
}

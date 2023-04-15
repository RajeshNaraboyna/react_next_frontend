import { useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { ConfirmTradingAddressProps } from '.'
import theme from '../../../theme/theme'
import { MAX_ADDRESSES } from '../../../utils/constants'

export const useCustomHook = (props: ConfirmTradingAddressProps) => {
  const { addresses, onClickConfirm } = props
  const [currentAddress, setCurrentAddress] = useState(addresses[0])
  const [addressList, setAddressList] = useState(addresses)
  const [addressIndex, setAddressIndex] = useState(0)
  const [isInEditPage, setIsInEditPage] = useState(false)
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(true)
  const [isAddButtonEnabled, setIsAddButtonEnabled] = useState(
    (addressList.length) < MAX_ADDRESSES
  )
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleEditClick = () => {
    setIsInEditPage(true)
  }
  const handleSaveClick = () => {
    const newArray = [...addressList]
    newArray[addressIndex] = currentAddress
    setAddressList(newArray)
    setIsInEditPage(false)
  }
  const handleConfirm = () => {
    onClickConfirm(addressList, currentAddress)
  }
  const onChange = (event: any, index: string) => {
    setAddressIndex(parseInt(index))
  }
  const handleClose = () => {
    setIsPopupOpen(false)
  }
  const handleCancelClick = () => {
    setCurrentAddress(addresses[addressIndex])
    setIsInEditPage(false)
  }
  const handleAddAddress = () => {
    setIsPopupOpen(true)
  }
  const addNewAddress = (address: string) => {
    const newArray = [...addressList]
    newArray.push(address)
    setAddressList(newArray)
    setIsPopupOpen(false)
  }
  useEffect(() => {
    if (currentAddress.length >= 10) {
      setIsSaveButtonEnabled(true)
    } else {
      setIsSaveButtonEnabled(false)
    }
  }, [currentAddress])
  useEffect(() => {
    setCurrentAddress(addressList[addressIndex])
  }, [addressIndex])
  useEffect(() => {
    setIsAddButtonEnabled((addressList.length) < MAX_ADDRESSES)
  }, [addressList])
  return {
    isInEditPage,
    onChange,
    setCurrentAddress,
    addressIndex,
    currentAddress,
    addressList,
    handleAddAddress,
    handleCancelClick,
    handleConfirm,
    handleSaveClick,
    isSaveButtonEnabled,
    isPopupOpen,
    handleClose,
    fullScreen,
    addNewAddress,
    handleEditClick,
    isAddButtonEnabled,
  }
}

import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ConfirmTradingAddressComponent from '.'
import { escape } from 'querystring'

const handleConfirm = jest.fn()

it('renders Add Address', async () => {
  render(
    <ConfirmTradingAddressComponent
      addresses={[
        '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
        '3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003',
      ]}
      onClickConfirm={handleConfirm}
    />
  )
  const confirmTradingAddress = screen.getByTestId('confirmTradingAddress')
  expect(confirmTradingAddress).toBeInTheDocument()
  let edit = screen.getByText('Edit')
  fireEvent.click(edit)
  const field = screen.getByText(
    '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054'
  )
  const cancelButton = screen.getByText('Cancel')
  fireEvent.click(cancelButton)
  edit = screen.getByText('Edit')
  fireEvent.click(edit)

  fireEvent.change(field, {
    target: { value: '#2097' },
  })
  fireEvent.change(field, {
    target: { value: '#2097, Triveni Main Rd, Gokula 1st Stage' },
  })
  const saveButton = screen.getByText('Save')
  fireEvent.click(saveButton)
  const radioButtons = screen.getAllByTestId('addressRadio')
  fireEvent.click(radioButtons[1])
  let addAddressButton = screen.getByText('Add Trading address')
  fireEvent.click(addAddressButton)
  const addAddressField = screen.getByPlaceholderText('Enter Your Address')
  fireEvent.change(addAddressField, {
    target: { value: 'Address Address Address' },
  })
  const addButton = screen.getByText('Add')
  fireEvent.click(addButton)
  addAddressButton = screen.getByText('Add Trading address')
  fireEvent.click(addAddressButton)
  fireEvent.keyDown(global.document, {
    keyCode: escape,
  })
  const confirmButton = screen.getByText('Confirm')
  fireEvent.click(confirmButton)
})

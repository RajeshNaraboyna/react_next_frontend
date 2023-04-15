import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Transfer from './../../../assets/images/dashBoardTransfer.svg'
import { AddressRadioText } from '.'

const handleChange = (value: string) => {}
it('renders Address Radio', () => {
  render(
    <AddressRadioText
      addresses={[
        '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
      ]}
      onChange={handleChange}
    />
  )
  const image = screen.getByTestId('addressRadio')
  expect(image).toBeInTheDocument()
})
it('Address Radio onChange functionality', () => {
  render(
    <AddressRadioText
      addresses={[
        '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
        '3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003',
      ]}
      onChange={handleChange}
    />
  )
  const radioButtons = screen.getAllByTestId('addressRadio')
  fireEvent.click(radioButtons[1])
})

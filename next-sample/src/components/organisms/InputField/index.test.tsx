import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InputTextComponent from '.'

const handleChange = jest.fn()

it('renders PasswordField', () => {
  render(
    <InputTextComponent
      onChange={handleChange}
      label="Password"
      helperText="Enter your password"
      variantType="password"
      width="516px"
      height="60px"
    />
  )
  const textField = screen.getByTestId('inputField')
  const eyeButton = screen.getByTestId('iconComponent')
  expect(textField).toBeInTheDocument()
  fireEvent.click(eyeButton)
})

it('renders AddressField', () => {
  render(
    <InputTextComponent
      onChange={handleChange}
      label="Trading address 1"
      helperText="Enter address"
      variantType="multiline"
      width="516px"
      height="98px"
      value="#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054"
    />
  )
  const textField = screen.getByText(
    '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054'
  )
  expect(textField).toBeInTheDocument()
  fireEvent.change(textField, { target: { value: 'Jane Doe' } })
  fireEvent.change(textField, { target: { value: '' } })
})

it('renders Card', () => {
  render(
    <InputTextComponent
      onChange={handleChange}
      helperText="CVV / CVC"
      variantType="card"
      width="308px"
      height="60px"
    />
  )
  const textField = screen.getByTestId('inputField')
  expect(textField).toBeInTheDocument()
  const input = screen.getByPlaceholderText("CVV / CVC");
  fireEvent.change(input, { target: { value: 8521 } })
  fireEvent.change(input, { target: { value: '' } })
})
it('renders fie;d with max length', () => {
    render(
    <InputTextComponent
      onChange={handleChange}
      label="First Name"
      maxLength={9}
      variantType="standard"
      width="516px"
      height="60px"
    />
  )
  const input = screen.getByLabelText("First Name");
  fireEvent.change(input, { target: { value: " name name name name" } })
})

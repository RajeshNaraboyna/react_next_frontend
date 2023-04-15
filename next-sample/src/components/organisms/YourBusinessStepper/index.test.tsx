import React from 'react'
import 'jest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import YourBusinessStep from '.'

const handleChange = jest.fn()

const companyList = [
  { name: 'Zemoso technologies pvt ltd', regNum: '2323', addr: '' },
  { name: 'Zentech solutions pvt ltd', regNum: '2323', addr: '' },
  { name: 'ZedX Infotech pvt ltd', regNum: '2323', addr: '' },
  { name: 'Zeswe Solutions pvt ltd', regNum: '2323', addr: '' },
  { name: 'TZeswe Solutions pvt ltd', regNum: '2323', addr: '' },
]

it('Your business stepper test', async () => {
  let changeVal = ''
  render(
    <YourBusinessStep
      options={companyList}
      onClickConfirm={(
        businessName: string,
        registrationNum: string,
        registrationAddr: string,
        addressesList: string[],
        address: string
      ) => {
        changeVal = businessName
      }}
    />
  )
  const autocomplete = screen.getByTestId('autocompleteComponent')
  const input = within(autocomplete).getByRole('combobox')
  autocomplete.focus()
  fireEvent.click(input)
  fireEvent.change(input, { target: { value: 'Ze' } })
  fireEvent.change(input, { target: { value: 'Zemoso' } })
  const options = screen.getByRole('presentation')
  screen.debug(options)
  fireEvent.click(
    options.childNodes[0].childNodes[0].childNodes[0].childNodes[0]
  )
  const backButton = screen.getByText('Confirm')
  fireEvent.click(backButton)
  const confirmTradingAddr = screen.getByText('Confirm')
  fireEvent.click(confirmTradingAddr)
  expect(changeVal).toEqual('Zemoso technologies pvt ltd')
})

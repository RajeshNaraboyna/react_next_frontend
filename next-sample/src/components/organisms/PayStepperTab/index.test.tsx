import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { PayStepperTab } from '.'

const recipientDetails = {
  firstName: 'Mario',
  lastName: 'Gabriel',
  email: 'mario.gabriel@gmail.com',
  accountType: 'Checking',
  accountNumber: 21363738391910,
  ifscCode: '',
}
const transferDetails = {
  fee: 0.0,
  rate: 1.14,
  senderAmountBeforeDeduction: 100.0,
  sendingCurrency: 'GBP',
  recipientCurrency: 'EUR',
  senderAmountAfterDeduction: 77.74,
  receiverAmountAfterDeduction: 115.61,
}

it('renders PayStepperTab', () => {
  const mockFn = jest.fn()
  render(
    <PayStepperTab
      continueClickHandler={mockFn}
      cancelClickHandler={mockFn}
      recipientDetails={recipientDetails}
      transferDetails={transferDetails}
    />
  )
  const payStepperTab = screen.getByTestId('pay-stepper')

  expect(payStepperTab).toBeDefined()
  expect(payStepperTab).toBeInTheDocument()
})

it('changes screens in PayStepperTab', () => {
  const mockFn = jest.fn()
  render(
    <PayStepperTab
      continueClickHandler={mockFn}
      cancelClickHandler={mockFn}
      recipientDetails={recipientDetails}
      transferDetails={transferDetails}
    />
  )
  fireEvent.click(screen.getByText('Continue to pay'))
  const chooseYourBank = screen.getByText('Choose your bank')
  expect(chooseYourBank).toBeInTheDocument()

  const LloydsOption = screen.getByText('Lloyds')
  fireEvent.click(LloydsOption)
  const payTitle = screen.getByText('Pay from your Lloyds account')
  expect(payTitle).toBeInTheDocument()
  fireEvent.click(screen.getByText('Continue to pay'))
  const confirmationTitle = screen.getByText(
    "Next, go to your Lloyds's online banking and make a payment"
  )
  expect(confirmationTitle).toBeInTheDocument()

  fireEvent.click(screen.getByText('Continue'))
  fireEvent.click(screen.getByText('Cancel this transfer'))
  fireEvent.click(screen.getAllByAltText('iconComponent')[0])
  fireEvent.click(screen.getAllByAltText('iconComponent')[0])
  fireEvent.click(screen.getAllByAltText('iconComponent')[0])
  fireEvent.click(screen.getAllByAltText('iconComponent')[0])

  expect(screen.getByText('Choose your transfer type')).toBeInTheDocument()

  const radio = screen.getByDisplayValue('debit')
  fireEvent.click(radio)
  fireEvent.click(screen.getByText('Continue to pay'))
  expect(screen.getByText('Pay with your card')).toBeInTheDocument()

})

import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BankDetailsForPayments from './input'

const handleContinue = jest.fn()
const handleCancel = jest.fn()

it('renders Bank Details For Payments', () => {
  render(
    <BankDetailsForPayments
      name="Mario Gabriel"
      reference="#356778810"
      amount="100.00 GBP"
      ukSortCode="24-14-70"
      accNumber="729019188810"
      bankAdress={[
        'PocketPay',
        '56 Shoreditch High Street',
        'London',
        'E16JJ',
        'United Kingdom',
      ]}
      onContinue={handleContinue}
      onCancel={handleCancel}
    />
  )
  const bankDetails = screen.getByTestId('bankDetails')
  expect(bankDetails).toBeInTheDocument()
  const button = screen.getAllByTestId('button')
  fireEvent.click(button[0])
  fireEvent.click(button[1])
})

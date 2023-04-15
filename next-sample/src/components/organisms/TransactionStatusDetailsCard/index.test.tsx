import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { sampleTransactionDetails } from '../../../utils/constants'
import { TransactionStatusDetailsCard } from '.'

const handleCancel = jest.fn()
const handleShareClick = jest.fn()

it('renders HomePageTransactionStatusDetailsCard', () => {
  render(
    <TransactionStatusDetailsCard
      transactionDetails={sampleTransactionDetails}
      onCancelClick={handleCancel}
      onShareClick={handleShareClick}
    />
  )
  const card = screen.getByTestId('transaction-details-card')
  expect(card).toBeInTheDocument()
})

it('renders HomePageTransactionStatusDetailsCard completed', () => {
  render(
    <TransactionStatusDetailsCard
      transactionDetails={{
        ...sampleTransactionDetails,
        transactionStatus: 'completed',
      }}
      onCancelClick={handleCancel}
      onShareClick={handleShareClick}
    />
  )
  const card = screen.getByTestId('transaction-details-card')
  expect(card).toBeInTheDocument()
})
it('renders HomePageTransactionStatusDetailsCard canceld', () => {
  render(
    <TransactionStatusDetailsCard
      transactionDetails={{
        ...sampleTransactionDetails,
        transactionStatus: 'canceled',
      }}
      onCancelClick={handleCancel}
      onShareClick={handleShareClick}
    />
  )
  const card = screen.getByTestId('transaction-details-card')
  expect(card).toBeInTheDocument()
  const iconComponents = screen.getAllByAltText('iconComponent')
  fireEvent.click(iconComponents[1])
})

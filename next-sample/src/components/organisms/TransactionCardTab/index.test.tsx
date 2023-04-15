import React from 'react'
import 'jest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TransactionCardTab } from '.'
import { sampleTransactionDetails } from '../../../utils/constants'

const handleShare = jest.fn()
const handleCancel = jest.fn()

it('renders transaction details card tab', () => {
  render(
    <TransactionCardTab
      transactionDetails={sampleTransactionDetails}
      onShareClick={handleShare}
      onCancelClick={handleCancel}
    />
  )
  const transactionCard = screen.getByTestId('transaction-details-card-tab')
  expect(transactionCard).toBeInTheDocument()
})

it('renders transaction details card tab with cancel status', () => {
  render(
    <TransactionCardTab
      transactionDetails={{
        ...sampleTransactionDetails,
        transactionStatus: 'canceled',
      }}
      onShareClick={handleShare}
      onCancelClick={handleCancel}
    />
  )
  const transactionCard = screen.getByTestId('transaction-details-card-tab')
  expect(transactionCard).toBeInTheDocument()
})

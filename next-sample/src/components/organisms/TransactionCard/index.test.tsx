import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TransactionCard } from '.'

const handleContinue = jest.fn()
const handleCancel = jest.fn()

it('renders transaction card', () => {
  render(
    <TransactionCard
      transferDetails={{
        fee: 0.0,
        rate: 1.14,
        senderAmountBeforeDeduction: 100.0,
        sendingCurrency: 'GBP',
        recipientCurrency: 'EUR',
        senderAmountAfterDeduction: 77.74,
        receiverAmountAfterDeduction: 115.61,
      }}
      recipientDetails={{
        firstName: 'Mario',
        lastName: 'Gabriel',
        email: 'mario.gabriel@gmail.com',
        ifscCode: 'ABFJ12929G',
        accountNumber: 21363738391910,
        accountType: 'Checking',
      }}
      onContinueClick={handleContinue}
      onCancelClick={handleCancel}
      haveButtons={true}
    />
  )
  const transactionCard = screen.getByTestId('transaction-card')
  expect(transactionCard).toBeInTheDocument()
  const continueButton = screen.getByText('Continue to pay')
  fireEvent.click(continueButton)
  const cancelButton = screen.getByText('Cancel this transfer')
  fireEvent.click(cancelButton)
})

it('renders transaction card without buttons', () => {
  render(
    <TransactionCard
      transferDetails={{
        fee: 0.0,
        rate: 1.14,
        senderAmountBeforeDeduction: 100.0,
        sendingCurrency: 'GBP',
        recipientCurrency: 'EUR',
        senderAmountAfterDeduction: 77.74,
        receiverAmountAfterDeduction: 115.61,
      }}
      recipientDetails={{
        firstName: 'Mario',
        lastName: 'Gabriel',
        email: 'mario.gabriel@gmail.com',
        ifscCode: 'ABFJ12929G',
        accountNumber: 21363738391910,
        accountType: 'Checking',
      }}
      width="476px"
      height="652px"
    />
  )
  const transactionCard = screen.getByTestId('transaction-card')
  expect(transactionCard).toBeInTheDocument()
})

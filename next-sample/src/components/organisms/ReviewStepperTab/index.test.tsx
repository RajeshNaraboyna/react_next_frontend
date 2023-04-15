import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ReviewStepperTab from '.'

const handleClick = jest.fn()
const handleBackClick = jest.fn()

it('render Review Stepper Tab', () => {
  render(
    <ReviewStepperTab
      accountDetails={{
        firstName: 'Mario',
        lastName:'Gabriel',
        email: 'mario.gabriel@gmail.com',
        accountType: 'Checking',
        accountNumber: 21363738391910,
        ifscCode:''
      }}
      transferDetails={{
        fee: 0.0,
        rate: 1.14,
        senderAmountBeforeDeduction: 100.0,
        sendingCurrency: 'GBP',
        recipientCurrency: 'EUR',
        senderAmountAfterDeduction: 77.74,
        receiverAmountAfterDeduction: 115.61,
      }}
      sending="Now"
      shouldArive="by April 28th"
      repeats="Never"
      onContinueClick={handleClick}
      onClickBackButton={handleBackClick}
    />
  )
  const reviewStepperTabOrganism = screen.getByTestId('reviewStepperTab')
  expect(reviewStepperTabOrganism).toBeInTheDocument()
  const editLink = screen.getAllByText('Edit')
  fireEvent.click(editLink[0])
  const amountField = screen.getByLabelText('Amount')
  fireEvent.change(amountField, {
    target: { value: '200' },
  })
  const amountSave = screen.getByText('Save')
  fireEvent.click(amountSave)
  expect(reviewStepperTabOrganism).toHaveTextContent('200')
  const editLinkCancel = screen.getAllByText('Edit')
  fireEvent.click(editLinkCancel[0])
  const amountFieldCancel = screen.getByLabelText('Amount')
  fireEvent.change(amountFieldCancel, {
    target: { value: '300' },
  })
  const amountCancel = screen.getByText('Cancel')
  fireEvent.click(amountCancel)
  expect(reviewStepperTabOrganism).toHaveTextContent('200')
  const changeLink = screen.getByText('Change')
  fireEvent.click(changeLink)
  const nameField = screen.getByLabelText('Name')
  fireEvent.change(nameField, {
    target: { value: 'Name1' },
  })
  const emailField = screen.getByLabelText('Email')
  fireEvent.change(emailField, {
    target: { emailField: 'test@email.com' },
  })
  const accNumberField = screen.getByLabelText('Account number')
  fireEvent.change(accNumberField, {
    target: { emailField: '12345' },
  })
  const accTypeField = screen.getByLabelText('Account type')
  fireEvent.change(accTypeField, {
    target: { emailField: 'pass' },
  })
  const transactionSave = screen.getByText('Save')
  fireEvent.click(transactionSave)
  expect(reviewStepperTabOrganism).toHaveTextContent('Name1')
  const changeLinkCancel = screen.getByText('Change')
  fireEvent.click(changeLinkCancel)
  const transactionCancel = screen.getByText('Cancel')
  fireEvent.click(transactionCancel)
  const continueButton = screen.getByText('Confirm and continue')
  fireEvent.click(continueButton)
  expect(handleClick).toBeCalled()
  const iconComponents = screen.getAllByAltText('iconComponent')
  fireEvent.click(iconComponents[0])
  expect(handleBackClick).toBeCalled()
})

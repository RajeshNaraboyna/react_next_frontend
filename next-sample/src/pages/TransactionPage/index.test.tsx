import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { TransactionPage } from '.'
import { BrowserRouter } from 'react-router-dom'

const continueBtn = 'Continue'
const iconComponent = 'iconComponent'
const selectCurrency = 'Select currency'
const andorra = 'Andorra'
const youSend = 'You send'

it('renders TransactionPage', () => {
  const mockFn = jest.fn()
  render(
    <BrowserRouter>
      <TransactionPage/>
    </BrowserRouter>
  )
  const transactionPage = screen.getByTestId('transaction-page')

  expect(transactionPage).toBeDefined()
  expect(transactionPage).toBeInTheDocument()
})

it('switch tabs in TransactionPage', () => {
  const mockFn = jest.fn()
  render(
    <BrowserRouter>
      <TransactionPage/>
    </BrowserRouter>
  )

  const iconComponents = screen.getAllByAltText(iconComponent)
  fireEvent.click(iconComponents[1])
  const input = screen.getByLabelText(youSend)
  fireEvent.change(input, { target: { value: 123 } })

  fireEvent.click(iconComponents[5])
  expect(screen.getByPlaceholderText(selectCurrency)).toBeInTheDocument()
  expect(screen.getByText(andorra)).toBeInTheDocument()
  fireEvent.click(screen.getByText(andorra))

  fireEvent.click(screen.getByText(continueBtn))

  expect(screen.getByText('Who are you sending money to')).toBeInTheDocument()
  fireEvent.click(screen.getByText('Business or Charity'))
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'test@gmail.com' },
  })
  fireEvent.change(screen.getByLabelText('Account Number'), {
    target: { value: '123456' },
  })
  fireEvent.change(screen.getByLabelText('First Name'), {
    target: { value: 'fname' },
  })
  fireEvent.change(screen.getByLabelText('Last Name'), {
    target: { value: 'lname' },
  })
  fireEvent.change(screen.getByLabelText('The Indian Financial System Code'), {
    target: { value: 'ABC15124' },
  })
  fireEvent.change(screen.getByPlaceholderText('Select account type'), {
    target: { value: 'Checking' },
  })

  fireEvent.click(screen.getByText(continueBtn))

  const select = screen.getByPlaceholderText(
    "Tell us what you're using PocketPay for"
  )
  fireEvent.change(select, { target: { value: 'AF' } })
  fireEvent.click(screen.getByText(continueBtn))

  expect(
    screen.getByText('Confirm your business directors')
  ).toBeInTheDocument()

  fireEvent.change(screen.getByLabelText('First name'), {
    target: { value: 'fname' },
  })
  fireEvent.change(screen.getByLabelText('Last name'), {
    target: { value: 'lname' },
  })
  const field = screen.getByLabelText('Date of birth')
  fireEvent.change(field, { target: { value: '12/10/2021' } })
  const selectCountry = screen.getByPlaceholderText('Country of residence')
  fireEvent.change(selectCountry, { target: { value: 'AF' } })
  fireEvent.click(screen.getByText(continueBtn))

  expect(screen.getByText('Shareholder 1')).toBeInTheDocument()

  fireEvent.click(screen.getAllByAltText(iconComponent)[1])
  expect(screen.getByText('Director 1')).toBeInTheDocument()

  fireEvent.click(screen.getByText(continueBtn))
  fireEvent.change(screen.getByLabelText('First name'), {
    target: { value: 'fname' },
  })
  fireEvent.change(screen.getByLabelText('Last name'), {
    target: { value: 'lname' },
  })
  fireEvent.change(screen.getByLabelText('Date of birth'), {
    target: { value: '12/10/2021' },
  })
  fireEvent.change(screen.getByPlaceholderText('Country of residence'), {
    target: { value: 'AF' },
  })
  fireEvent.click(screen.getByText(continueBtn))

  fireEvent.click(screen.getAllByAltText(iconComponent)[1])
  fireEvent.click(screen.getByText(continueBtn))

  expect(
    screen.getByText('Review details of your transfer')
  ).toBeInTheDocument()

  fireEvent.click(screen.getByText('Change'))
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'firstName lastName' },
  })
  fireEvent.click(screen.getByText('Save'))
  fireEvent.click(screen.getAllByText('Edit')[0])

  fireEvent.change(screen.getByLabelText('Amount'), {
    target: { value: 500.5 },
  })
  fireEvent.click(screen.getByText('Save'))
  expect(
    screen.getByText('Review details of your transfer')
  ).toBeInTheDocument()
  fireEvent.click(screen.getByText('Confirm and continue'))

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
})

it('cancel payment in TransactionPage', () => {
  render(
    <BrowserRouter>
      <TransactionPage/>
    </BrowserRouter>
  )

  const iconComponents = screen.getAllByAltText(iconComponent)
  const input = screen.getByLabelText(youSend)
  fireEvent.change(input, { target: { value: 123 } })

  fireEvent.click(iconComponents[5])
  expect(screen.getByPlaceholderText(selectCurrency)).toBeInTheDocument()
  expect(screen.getByText(andorra)).toBeInTheDocument()
  fireEvent.click(screen.getByText(andorra))

  fireEvent.click(screen.getByText(continueBtn))

  expect(screen.getByText('Who are you sending money to')).toBeInTheDocument()
  fireEvent.click(screen.getByText('Business or Charity'))
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'test@gmail.com' },
  })
  fireEvent.change(screen.getByLabelText('Account Number'), {
    target: { value: '123456' },
  })
  fireEvent.change(screen.getByLabelText('First Name'), {
    target: { value: 'fname' },
  })
  fireEvent.change(screen.getByLabelText('Last Name'), {
    target: { value: 'lname' },
  })
  fireEvent.change(screen.getByLabelText('The Indian Financial System Code'), {
    target: { value: 'ABC15124' },
  })
  fireEvent.change(screen.getByPlaceholderText('Select account type'), {
    target: { value: 'Checking' },
  })

  fireEvent.click(screen.getByText(continueBtn))

  const select = screen.getByPlaceholderText(
    "Tell us what you're using PocketPay for"
  )
  fireEvent.change(select, { target: { value: 'AF' } })
  fireEvent.click(screen.getByText(continueBtn))

  expect(
    screen.getByText('Confirm your business directors')
  ).toBeInTheDocument()

  fireEvent.change(screen.getByLabelText('First name'), {
    target: { value: 'fname' },
  })
  fireEvent.change(screen.getByLabelText('Last name'), {
    target: { value: 'lname' },
  })
  const field = screen.getByLabelText('Date of birth')
  fireEvent.change(field, { target: { value: '12/10/2021' } })
  const selectCountry = screen.getByPlaceholderText('Country of residence')
  fireEvent.change(selectCountry, { target: { value: 'AF' } })
  fireEvent.click(screen.getByText(continueBtn))

  expect(screen.getByText('Shareholder 1')).toBeInTheDocument()

  fireEvent.click(screen.getAllByAltText(iconComponent)[1])
  expect(screen.getByText('Director 1')).toBeInTheDocument()

  fireEvent.click(screen.getByText(continueBtn))
  fireEvent.change(screen.getByLabelText('First name'), {
    target: { value: 'fname' },
  })
  fireEvent.change(screen.getByLabelText('Last name'), {
    target: { value: 'lname' },
  })
  fireEvent.change(screen.getByLabelText('Date of birth'), {
    target: { value: '12/10/2021' },
  })
  fireEvent.change(screen.getByPlaceholderText('Country of residence'), {
    target: { value: 'AF' },
  })
  fireEvent.click(screen.getByText(continueBtn))

  expect(
    screen.getByText('Review details of your transfer')
  ).toBeInTheDocument()

  fireEvent.click(screen.getByText('Change'))
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'firstName lastName' },
  })
  fireEvent.click(screen.getByText('Save'))
  fireEvent.click(screen.getAllByText('Edit')[0])

  fireEvent.change(screen.getByLabelText('Amount'), {
    target: { value: 500.5 },
  })
  fireEvent.click(screen.getByText('Save'))
  expect(
    screen.getByText('Review details of your transfer')
  ).toBeInTheDocument()
  fireEvent.click(screen.getByText('Confirm and continue'))

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

  fireEvent.click(screen.getByText('Cancel this transfer'))
})

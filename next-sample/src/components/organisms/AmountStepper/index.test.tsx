import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import AmountStepper from '.'

const continueBtn = 'Continue'
const iconComponent = 'iconComponent'
const selectCurrency = 'Select currency'
const andorra = 'Andorra'
const youSend = 'You send'

it('renders AmountStepper', () => {
  const mockFn = jest.fn()
  render(
    <AmountStepper
      continueClickHandler={mockFn}
      backClickHandler={mockFn}
      transferDetails={{
        senderAmountBeforeDeduction: 100,
        senderAmountAfterDeduction: 96.31,
        receiverAmountAfterDeduction: 115.61,
        sendingCurrency: 'GBP',
        recipientCurrency: 'EUR',
        fee: 3.69,
        rate: 0.12,
      }}
    />
  )
  const amountStepper = screen.getByTestId('stepper-tab-template')

  expect(amountStepper).toBeDefined()
  expect(amountStepper).toBeInTheDocument()
})

it('calls handler methods', () => {
  const mockFn = jest.fn()
  render(
    <AmountStepper
      continueClickHandler={mockFn}
      backClickHandler={mockFn}
      transferDetails={{
        senderAmountBeforeDeduction: null,
        senderAmountAfterDeduction: 96.31,
        receiverAmountAfterDeduction: null,
        sendingCurrency: 'GBP',
        recipientCurrency: 'EUR',
        fee: 3.69,
        rate: 0.12,
      }}
    />
  )

  const buttonComponent = screen.getByText(continueBtn)
  fireEvent.click(buttonComponent)

  const iconComponents = screen.getAllByAltText(iconComponent)
  fireEvent.click(iconComponents[0])

  fireEvent.click(iconComponents[2])
  expect(screen.getByPlaceholderText(selectCurrency)).toBeInTheDocument()
  expect(screen.getByText(andorra)).toBeInTheDocument()
  fireEvent.click(screen.getByText(andorra))

  const input = screen.getByLabelText(youSend)
  fireEvent.change(input, { target: { value: 123 } })

  fireEvent.click(iconComponents[4])
  expect(screen.getByPlaceholderText(selectCurrency)).toBeInTheDocument()
  expect(screen.getByText(andorra)).toBeInTheDocument()
  fireEvent.click(screen.getByText(andorra))

  fireEvent.click(buttonComponent)
  expect(screen.getByText(continueBtn)).toBeInTheDocument()
})

it('calls handler methods for corner cases', () => {
  const mockFn = jest.fn()
  render(
    <AmountStepper
      continueClickHandler={mockFn}
      backClickHandler={mockFn}
      transferDetails={{
        senderAmountBeforeDeduction: 100,
        senderAmountAfterDeduction: 96.31,
        receiverAmountAfterDeduction: 115.61,
        sendingCurrency: 'GBP',
        recipientCurrency: 'EUR',
        fee: 3.69,
        rate: 0.12,
      }}
    />
  )

  const iconComponents = screen.getAllByAltText(iconComponent)
  const input = screen.getByLabelText(youSend)
  fireEvent.change(input, { target: { value: 123 } })

  fireEvent.click(iconComponents[2])
  expect(screen.getByPlaceholderText(selectCurrency)).toBeInTheDocument()
  expect(screen.getByText(andorra)).toBeInTheDocument()
  fireEvent.click(screen.getByText(andorra))

  fireEvent.click(iconComponents[4])
  fireEvent.click(iconComponents[0])
  fireEvent.click(iconComponents[0])
  expect(screen.getByText(continueBtn)).toBeInTheDocument()
})

it('calls back button handler', () => {
  const mockFn = jest.fn()
  render(
    <AmountStepper
      continueClickHandler={mockFn}
      backClickHandler={mockFn}
      transferDetails={{
        senderAmountBeforeDeduction: 100,
        senderAmountAfterDeduction: 96.31,
        receiverAmountAfterDeduction: 115.61,
        sendingCurrency: 'GBP',
        recipientCurrency: 'EUR',
        fee: 3.69,
        rate: 0.12,
      }}
    />
  )
  const iconComponents = screen.getAllByAltText(iconComponent)

  fireEvent.click(iconComponents[2])
  fireEvent.click(iconComponents[0])
  fireEvent.click(iconComponents[0])

  const input = screen.getByLabelText(youSend)
  fireEvent.change(input, { target: { value: '' } })
  fireEvent.click(iconComponents[4])
  expect(screen.getByPlaceholderText(selectCurrency)).toBeInTheDocument()
  expect(screen.getByText(andorra)).toBeInTheDocument()
  fireEvent.click(screen.getByText(andorra))
  expect(screen.getByText(continueBtn)).toBeInTheDocument()
})

import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PaymentRadioComponent from './index'

it('renders Payment Radio', () => {
  render(<PaymentRadioComponent handleRadioChange={jest.fn()}/>)
  const image = screen.getByTestId('paymentTextRadio')
  expect(image).toBeInTheDocument()
})
it('Payment Radio functionality', () => {
  render(<PaymentRadioComponent handleRadioChange={jest.fn()}/>)
  const radio = screen.getByDisplayValue('debit')
  fireEvent.click(radio)
})

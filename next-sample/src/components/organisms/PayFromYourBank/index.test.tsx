import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PayFromYourBank from '.'

const handleClick = jest.fn()

it('test Pay From Your Bank render and button click', () => {
  render(
    <PayFromYourBank
      onClick={handleClick}
      accountType="business"
      amount="200 GBP"
    />
  )
  const payFromYourBank = screen.getByTestId('payFromYourBank')
  expect(payFromYourBank).toBeInTheDocument()
  expect(payFromYourBank).toHaveTextContent('200 GBP')
  const buttonPay = screen.getByText('Continue to pay')
  fireEvent.click(buttonPay)
  expect(handleClick).toBeCalled()
})

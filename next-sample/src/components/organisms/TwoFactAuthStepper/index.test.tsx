import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TwoFactAuthStepper from '.'

const handleClick = jest.fn()

it('Two factor stepper ', () => {
  render(
    <TwoFactAuthStepper onClickSubmit={handleClick} onClickBack={handleClick} />
  )
  const TwoFactAuth = screen.getByTestId('twoFactorStepper')
  expect(TwoFactAuth).toBeInTheDocument()
  let iconButtonComponent = screen.getAllByAltText('iconComponent')
  fireEvent.click(iconButtonComponent[0])
  const select = screen.getByTestId('select')
  fireEvent.change(select, { target: { value: '+61' } })
  const phoneInput = screen.getByTestId('phoneInput')
  expect(phoneInput).toBeInTheDocument()
  fireEvent.change(phoneInput, {
    target: { value: '+441575484575' },
  })
  let continueButton = screen.getByText('Continue')
  fireEvent.click(continueButton)
  iconButtonComponent = screen.getAllByAltText('iconComponent')
  fireEvent.click(iconButtonComponent[0])
  continueButton = screen.getByText('Continue')
  fireEvent.click(continueButton)
  const codeInput = screen.getByPlaceholderText('Enter code here')
  fireEvent.change(codeInput, {
    target: { value: '454845' },
  })
  const submitButton = screen.getByText('Submit')
  fireEvent.click(submitButton)
  const anotherLink = screen.getByText('I didn’t recieve a code')
  fireEvent.click(anotherLink)
  expect(TwoFactAuth).toHaveTextContent('Approve another way')
  iconButtonComponent = screen.getAllByAltText('iconComponent')
  fireEvent.click(iconButtonComponent[0])
})

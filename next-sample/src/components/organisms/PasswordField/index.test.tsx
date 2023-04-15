import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PasswordField from '.'

const handleChange = jest.fn()

it('Password field input', () => {
  render(
    <PasswordField onClickContinue={handleChange} onClickBack={handleChange} />
  )
  const passwordField = screen.getByTestId('passwordField')
  expect(passwordField).toBeInTheDocument()
  const continueButton = screen.getByTestId('button')
  fireEvent.click(continueButton)
})

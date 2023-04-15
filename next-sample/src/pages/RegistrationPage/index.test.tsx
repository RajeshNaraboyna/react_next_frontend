import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import { RegistrationPage } from '.'

it('renders registration page', () => {
  render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: '/registration',
          search: '?value=teresa_teng',
          state: { email: 'ross.gabrial@gmail.com' },
        },
      ]}
    >
      <RegistrationPage />
    </MemoryRouter>
  )
  const businessCard = screen.getAllByTestId('iconTextCardComponent')[1]
  fireEvent.click(businessCard)
  const countryDropField = screen.getByPlaceholderText('Select your country')
  fireEvent.change(countryDropField, { target: { value: 'AE' } })
  let continueButton = screen.getByText('Continue')
  fireEvent.click(continueButton)
  const backIconButton = screen.getAllByAltText('iconComponent')[1]
  fireEvent.click(backIconButton)
  continueButton = screen.getByText('Continue')
  fireEvent.click(continueButton)
  const phoneInput = screen.getByTestId('phoneInput')
  expect(phoneInput).toBeInTheDocument()
  fireEvent.change(phoneInput, {
    target: { value: '+441575484575' },
  })
  continueButton = screen.getByText('Continue')
  fireEvent.click(continueButton)
  const codeInput = screen.getByPlaceholderText('Enter code here')
  fireEvent.change(codeInput, {
    target: { value: '454845' },
  })
  const submitButton = screen.getByText('Submit')
  fireEvent.click(submitButton)
  const passwordField = screen.getByPlaceholderText('Enter your password')
  fireEvent.change(passwordField, {
    target: { value: 'Password@8367' },
  })
  continueButton = screen.getByText('Continue')
  fireEvent.click(continueButton)
})

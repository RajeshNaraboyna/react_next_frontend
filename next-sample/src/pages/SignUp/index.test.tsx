import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SignUp from '.'
import { BrowserRouter } from 'react-router-dom'

it('Sign up page', () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  )
  const signup = screen.getByTestId('signup-bottom')
  expect(signup).toBeInTheDocument()
  const email = screen.getByTestId('email')
  screen.debug(email)
  fireEvent.change(email.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: 'Ross@gmail.com' },
  })
  let nextButton = screen.getByText('Next')
  fireEvent.click(nextButton)

  let logInLink = screen.getByText('Log in')
  fireEvent.click(logInLink)
})

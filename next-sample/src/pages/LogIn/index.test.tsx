import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LogIn from '.'
import { BrowserRouter } from 'react-router-dom'

it('Sign in page', () => {
  render(
    <BrowserRouter>
      <LogIn />
    </BrowserRouter>
  )

  const yourDetailsField = screen.getByTestId('signup-bottom')
  expect(yourDetailsField).toBeInTheDocument()
  const email = screen.getByTestId('email')
  fireEvent.change(email.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: 'Ross' },
  })
  expect(email.childNodes[0].childNodes[1].childNodes[0]).toHaveValue('Ross')

  const password = screen.getByTestId('password')
  screen.debug(password)
  fireEvent.change(password.childNodes[0].childNodes[0].childNodes[0], {
    target: { value: 'Ross1' },
  })
  expect(password.childNodes[0].childNodes[0].childNodes[0]).toHaveValue(
    'Ross1'
  )
  let signUpLink = screen.getByText('Sign up')
  screen.debug(signUpLink)
  fireEvent.click(signUpLink)
})

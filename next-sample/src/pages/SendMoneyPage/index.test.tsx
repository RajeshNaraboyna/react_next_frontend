import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { SendMoneyPage } from '.'

it('renders HomePage', () => {
  render(
    <BrowserRouter>
      <SendMoneyPage/>
    </BrowserRouter>
  )
  const sendMoneyPage = screen.getByTestId('send-money-page')

  expect(sendMoneyPage).toBeDefined()
  expect(sendMoneyPage).toBeInTheDocument()
  expect(
    screen.getByText('What would you like to do today?')
  ).toBeInTheDocument()
  fireEvent.click(screen.getAllByTestId('iconTextCardComponent')[0])
})

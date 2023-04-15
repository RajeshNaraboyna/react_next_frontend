import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { HomePage } from '.'
import { BrowserRouter } from 'react-router-dom'

it('renders HomePage', () => {
  const mockFn = jest.fn()
  render(
    <BrowserRouter>
      <HomePage handleLogout={mockFn} />
    </BrowserRouter>
  )
  const homePage = screen.getByTestId('home-page')

  expect(homePage).toBeDefined()
  expect(homePage).toBeInTheDocument()
  expect(screen.getByText('Account')).toBeInTheDocument()
  const iconComponents = screen.getAllByAltText('iconComponent')
  fireEvent.click(iconComponents[1])
  fireEvent.click(screen.getByText('Send money'))
})

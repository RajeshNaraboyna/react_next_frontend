import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Header } from '.'
import Ellipse from './../../../assets/images/Ellipse12.png'

const userName = 'Ross Gener'

it('renders Header', () => {
  const mockFn = jest.fn()
  render(
    <Header
      userIcon={Ellipse}
      userName={userName}
      userId="P44561754"
      handleLogout={mockFn}
    />
  )
  const header = screen.getByTestId('headerComponent')
  const profile = screen.getByText(userName)
  fireEvent.click(profile)
  expect(header).toBeDefined()
  expect(header).toBeInTheDocument()
})

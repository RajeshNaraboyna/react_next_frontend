import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ExtendedProfileComponent } from '.'

it('renders Extended Profile', () => {
  const fn = jest.fn()
  render(<ExtendedProfileComponent name="Ross Gener" userId="P44561754" handleLogout={fn}/>)
  const icontext = screen.getByTestId('extendedProfileComponent')
  expect(icontext).toBeDefined()
  expect(icontext).toBeInTheDocument()
  expect(icontext).toHaveTextContent('Ross Gener')
})

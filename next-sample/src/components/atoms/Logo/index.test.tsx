import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LogoComp from '.'


test('image of book', () => {
  render(<LogoComp />)
  const Logo = screen.getByRole('img', { name: 'logo' })
  expect(Logo).toBeInTheDocument()
})

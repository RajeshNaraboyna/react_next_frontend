import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CheckboxComponent from '.'
import theme from '../../../theme/theme'

it('renders checkbox', () => {
  render(
    <CheckboxComponent
      width="18px"
      height="18px"
    />
  )
  const checkbox = screen.getByTestId('checkboxComponent')
  expect(checkbox).toBeDefined()
  expect(checkbox).toBeInTheDocument()
})

it('renders checkbox with custom color', () => {
  render(
    <CheckboxComponent
      width="18px"
      height="18px"
      color={theme.palette.grey_color.main}
    />
  )
  const checkbox = screen.getByTestId('checkboxComponent')
  expect(checkbox).toBeDefined()
  expect(checkbox).toBeInTheDocument()
})

import React from 'react'
import 'jest'
import { render, screen } from '@testing-library/react'
import ChipComponent from '.'
import '@testing-library/jest-dom'
import theme from '../../../theme/theme'

it('renders chip', () => {
  render(
    <ChipComponent
      label="New"
      background_color={theme.palette.structural_color.button_hover}
      label_color={theme.palette.primary.primary_500}
      width="63px"
      height="26px"
    />
  )
  const chip = screen.getByTestId('chip')
  expect(chip).toBeInTheDocument()
})
it('renders chip without giving colors', () => {
  render(<ChipComponent label="New" width="63px" height="26px" />)
  const chip = screen.getByTestId('chip')
  expect(chip).toBeInTheDocument()
})

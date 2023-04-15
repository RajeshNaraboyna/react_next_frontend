import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import IconButtonComponent from '.'
import LinkIcon from '../../../assets/icons/link.svg'
import theme from '../../../theme/theme'
import UserIcon from '../../../assets/icons/user_primary.svg'

it('renders icon with border', () => {
  render(
    <IconButtonComponent
      src={LinkIcon}
      border="1px solid"
      border_color={theme.palette.primary.primary_500}
      height="60px"
      border_radius="50%"
      width="60px"
    />
  )
  const icon = screen.getByTestId('iconComponent')
  expect(icon).toBeDefined()
  expect(icon).toBeInTheDocument()
})

it('renders disabled icon without border', () => {
  render(
    <IconButtonComponent
      src={UserIcon}
      img_height="34px"
      img_width="34px"
      disabled={true}
      icon_color={theme.palette.primary.primary_500}
    />
  )
  const icon = screen.getByTestId('iconComponent')
  expect(icon).toBeDefined()
  expect(icon).toBeInTheDocument()
})

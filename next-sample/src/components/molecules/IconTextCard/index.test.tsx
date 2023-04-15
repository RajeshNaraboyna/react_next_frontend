import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import IconTextCardComponent from '.'
import UserIcon from '../../../assets/icons/user_primary.svg'

it('renders iconTextCard', () => {
  render(
    <IconTextCardComponent
      iconSrc={UserIcon}
      primaryText="Personal account"
      secondaryText="Send, spend, and receive around the world for less."
    />
  )
  const iconTextCard = screen.getByTestId('iconTextCardComponent')
  expect(iconTextCard).toBeDefined()
  expect(iconTextCard).toBeInTheDocument()
})

it('renders iconTextCard disabled', () => {
  render(
    <IconTextCardComponent
      iconSrc={UserIcon}
      primaryText="Personal account"
      secondaryText="Send, spend, and receive around the world for less."
      disabled={true}
    />
  )
  const iconTextCard = screen.getByTestId('iconTextCardComponent')
  expect(iconTextCard).toBeDefined()
  expect(iconTextCard).toBeInTheDocument()
})
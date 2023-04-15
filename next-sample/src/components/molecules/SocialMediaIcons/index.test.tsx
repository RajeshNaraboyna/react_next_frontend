import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SocialMediaIconsComponent from '.'
import GoogleIcon from '../../../assets/icons/google.svg'

it('renders socialMediaIcons', () => {
  render(
    <SocialMediaIconsComponent
      iconProps={[
        {
          src: GoogleIcon
        },
      ]}
    />
  )
  const socialMediaIcons = screen.getByTestId('socialMediaIconComponent')
  expect(socialMediaIcons).toBeDefined()
  expect(socialMediaIcons).toBeInTheDocument()
})

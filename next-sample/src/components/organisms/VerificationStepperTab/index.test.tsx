import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { VerificationStepperTab } from '.'

const handleContinueClick = jest.fn()
const handleBackClick = jest.fn()

it('renders Verification stepper', () => {
  render(
    <VerificationStepperTab
    isComingBack={false}
      directors={[
        {
          firstName: 'Noah',
          lastName: 'Smith',
          dateOfBirth: new Date('11/10/1998'),
          countryOfResidence: 'AD',
        },
      ]}
      owners={[
        {
          firstName: 'Oliver',
          lastName: 'Johnson',
          dateOfBirth: new Date('12/10/2000'),
          countryOfResidence: 'AD',
        },
      ]}
      onContinueClick={handleContinueClick}
      onBackClick={handleBackClick}
    />
  )
  const verificationStepper = screen.getByTestId('verification-stepper')
  expect(verificationStepper).toBeInTheDocument()
  const dropDown = screen.getAllByText("Tell us what you're using PocketPay for")
  fireEvent.click(dropDown[1])
})

it('renders Verification stepper without lists', () => {
  render(
    <VerificationStepperTab
      onContinueClick={handleContinueClick}
      onBackClick={handleBackClick}
      isComingBack={true}
    />
  )
  const verificationStepper = screen.getByTestId('verification-stepper')
  expect(verificationStepper).toBeInTheDocument()
  const continueButton = screen.getByText('Continue')
  fireEvent.click(continueButton)
  const iconComponent = screen.getAllByAltText('iconComponent')
  fireEvent.click(iconComponent[0])
  fireEvent.click(iconComponent[0])
})

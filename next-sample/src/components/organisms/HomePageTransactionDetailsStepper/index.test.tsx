import React from 'react'
import 'jest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HomePageTransactionDetailsStepper } from '.'
import { durationDetailsForTimelineStepper } from '../../../utils/constants'

it('renders Transaction Details Stepper', async () => {
  render(
    <HomePageTransactionDetailsStepper
      details={durationDetailsForTimelineStepper}
      width="440px"
      height="169px"
    />
  )
  const field = screen.getByTestId('transaction-details-stepper')
  expect(field).toBeInTheDocument()
})
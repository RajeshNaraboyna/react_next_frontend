import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ReviewDetailsTypography from '.'

it('renders ReviewDetailsTypography without link and subheader', () => {
  render(
    <ReviewDetailsTypography
      headerText="Recipient details"
      keysValuesText={[
        {
          key: 'Name:',
          value: 'Mario Gabriel',
        },
      ]}
      width="500px"
    />
  )
  const reviewDetailsTypography = screen.getByTestId(
    'reviewDetailsTypographyComponent'
  )
  expect(reviewDetailsTypography).toBeDefined()
  expect(reviewDetailsTypography).toBeInTheDocument()
})

it('renders ReviewDetailsTypography with link and subheader', () => {
  render(
    <ReviewDetailsTypography
      headerText="Transfer details"
      linkText="Edit"
      subHeaderTextLeft="100.00 GBP"
      subHeaderTextRight="114.68 EUR"
      keysValuesText={[
        {
          key: 'Fee:',
          value: '00.00 GBP',
        },
      ]}
    />
  )
  const reviewDetailsTypography = screen.getByTestId(
    'reviewDetailsTypographyComponent'
  )
  expect(reviewDetailsTypography).toBeDefined()
  expect(reviewDetailsTypography).toBeInTheDocument()
})

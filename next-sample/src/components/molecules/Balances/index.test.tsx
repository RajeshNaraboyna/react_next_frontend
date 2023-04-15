import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BalancesComponent } from '.'
import IndiaIcon from '../../../assets/images/ind.svg'

it('renders balances', () => {
  render(
    <BalancesComponent
      headerText="Balances"
      iconTextValues={[
        {
          src: IndiaIcon,
          text: '10,000.00 INR',
        },
      ]}
    />
  )
  const balances = screen.getByTestId('balancesComponent')
  expect(balances).toBeDefined()
  expect(balances).toBeInTheDocument()

  const icon = screen.getByTestId('iconComponent')
  expect(icon).toBeDefined()
  expect(icon).toBeInTheDocument()

  const iconText = screen.getByText('10,000.00 INR')
  expect(iconText).toBeInTheDocument()
})

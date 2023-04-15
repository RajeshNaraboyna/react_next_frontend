import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {Stepper} from '.'

it('renders Stepper Labels', () => {
  render(
    <Stepper
      stepDataArray={[
        { label: 'Your business', content: <p>Your Business</p> },
        { label: 'Business activity', content: <p>Business activity</p> },
        { label: 'Your details', content: <p>Your details</p> },
      ]}
      activeTab={1}
    />
  )
  const sideNav = screen.getByTestId('stepper')
})

it('renders Stepper Labels tab 0', () => {
  render(
    <Stepper
      stepDataArray={[
        { label: 'Your business', content: <p>Your Business</p> },
        { label: 'Business activity', content: <p>Business activity</p> },
        { label: 'Your details', content: <p>Your details</p> },
      ]}
      activeTab={0}
    />
  )
  const sideNav = screen.getByTestId('stepper')
})

it('renders Stepper Labels tab 1', () => {
  render(
    <Stepper
      stepDataArray={[
        { label: 'Your business', content: <p>Your Business</p> },
        { label: 'Business activity', content: <p>Business activity</p> },
        { label: 'Your details', content: <p>Your details</p> },
      ]}
      activeTab={0}
    />
  )
  const sideNav = screen.getByTestId('stepper')
})

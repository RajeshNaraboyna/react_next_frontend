import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CountryDropDown from '.'
import AndorraLogo from '../../../assets/images/chn.svg'
import AustriaLogo from '../../../assets/images/ast.svg'
import IndiaLogo from '../../../assets/images/ind.svg'
import UKLogo from '../../../assets/images/uk.svg'
import Vector from '../../../assets/icons/arrow-right.svg'

const handleClick = jest.fn()

it('country dropdown  field input', () => {
  render(
    <CountryDropDown onClickContinue={handleClick} onClickBack={handleClick} value=''/>
  )
  const countryDropField = screen.getByTestId('countryDropField')
  expect(countryDropField).toBeInTheDocument()
  expect(screen.getByText('Your country of registration')).toBeInTheDocument()
  const continueButton = screen.getByText('Continue')
  // fireEvent.click(continueButton)
})

it('country dropdown  field input with Value', () => {
  render(
    <CountryDropDown onClickContinue={handleClick} onClickBack={handleClick} value='AE'/>
  )
  const countryDropField = screen.getByTestId('countryDropField')
  expect(countryDropField).toBeInTheDocument()
  expect(screen.getByText('Your country of registration')).toBeInTheDocument()
  const continueButton = screen.getByText('Continue')
  fireEvent.click(continueButton)
})

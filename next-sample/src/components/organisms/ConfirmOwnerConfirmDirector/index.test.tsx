import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ConfirmOwnerDirector } from './index.stories'

const handleContinue = jest.fn()
const handleBackClick = jest.fn()

it('renders ConfirmOwner and director with empty array', () => {
  render(
    <ConfirmOwnerDirector
      onContinueClick={handleContinue}
      onBackClick={handleBackClick}
      screenNo={0}
    />
  )
})

it('renders ConfirmOwner and director with values', () => {
  render(
    <ConfirmOwnerDirector
      onContinueClick={handleContinue}
      onBackClick={handleBackClick}
      directors={[
        {
          firstName: 'Noah',
          lastName: 'Smith',
          dateOfBirth: new Date(),
          countryOfResidence: 'AD',
        },
      ]}
      owners={[
        {
          firstName: 'Oliver',
          lastName: 'Johnson',
          dateOfBirth: new Date(),
          countryOfResidence: 'AD',
        },
      ]}
    />
  )
  const firstName = screen.getByDisplayValue('Noah')
  fireEvent.change(firstName, { target: { value: '' } })
  fireEvent.change(firstName, { target: { value: 'Henry' } })
  const lastName = screen.getByDisplayValue('Smith')
  fireEvent.change(lastName, { target: { value: '' } })
  fireEvent.change(lastName, { target: { value: 'William' } })
  const addAnotherPerson = screen.getByText('Add another director')
  fireEvent.click(addAnotherPerson)
  const iconComponents = screen.getAllByAltText('iconComponent')
  fireEvent.click(iconComponents[1])
  fireEvent.click(iconComponents[0])

})
it('test continue button', () => {
  render(
    <ConfirmOwnerDirector
      onContinueClick={handleContinue}
      onBackClick={handleBackClick}
      directors={[
        {
          firstName: 'Noah',
          lastName: 'Smith',
          dateOfBirth: new Date(),
          countryOfResidence: 'AD',
        },
      ]}
      owners={[
        {
          firstName: 'Oliver',
          lastName: 'Johnson',
          dateOfBirth: new Date(),
          countryOfResidence: 'AD',
        },
      ]}
    />
  )
  const continueButton = screen.getByTestId('button')
  fireEvent.click(continueButton)
  const firstNameOwner = screen.getByDisplayValue('Oliver')
  fireEvent.change(firstNameOwner, { target: { value: '' } })
  fireEvent.change(firstNameOwner, { target: { value: 'Lucas' } })
  const lastNameOwner = screen.getByDisplayValue('Johnson')
  fireEvent.change(lastNameOwner, { target: { value: '' } })
  fireEvent.change(lastNameOwner, { target: { value: 'Williams' } })
  fireEvent.click(continueButton)
})

it('test add button', () => {
  render(
    <ConfirmOwnerDirector
      onContinueClick={handleContinue}
      onBackClick={handleBackClick}
      directors={[
        {
          firstName: 'Hello',
          lastName: 'HELLO',
          dateOfBirth: new Date(),
          countryOfResidence: 'AD',
        },
      ]}
      owners={[
        {
          firstName: 'Hai',
          lastName: 'HaAI',
          dateOfBirth: new Date(),
          countryOfResidence: 'AD',
        },
      ]}
    />
  )
  const continueButton = screen.getByTestId('button')
  fireEvent.click(continueButton)
  const addAnotherPerson = screen.getByTestId('iconAndText')
  fireEvent.click(addAnotherPerson)
  const iconComponents = screen.getAllByAltText('iconComponent')
  fireEvent.click(iconComponents[1])
  fireEvent.click(iconComponents[0])

})

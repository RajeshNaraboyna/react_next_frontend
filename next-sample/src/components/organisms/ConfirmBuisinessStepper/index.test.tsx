import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import YourBusinessStep from '.'

const handleChange = jest.fn()
it('Your business stepper test', () => {
  render(
    <YourBusinessStep
      businessName={'Zentech Solutions Pvt Ltd'}
      registrationNum={'2020ZEN5367GJ'}
      registrationAddr={
        '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054'
      }
      onClickContinue={handleChange}
      onClickBack={handleChange}
    />
  )

  let edit = screen.getByText('Edit')
  fireEvent.click(edit)
  const field = screen.getByText(
    '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054'
  )
  fireEvent.change(field, {
    target: { value: '#2097' },
  })
  fireEvent.change(field, {
    target: { value: '#2097, Triveni Main Rd, Gokula 1st Stage' },
  })
  expect(field).toHaveValue('#2097, Triveni Main Rd, Gokula 1st Stage')
  const fieldReg = screen.getByDisplayValue('2020ZEN5367GJ')
  fireEvent.change(fieldReg, {
    target: { value: '2020' },
  })
  expect(fieldReg).toHaveValue('2020')

  const fieldBusinessName = screen.getByDisplayValue(
    'Zentech Solutions Pvt Ltd'
  )
  fireEvent.change(fieldBusinessName, {
    target: { value: 'Zentech Solution' },
  })
  fireEvent.change(fieldBusinessName, {
    target: { value: 'Zentech Solutions' },
  })
  expect(fieldBusinessName).toHaveValue('Zentech Solutions')
  let saveButton = screen.getByText('Save')
  fireEvent.click(saveButton)
  edit = screen.getByText('Edit')
  fireEvent.click(edit)
  const cancelButton = screen.getByText('Cancel')
  fireEvent.click(cancelButton)
  edit = screen.getByText('Edit')
  fireEvent.click(edit)
  saveButton = screen.getByText('Save')
  fireEvent.click(saveButton)
  const continueButton = screen.getByText('Confirm')
  fireEvent.click(continueButton)
  const backButton = screen.getByTestId('iconComponent')
  fireEvent.click(backButton)
})

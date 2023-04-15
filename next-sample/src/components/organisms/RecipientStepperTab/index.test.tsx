import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import RecipientStepperTab from '.'
import { RecipientDetails } from '../../../utils/types'

const handleChange = jest.fn()

const newRecipientStepperData: RecipientDetails = {
  accountNumber: 1233456885865,
  firstName: 'Mario',
  lastName: 'Gabriel',
  ifscCode: 'ABFJ12929G',
  accountType: 'Checking',
  email: 'mario.gabriel@gmail.com',
}

it('Revcipient details input', () => {
  render(
    <RecipientStepperTab
      onContinue={handleChange}
      handleBack={handleChange}
      recipientData={newRecipientStepperData}
    />
  )
  const yourDetailsField = screen.getByTestId('recipientStepper')
  expect(yourDetailsField).toBeInTheDocument()
  const firstNameBox = screen.getByTestId('email')
  fireEvent.change(firstNameBox.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: 'Ross@test.com' },
  })
  expect(firstNameBox.childNodes[0].childNodes[1].childNodes[0]).toHaveValue(
    'Ross@test.com'
  )
  const lastNameBox = screen.getByTestId('lastName')
  fireEvent.change(lastNameBox.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: 'test last' },
  })
  expect(lastNameBox.childNodes[0].childNodes[1].childNodes[0]).toHaveValue(
    'test last'
  )
  const firstName = screen.getByTestId('firstName')
  fireEvent.change(firstName.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: 'Test name' },
  })
  expect(firstName.childNodes[0].childNodes[1].childNodes[0]).toHaveValue(
    'Test name'
  )
  const finanaceCode = screen.getByTestId('financeCode')
  fireEvent.change(finanaceCode.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: 'Test code' },
  })
  expect(finanaceCode.childNodes[0].childNodes[1].childNodes[0]).toHaveValue(
    'Test code'
  )

  const acctNum = screen.getByTestId('acctNumber')
  fireEvent.change(acctNum.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: '123456789012' },
  })
  expect(acctNum.childNodes[0].childNodes[1].childNodes[0]).toHaveValue(
    123456789012
  )
  const buttonBox = screen.getByTestId('Continue')
  fireEvent.click(buttonBox.childNodes[0])

  const backButtonBox = screen.getByTestId('backButton')
  fireEvent.click(backButtonBox.childNodes[0])
})

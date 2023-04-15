import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { PurposeComponent } from '.'

it('renders purposeComponent', () => {
  render(
    <PurposeComponent
      continueClickHandler={(value) => {
        console.log('selected drop-down option: ', value)
      }}
      backClickHandler={() => {
        console.log('clicked on back icon')
      }}
    />
  )

  const purposeComponent = screen.getByTestId('purposeComponent')
  const selectComp = screen.getByTestId('select-comp')
  expect(selectComp).toBeInTheDocument()
  const select = screen.getByPlaceholderText("Tell us what you're using PocketPay for")
  fireEvent.change(select, { target: { value: 'AF' } })
  const continueButton = screen.getByText('Continue')
  fireEvent.click(continueButton)

  expect(purposeComponent).toBeDefined()
  expect(purposeComponent).toBeInTheDocument()
})

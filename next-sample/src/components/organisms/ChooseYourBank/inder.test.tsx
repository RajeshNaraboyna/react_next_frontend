import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ChooseYourBank } from '.'

const handleClickBank = jest.fn()
const handleClickCancel = jest.fn()

it('Choose your bank Stepper ', () => {
  render(
    <ChooseYourBank
      onClickBank={handleClickBank}
      onClickTransactionCancel={handleClickCancel}
    />
  )
  const chooseYourBank = screen.getByTestId('chooseYourBank')
  expect(chooseYourBank).toBeInTheDocument()
  const textField = screen.getByTestId('inputField')
  expect(textField).toBeInTheDocument()
  const input = screen.getByPlaceholderText('Start typing to search')
  fireEvent.change(input, { target: { value: 'State' } })
  fireEvent.change(input, { target: { value: '' } })
  const backWithClick = screen.getByTestId('getBankWithClick')
  expect(backWithClick).toBeInTheDocument()
  fireEvent.click(backWithClick)
  const cancelPopup = screen.getByText('Cancel the transfer')
  fireEvent.click(cancelPopup)
  const buttonYes = screen.getByText('Yes')
  fireEvent.click(buttonYes)
  expect(buttonYes).toBeInTheDocument()
  const buttonNo = screen.getByText('No')
  fireEvent.click(buttonNo)
  expect(buttonNo).toBeInTheDocument()
})

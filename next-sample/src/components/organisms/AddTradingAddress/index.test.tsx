import React from 'react'
import 'jest'
import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AddTradingAddress } from '.'

const handleSave = jest.fn()

it('renders Add Address', () => {
  render(<AddTradingAddress addressNumber={3} onSave={handleSave} />)
  const addAddress = screen.getByTestId('addAddress')
  expect(addAddress).toBeInTheDocument()
  const field = screen.getByPlaceholderText('Enter Your Address')
  fireEvent.change(field, { target: { value: 'Address Address Address' } })
  const button = screen.getByTestId('button')
  fireEvent.click(button)
})

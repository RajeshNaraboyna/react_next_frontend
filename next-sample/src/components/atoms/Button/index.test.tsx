import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonComponent from '.'

describe('Button Test', () => {
  test('Sign up button', () => {
    const fn = jest.fn()
    render(<ButtonComponent variant={'contained'} onClick={fn} children="Sign Up" />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })


  test('Confirm button', () => {
    render(<ButtonComponent variant={'outlined'} children="Add trading address" />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })

  test('Primary Disabled', () => {
    render(<ButtonComponent variant={'contained'} children="Submit" />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })
})

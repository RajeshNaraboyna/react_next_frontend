import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import AccountTypeStepper from '.'

it('renders socialMediaIcons', () => {
  const fn = jest.fn()
  render(<AccountTypeStepper  handleBackClick={fn} handleClick={fn}/>)
  const accountType = screen.getByTestId('accountTypeStepper')
  expect(accountType).toBeDefined()
  expect(accountType).toBeInTheDocument()
  const iconAndTextCard = screen.getAllByTestId('iconTextCardComponent')
  fireEvent.click(iconAndTextCard[1])
})

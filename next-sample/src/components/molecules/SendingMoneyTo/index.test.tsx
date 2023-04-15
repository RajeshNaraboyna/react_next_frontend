import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { SendingMoneyTo } from '.'

const onClick =jest.fn();

it('renders SendingMoneyTo', () => {
  render(
    <SendingMoneyTo onClick={onClick}/>
  )
  const sendingMoneyTo = screen.getByTestId('SendingMoneyTo')
  expect(sendingMoneyTo).toBeDefined()
  const sendingMoneyToOptions = screen.getAllByTestId('SendingMoneyTo-option')
  fireEvent.click(sendingMoneyToOptions[2]);
  fireEvent.click(sendingMoneyToOptions[1]);
  fireEvent.click(sendingMoneyToOptions[0]);

})
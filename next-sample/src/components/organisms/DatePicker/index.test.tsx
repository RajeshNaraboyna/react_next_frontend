import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { escape } from 'querystring'
import { DatePickerComponent } from '.'

const handleChange = jest.fn()

it('renders Date Picker', async () => {
  render(<DatePickerComponent onChange={handleChange} label="Date of birth" width='200px'/>)
  const field = screen.getByLabelText('Date of birth')
  const calender = screen.getByTestId('CalendarTodayOutlinedIcon')
  fireEvent.change(field, { target: { value: '12/10/2021' } })
  fireEvent.click(calender)
})
it('renders Mui Picker with value', async () => {
  render(<DatePickerComponent onChange={handleChange} value={new Date()} />)
  const field = screen.getByLabelText('Date of birth')
  const calender = screen.getByTestId('CalendarTodayOutlinedIcon')
  fireEvent.change(field, { target: { value: '12/10/2021' } })
  fireEvent.click(calender)
})

import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import YourDetailsStep from '.'
import AndorraLogo from '../../../assets/images/chn.svg'
import AustriaLogo from '../../../assets/images/ast.svg'
import IndiaLogo from '../../../assets/images/ind.svg'
import UKLogo from '../../../assets/images/uk.svg'

const countryOptions = [
  {
    code: 'AD',
    label: 'Andorra',
    logo: AndorraLogo,
    disabled: false,
  },
  {
    code: 'AE',
    label: 'United Kingdom',
    logo: UKLogo,
    disabled: false,
  },
  {
    code: 'AF',
    label: 'Austria',
    logo: AustriaLogo,
    disabled: false,
  },
  {
    code: 'AG',
    label: 'India',
    logo: IndiaLogo,
    disabled: false,
  },
]

const handleChange = jest.fn()

it('Your details input', () => {
  render(
    <YourDetailsStep
      native={true}
      optionslist={countryOptions}
      onContinue={handleChange}
    />
  )
  const yourDetailsField = screen.getByTestId('yourDetails')
  expect(yourDetailsField).toBeInTheDocument()
  const firstNameBox = screen.getByTestId('firstName')
  fireEvent.change(firstNameBox.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: 'Ross' },
  })

  const lastNameBox = screen.getByTestId('lastName')
  fireEvent.change(lastNameBox.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: 'test last' },
  })

  const pincodeBox = screen.getByTestId('pincode')
  fireEvent.change(pincodeBox.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: '5151515' },
  })

  const homeAddrBox = screen.getByTestId('homeAddress')
  fireEvent.change(homeAddrBox.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: '2323-2323 New jersy' },
  })

  const cityBox = screen.getByTestId('city')
  fireEvent.change(cityBox.childNodes[0].childNodes[1].childNodes[0], {
    target: { value: 'New jersy' },
  })

  const field = screen.getByLabelText('Date of birth')
  const calender = screen.getByTestId('CalendarTodayOutlinedIcon')
  fireEvent.change(field, { target: { value: '12/10/2021' } })
  fireEvent.click(calender)

  const select = screen.getByTestId('selectedCountry')
  expect(select).toBeInTheDocument()
  const selectNode =
    select.childNodes[0].childNodes[0].childNodes[1].childNodes[0]
  fireEvent.change(selectNode, { target: { value: 'AE' } })
  expect(
    screen.getByTestId('selectedCountry').childNodes[0].childNodes[0]
      .childNodes[1].childNodes[0]
  ).toHaveValue('AE')
  const buttonBox = screen.getByTestId('continue')
  fireEvent.click(buttonBox.childNodes[0])
})

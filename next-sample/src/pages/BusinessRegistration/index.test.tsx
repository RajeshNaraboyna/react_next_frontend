import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, within } from '@testing-library/react'
import BusinessRegistration from '.'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

it('renders TransactionPage', () => {
  render(
    <MemoryRouter
      initialEntries={[
        {
          pathname: '/business_registration',
          search: '?value=teresa_teng',
          state: {
            email: 'ross.gabrial@gmail.com',
            accountType: 'Business Account',
            countryRegistration: 'United Kingdom',
            mobileNumber: '+44 25621531284',
            password: 'Password@8367',
          },
        },
      ]}
    >
      <BusinessRegistration />
    </MemoryRouter>
  )
  const businessRegistration = screen.getByTestId('business_registration')

  expect(businessRegistration).toBeDefined()
  expect(businessRegistration).toBeInTheDocument()

  const autocomplete = screen.getByTestId('autocompleteComponent')
  const input = within(autocomplete).getByRole('combobox')
  autocomplete.focus()
  fireEvent.click(input)
  fireEvent.change(input, { target: { value: 'Ze' } })
  fireEvent.change(input, { target: { value: 'Zemoso' } })
  const options = screen.getByRole('presentation')
  fireEvent.click(
    options.childNodes[0].childNodes[0].childNodes[0].childNodes[0]
  )
  const backButton = screen.getByText('Confirm')
  screen.debug(backButton)
  fireEvent.click(backButton)

  const confirmTradingAddress = screen.getByTestId('confirmTradingAddress')
  expect(confirmTradingAddress).toBeInTheDocument()

  const confirmButton = screen.getByText('Confirm')
  fireEvent.click(confirmButton)

  const yourDetailsField = screen.getByTestId('businessActivityStepper')
  expect(yourDetailsField).toBeInTheDocument()
  const autocomplete2 = screen.getByTestId('categoryAuto')
  const categinput = within(autocomplete2).getByRole('combobox')
  autocomplete2.focus()
  fireEvent.click(categinput)
  fireEvent.change(categinput, { target: { value: 'Design' } })
  const optionsCat = screen.getByRole('presentation')
  fireEvent.click(
    optionsCat.childNodes[0].childNodes[0].childNodes[0].childNodes[0]
  )

  const subautocomplete2 = screen.getByTestId('subCategoryAuto')
  const isubCatnput = within(subautocomplete2).getByRole('combobox')
  autocomplete2.focus()
  fireEvent.click(isubCatnput)
  fireEvent.change(isubCatnput, { target: { value: 'Real' } })
  const optionsSubCat = screen.getByRole('presentation')
  fireEvent.click(
    optionsSubCat.childNodes[0].childNodes[0].childNodes[0].childNodes[0]
  )

  const businessautocomplete2 = screen.getByTestId('businessSizeAuto')
  const input2 = within(businessautocomplete2).getByRole('combobox')
  autocomplete2.focus()
  fireEvent.click(input2)
  fireEvent.change(input2, { target: { value: '50' } })
  const optionsSize = screen.getByRole('presentation')
  fireEvent.click(
    optionsSize.childNodes[0].childNodes[0].childNodes[0].childNodes[0]
  )

  const buttonBox = screen.getByText('Continue')
  fireEvent.click(buttonBox)
  screen.debug(buttonBox)

  const yourDetailsField5 = screen.getByTestId('yourDetails')
  expect(yourDetailsField5).toBeInTheDocument()
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
    select.childNodes[0].childNodes[0].childNodes[1].childNodes[1]
  screen.debug(select)
  fireEvent.change(selectNode, { target: { value: 'AE' } })
})

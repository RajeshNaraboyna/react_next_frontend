import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BusinessActivityStep from '.'
import { within } from '@testing-library/react'

const categoryList = [
  {
    name: 'Design, marketing or communication',
    code: 'AB',
  },
  {
    name: 'Health, sports or personal care',
    code: 'AC',
  },
  {
    name: 'Real estate or construction',
    code: 'AD',
  },
  {
    name: 'Education or learning',
    code: 'AE',
  },
  {
    name: 'Others',
    code: 'AF',
  },
]

const subCategoryList = [
  {
    name: 'Real estate sale, purchase and management',
    code: 'BA',
  },
]

const businessSizeList = [
  {
    name: '50-100',
    code: 'AB',
  },
  {
    name: '100-1000',
    code: 'AC',
  },
]

const handleChange = jest.fn()

it('Your details input', async () => {
  render(
    <BusinessActivityStep
      onContinue={handleChange}
      categoryList={categoryList}
      subCategoryList={subCategoryList}
      businessSizes={businessSizeList}
    />
  )
  const yourDetailsField = screen.getByTestId('businessActivityStepper')
  expect(yourDetailsField).toBeInTheDocument()
  const autocomplete = screen.getByTestId('categoryAuto')
  const categinput = within(autocomplete).getByRole('combobox')
  autocomplete.focus()
  fireEvent.click(categinput)
  fireEvent.change(categinput, { target: { value: 'Design' } })
  fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
  fireEvent.keyDown(autocomplete, { key: 'Enter' })

  expect(categinput).toHaveValue('Design')
  const subautocomplete = screen.getByTestId('subCategoryAuto')
  const isubCatnput = within(subautocomplete).getByRole('combobox')
  autocomplete.focus()
  fireEvent.click(isubCatnput)
  fireEvent.change(isubCatnput, { target: { value: 'Real' } })
  fireEvent.keyDown(subautocomplete, { key: 'ArrowDown' })
  fireEvent.keyDown(subautocomplete, { key: 'Enter' })
  expect(isubCatnput).toHaveValue('Real')

  const businessautocomplete = screen.getByTestId('businessSizeAuto')
  const input = within(businessautocomplete).getByRole('combobox')
  autocomplete.focus()
  fireEvent.click(input)
  fireEvent.change(input, { target: { value: '50' } })
  await fireEvent.keyDown(businessautocomplete, { key: 'ArrowDown' })
  fireEvent.keyDown(businessautocomplete, { key: 'Enter' })
  await expect(input).toHaveValue('50')

  const buttonBox = screen.getByText('Continue')
  fireEvent.click(buttonBox)
})

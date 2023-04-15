import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DropDown from '.'
import 'jest'
import AndorraLogo from '../../../assets/images/chn.svg'
import AustriaLogo from '../../../assets/images/ast.svg'
import IndiaLogo from '../../../assets/images/ind.svg'
import UKLogo from '../../../assets/images/uk.svg'

const countryOptions = [
  {
    code: 'AD',
    label: 'Andorra',
    logo: AndorraLogo,
    disabled: true,
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
    disabled: true,
  },
  {
    code: 'AG',
    label: 'India',
    logo: IndiaLogo,
    disabled: true,
  },
]

const purposeOptions = [
  {
    code: 'AD',
    label: 'Paying rent, utilities or property charges',
    disabled: true,
  },
  {
    code: 'AE',
    label: 'Paying suppliers/contractors/employees',
    disabled: true,
  },
  {
    code: 'AF',
    label: 'Paying for goods or services abroad',
    disabled: false,
  },
  {
    code: 'AG',
    label: 'Paying tax on profit or property',
    disabled: true,
  },
]

test('select with logo and label', async () => {
  const handleChange = jest.fn()
  const onChangeHandler = jest.fn()
  render(
    <DropDown
      placeholder="Select your country"
      onSelectLabel="Country of registration"
      optionslist={countryOptions}
      onSelect={handleChange}
      onChange={onChangeHandler}
      native={true}
    />
  )
  const selectComp = screen.getByTestId('select-comp')
  expect(selectComp).toBeInTheDocument()
  expect(screen.getAllByRole('option')[0]).toBeInTheDocument()
  const select = screen.getByTestId('select')
  expect(select).toBeInTheDocument()
  const selectNode = select.childNodes[0]
  fireEvent.change(selectNode, { target: { value: 'AE' } })
  expect(handleChange.mock.calls).toHaveLength(1)
})

test('select only with label', async () => {
  const handleChange = jest.fn()
  render(
    <DropDown
      placeholder="Select your country"
      onSelectLabel="Country of registration"
      optionslist={purposeOptions}
      onSelect={handleChange}
      labelId="string"
    />
  )
  const selectComp = screen.getByTestId('select')
  expect(selectComp).toBeInTheDocument()
})

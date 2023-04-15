import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, within } from '@testing-library/react'
import AutocompleteComponent from '.'

it('renders AutocompleteComponent', () => {
  render(
    <AutocompleteComponent
      options={[
        'Zemoso technologies pvt ltd',
        'Zentech solutions pvt ltd',
        'ZedX Infotech pvt ltd',
        'Zeswe Solutions pvt ltd',
      ]}
      label="Select your business"
      isCustomListBoxReq={true}
      onOptionSelectHandler={(value: string) => {
        console.log('selected value is: ', value)
      }}
    />
  )
  const autocomplete = screen.getByTestId('autocompleteComponent')
  const input = within(autocomplete).getByRole('combobox')
  autocomplete.focus()

  fireEvent.change(input, { target: { value: 'z' } })
  fireEvent.keyDown(autocomplete, { key: 'ArrowDown' })
  fireEvent.keyDown(autocomplete, { key: 'Enter' })

  expect(autocomplete).toBeDefined()
  expect(autocomplete).toBeInTheDocument()
})

it('renders AutocompleteComponent without custom list', () => {
  render(
    <AutocompleteComponent
      options={[
        'Zemoso technologies pvt ltd',
        'Zentech solutions pvt ltd',
        'ZedX Infotech pvt ltd',
        'Zeswe Solutions pvt ltd',
      ]}
      label="Select your business"
      isCustomListBoxReq={false}
      onOptionSelectHandler={(value: string) => {
        console.log('selected value is: ', value)
      }}
    />
  )
  const autocomplete = screen.getByTestId('autocompleteComponent')

  expect(autocomplete).toBeDefined()
  expect(autocomplete).toBeInTheDocument()
})

it('renders AutocompleteComponent to test close', () => {
  render(
    <AutocompleteComponent
      options={[
        'Zemoso technologies pvt ltd',
        'Zentech solutions pvt ltd',
        'ZedX Infotech pvt ltd',
        'Zeswe Solutions pvt ltd',
      ]}
      label="Select your business"
      isCustomListBoxReq={false}
      onOptionSelectHandler={(value: string) => {
        console.log('selected value is: ', value)
      }}
      value={"ZedX Infotech pvt ltd"}
      type='Drop'
    />
  )
  const autocomplete = screen.getByTestId('autocompleteComponent')
  const input = within(autocomplete).getByRole('combobox')
  fireEvent.change(input, { target: { value: 'z' } })
  fireEvent.click(screen.getByText('Zeswe Solutions pvt ltd'))
})


it('renders AutocompleteComponent without custom icon', () => {
  render(
    <AutocompleteComponent
      options={[
        'Zemoso technologies pvt ltd',
        'Zentech solutions pvt ltd',
        'ZedX Infotech pvt ltd',
        'Zeswe Solutions pvt ltd',
      ]}
      label="Select your business"
      isCustomListBoxReq={false}
      onOptionSelectHandler={(value: string) => {
        console.log('selected value is: ', value)
      }}
      icon={"../../../assets/icons/chevron-down.svg"}
    />
  )
})
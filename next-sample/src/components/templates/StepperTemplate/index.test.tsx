import React from 'react'
import 'jest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { StepperTemplate } from '.'

it('renders StepperTabTemplate ', () => {
  render(
    <StepperTemplate
      centerComponent={<p>Center</p>}
      rightComponent={<p>Right</p>}
    />
  )
  const Template = screen.getByTestId('stepper-tab-template')
  expect(Template).toBeInTheDocument()
  expect(Template).toHaveTextContent('Center')
  expect(Template).toHaveTextContent('Right')
})

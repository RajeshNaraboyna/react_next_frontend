import React from 'react'
import 'jest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { StepperTabTemplate } from '.'

it('renders StepperTabTemplate small ', () => {
  render(
    <StepperTabTemplate
      LeftComponent={<p>left</p>}
      RightComponent={<p>right</p>}
      CenterComponent={<p>center</p>}
      isBigContainer={false}
      containerWidth="788px"
      containerHeight="641px"
    />
  )
  const Template = screen.getByTestId('stepper-tab-template')
  expect(Template).toBeInTheDocument()
})

it('renders StepperTabTemplate big ', () => {
    render(
      <StepperTabTemplate
        LeftComponent={<p>left</p>}
        RightComponent={<p>right</p>}
        CenterComponent={<p>center</p>}
        isBigContainer={true}
        containerWidth="1206px"
        containerHeight="641px"
      />
    )
    const Template = screen.getByTestId('stepper-tab-template')
    expect(Template).toBeInTheDocument()
  })

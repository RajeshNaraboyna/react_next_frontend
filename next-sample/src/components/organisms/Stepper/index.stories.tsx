import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Stepper } from '.'

export default {
  title: 'organisms/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>

const Template: ComponentStory<typeof Stepper> = (args) => (
  <Stepper {...args} />
)

export const StyledStepper = Template.bind({})
StyledStepper.args = {
  stepDataArray: [
    { label: 'Your business', content: <p>Your Business</p> },
    { label: 'Business activity', content: <p>Business activity</p> },
    { label: 'Your details', content: <p>Your details</p> },
  ],
  activeTab: 1,
}

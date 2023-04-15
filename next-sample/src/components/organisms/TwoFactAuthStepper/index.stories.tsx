import TwoFactAuthStepper from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

export default {
  title: 'organisms/TwoFactAuthStepper',
  component: TwoFactAuthStepper,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof TwoFactAuthStepper>

const Template: ComponentStory<typeof TwoFactAuthStepper> = (args: any) => (
  <TwoFactAuthStepper {...args} />
)

export const TwoFactAuthStepperOrganism = Template.bind({})
TwoFactAuthStepperOrganism.args = {
  onClickSubmit: () => {
    console.log('Submit clicked')
  },
}

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import PasswordField from '.'

export default {
  title: 'organisms/PasswordField',
  component: PasswordField,
  argTypes: {
    onClickBack: { action: 'clicked back' },
    onClickContinue: { action: 'clicked continue' },
  },
} as ComponentMeta<typeof PasswordField>

const Template: ComponentStory<typeof PasswordField> = (args) => (
  <PasswordField {...args} />
)

const onChange = (value: string) => {
  console.log(value)
}

export const PasswordStep = Template.bind({})
PasswordStep.args = {
  onClickContinue: onChange,
  onClickBack() {
      
  },
}

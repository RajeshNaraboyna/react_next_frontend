import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ButtonComponent from '.'

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  variant: 'contained',
  children: 'Sign Up',
  height: '56px',
  width: '516px',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'outlined',
  children: 'Add trading address',
  height: '56px',
  width: '218px',
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  variant: 'contained',
  children: 'Submit',
  height: '56px',
  width: '135px',
  disabled: true,
}


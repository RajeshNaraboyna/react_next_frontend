import React from 'react'
import LogoComp from '.'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Atoms/Logo',
  component: LogoComp,
} as ComponentMeta<typeof LogoComp>

const Template: ComponentStory<typeof LogoComp> = (args) => (
  <LogoComp {...args} />
)

export const Logo = Template.bind({})
Logo.args = {
  style: { height: '22px', width: '103px' },
}

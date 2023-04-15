import { SideNav } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'organisms/SideNav',
  component: SideNav,
} as ComponentMeta<typeof SideNav>

const Template: ComponentStory<typeof SideNav> = (args: any) => (
  <SideNav {...args} />
)

export const SideNavComponent = Template.bind({})
SideNavComponent.args = {
  width: '230px',
}

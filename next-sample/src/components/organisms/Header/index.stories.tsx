import { Header } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Ellipse from './../../../assets/images/Ellipse12.png'

export default {
  title: 'organisms/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args: any) => (
  <Header {...args} />
)

export const HeaderComponent = Template.bind({})
HeaderComponent.args = {
    userIcon: Ellipse,
    userName: "Ross Gener",
    userId: 'P44561754',
    handleLogout: () => {
      console.log('Logout')
    }
}

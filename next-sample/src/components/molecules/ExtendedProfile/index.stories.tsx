import { Story } from '@storybook/react'
import {
  ExtendedProfileComponent,
  ExtendedProfileComponentProps,
} from './index'

export default {
  title: 'Molecules/ExtendedProfileComponent',
  component: ExtendedProfileComponent,
}

const Template: Story<ExtendedProfileComponentProps> = (args) => (
  <ExtendedProfileComponent {...args} />
)

export const extprofile = Template.bind({})
extprofile.args = {
  name: 'Ross Gener',
  userId: 'P44561754',
  handleLogout: () => {
    console.log('Logout')
  },
}

import { AvatarComponent, AvatarComponentProps } from '.'
import { Story } from '@storybook/react'
import Ellipse from './../../../assets/images/Ellipse12.png'

export default {
  title: 'Atoms/Avatars',
  component: AvatarComponent,
}
const Template: Story<AvatarComponentProps> = (args) => (
  <AvatarComponent {...args} />
)

export const Avatar = Template.bind({})
Avatar.args = {
  src: Ellipse,
}

export const avatarLetter = Template.bind({})
avatarLetter.args = {
  letter: 'AV',
}

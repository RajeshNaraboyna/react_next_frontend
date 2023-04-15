import IconTextCard from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UserIcon from '../../../assets/icons/user_primary.svg'

export default {
  title: 'molecules/IconTextCard',
  component: IconTextCard,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof IconTextCard>

const Template: ComponentStory<typeof IconTextCard> = (args: any) => (
  <IconTextCard {...args} />
)

export const PrimaryIconTextCard = Template.bind({})
PrimaryIconTextCard.args = {
  iconSrc: UserIcon,
  primaryText: 'Personal account',
  secondaryText: 'Send, spend, and receive around the world for less.',
}

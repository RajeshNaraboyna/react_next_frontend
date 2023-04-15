import AccountTypeStepper from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'organisms/AccountTypeStepper',
  component: AccountTypeStepper,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof AccountTypeStepper>

const Template: ComponentStory<typeof AccountTypeStepper> = (args: any) => (
  <AccountTypeStepper {...args} />
)

export const AccountTypeStepperOrganism = Template.bind({})
AccountTypeStepperOrganism.args = {
  handleClick: () => {console.log("clicked business")}
}

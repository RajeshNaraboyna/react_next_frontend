import { ComponentStory, ComponentMeta } from '@storybook/react'
import PayFromYourBank from '.'

export default {
  title: 'organisms/PayFromYourBank',
  component: PayFromYourBank,
} as ComponentMeta<typeof PayFromYourBank>

const Template: ComponentStory<typeof PayFromYourBank> = (args: any) => (
  <PayFromYourBank {...args} />
)

export const PayFromYourBankOrganism = Template.bind({})
PayFromYourBankOrganism.args = {
  accountType: 'business',
  amount: '75.38 GBP',
  onClick: () => {
    console.log('clicked pay')
  },
}

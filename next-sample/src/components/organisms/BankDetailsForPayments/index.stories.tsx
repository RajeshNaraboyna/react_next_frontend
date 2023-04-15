import BankDetailsForPayments from './input'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'organisms/BankDetailsForPayments',
  component: BankDetailsForPayments,
} as ComponentMeta<typeof BankDetailsForPayments>

const Template: ComponentStory<typeof BankDetailsForPayments> = (args: any) => (
  <BankDetailsForPayments {...args} />
)

export const BankDetailsForPaymentsOrganism = Template.bind({})
const handleContinue = () => {
  console.log('continue')
}
const handleChange = () => {
  console.log('Canceled')
}
BankDetailsForPaymentsOrganism.args = {
  name: 'Mario Gabriel',
  reference: '#356778810',
  amount: '100.00 GBP',
  ukSortCode: '24-14-70',
  accNumber: '729019188810',
  bankAdress: [
    'PocketPay',
    '56 Shoreditch High Street',
    'London',
    'E16JJ',
    'United Kingdom',
  ],
  onContinue: handleContinue,
  onCancel: handleChange,
}

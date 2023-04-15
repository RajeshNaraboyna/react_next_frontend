import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TransactionStatusDetailsCard } from '.'
import { sampleTransactionDetails } from '../../../utils/constants'

export default {
  title: 'organisms/TransactionStatusDetailsCard',
  component: TransactionStatusDetailsCard,
} as ComponentMeta<typeof TransactionStatusDetailsCard>

const handleChange = (date: Date) => {
  console.log(date)
}

const Template: ComponentStory<typeof TransactionStatusDetailsCard> = (
  args: any
) => <TransactionStatusDetailsCard {...args} />

const handleCancel = () => {
  console.log('canceled')
}
const handleShare = () => {
  console.log('sharing')
}

export const TransactionStatusDetailsCardComponent = Template.bind({})
TransactionStatusDetailsCardComponent.args = {
  transactionDetails: sampleTransactionDetails,
  onCancelClick: handleCancel,
  onShareClick: handleShare,
}

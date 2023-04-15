import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { TransactionCardTab } from '.'
import { sampleTransactionDetails } from '../../../utils/constants'

export default {
  title: 'organisms/TransactionCardTab',
  component: TransactionCardTab,
} as ComponentMeta<typeof TransactionCardTab>

const Template: ComponentStory<typeof TransactionCardTab> = (args: any) => (
  <TransactionCardTab {...args} />
)
const handleCancel = () => {
  console.log('canceled')
}
const handleShare = () => {
  console.log('sharing')
}
export const TransactionCardTabComponent = Template.bind({})
export const TransactionCardTabCanceled = Template.bind({})
TransactionCardTabComponent.args = {
  transactionDetails: sampleTransactionDetails,
  onCancelClick: handleCancel,
  onShareClick: handleShare,
}

TransactionCardTabCanceled.args = {
  transactionDetails: {
    ...sampleTransactionDetails,
    transactionStatus: 'canceled',
  },
}

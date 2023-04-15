import { Box } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TransactionCard } from '.'

export default {
  title: 'organisms/TransactionCard',
  component: TransactionCard,
} as ComponentMeta<typeof TransactionCard>

const Template: ComponentStory<typeof TransactionCard> = (args: any) => (
  <Box width="564px" height="360px">
    <TransactionCard {...args} />
  </Box>
)

const handleContinue = () => {
  console.log('Continue')
}
const handleCancel = () => {
  console.log('Canceled')
}

export const TemplateCardWithButtons = Template.bind({})
export const TemplateCardWithOutButtons = Template.bind({})

TemplateCardWithButtons.args = {
  transferDetails: {
    fee: 3.61,
    rate: 1.1509,
    senderAmountBeforeDeduction: 100,
    sendingCurrency: 'GBP',
    recipientCurrency: 'EUR',
    senderAmountAfterDeduction: 77.74,
    receiverAmountAfterDeduction: 115.61,
  },
  recipientDetails: {
    firstName: 'Mario',
    lastName: 'Gabriel',
    email: 'mario.gabriel@gmail.com',
    ifscCode: 'ABFJ12929G',
    accountNumber: 21363738391910,
    accountType: 'Checking',
  },
  onContinueClick: handleContinue,
  onCancelClick: handleCancel,
  haveButtons: true,
}

TemplateCardWithOutButtons.args = {
  transferDetails: {
    fee: 3.61,
    rate: 1.1509,
    senderAmountBeforeDeduction: 100,
    sendingCurrency: 'GBP',
    recipientCurrency: 'EUR',
    senderAmountAfterDeduction: 77.74,
    receiverAmountAfterDeduction: 115.61,
  },
  recipientDetails: {
    firstName: 'Mario',
    lastName: 'Gabriel',
    email: 'mario.gabriel@gmail.com',
    ifscCode: 'ABFJ12929G',
    accountNumber: 21363738391910,
    accountType: 'Checking',
  },
}

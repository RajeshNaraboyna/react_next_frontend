import { ComponentStory, ComponentMeta } from '@storybook/react'
import ReviewStepperTab from '.'
import { RecipientDetails, TransferDetails } from '../../../utils/types'

export default {
  title: 'organisms/ReviewStepperTab',
  component: ReviewStepperTab,
} as ComponentMeta<typeof ReviewStepperTab>

const Template: ComponentStory<typeof ReviewStepperTab> = (args: any) => (
  <ReviewStepperTab {...args} />
)

export const ReviewStepperTabOrganism = Template.bind({})
ReviewStepperTabOrganism.args = {
  onContinueClick: (recipientData: RecipientDetails, transferDetails: TransferDetails) => {
    console.log(recipientData,transferDetails)
  },
  onClickBackButton: () => {
    console.log('clicked back')
  },
  sending: 'Now',
  shouldArive: 'by April 28th',
  repeats: 'Never',
  accountDetails: {
    firstName: 'Mario',
    lastName:'Gabriel',
    email: 'mario.gabriel@gmail.com',
    accountType: 'Checking',
    accountNumber: 21363738391910,
    ifscCode:''
  },
  transferDetails: {
    fee: 3.61,
    rate: 1.1509,
    senderAmountBeforeDeduction: 100,
    sendingCurrency: 'GBP',
    recipientCurrency: 'EUR',
    senderAmountAfterDeduction: 77.74,
    receiverAmountAfterDeduction: 115.61,
  },
}

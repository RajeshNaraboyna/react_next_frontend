import { PayStepperTab } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'organisms/PayStepperTab',
  component: PayStepperTab,
} as ComponentMeta<typeof PayStepperTab>

const Template: ComponentStory<typeof PayStepperTab> = (args: any) => (
  <PayStepperTab {...args} />
)

export const PayStepperTabComponent = Template.bind({})
PayStepperTabComponent.args = {
  isComingBack: false,
  backClickHandler: () => {
    console.log('clicked on back to move to prev screen')
  },
  continueClickHandler: () => {
    console.log('clicked on continue to move to next screen')
  },
  cancelClickHandler: () => {
    console.log('cancel and move to login page')
  },
  recipientDetails: {
    firstName: 'Mario',
    lastName: 'Gabriel',
    email: 'mario.gabriel@gmail.com',
    accountType: 'Checking',
    accountNumber: 21363738391910,
    ifscCode: '',
  },
  transferDetails: {
    fee: 0.0,
    rate: 1.14,
    senderAmountBeforeDeduction: 100.0,
    receiverAmountAfterDeduction: 115.61,
    sendingCurrency: 'GBP',
    recipientCurrency: 'EUR',
    senderAmountAfterDeduction: 77.74,
  },
}

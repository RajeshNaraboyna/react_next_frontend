import AmountStepper from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'organisms/AmountStepper',
  component: AmountStepper,
} as ComponentMeta<typeof AmountStepper>

const Template: ComponentStory<typeof AmountStepper> = (args: any) => (
  <AmountStepper {...args} />
)

export const PrimaryAmountStepper = Template.bind({})
PrimaryAmountStepper.args = {
    continueClickHandler: (value: any) => {
        console.log("clicked on continue", value)
    },
    backClickHandler: () => {
      console.log("clicked on back icon")
    },
    transferDetails: {
      senderAmountBeforeDeduction: 100,
      senderAmountAfterDeduction: 96.31,
      receiverAmountAfterDeduction: 115.61,
      sendingCurrency: 'GBP',
      recipientCurrency: 'EUR',
      fee: 3.69,
      rate: 0.12
    }
}
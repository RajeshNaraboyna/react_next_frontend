import PaymentRadio from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'molecules/PaymentRadio',
  component: PaymentRadio,
} as ComponentMeta<typeof PaymentRadio>

const Template: ComponentStory<typeof PaymentRadio> = (args: any) => (
  <PaymentRadio {...args} />
)

export const PaymentRadioDisplay = Template.bind({})
PaymentRadioDisplay.args = {
  handleRadioChange: (value) => {
    console.log('selected value: ', value)
  },
}

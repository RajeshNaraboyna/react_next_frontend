import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HomePageTransactionDetailsStepper } from '.'
import { durationDetailsForTimelineStepper } from '../../../utils/constants'

export default {
  title: 'organisms/HomePageTransactionDetailsStepper',
  component: HomePageTransactionDetailsStepper,
} as ComponentMeta<typeof HomePageTransactionDetailsStepper>

const handleChange = (date: Date) => {
  console.log(date)
}

const Template: ComponentStory<typeof HomePageTransactionDetailsStepper> = (
  args: any
) => <HomePageTransactionDetailsStepper {...args} />

export const TransactionDetailsStepper = Template.bind({})
TransactionDetailsStepper.args = {
  details: durationDetailsForTimelineStepper,
  height: '169px',
  width: '440px',
}

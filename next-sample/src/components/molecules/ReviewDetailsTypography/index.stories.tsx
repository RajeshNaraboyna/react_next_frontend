import ReviewDetailsTypography from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'molecules/ReviewDetailsTypography',
  component: ReviewDetailsTypography,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ReviewDetailsTypography>

const Template: ComponentStory<typeof ReviewDetailsTypography> = (
  args: any
) => <ReviewDetailsTypography {...args} />

export const PrimaryReviewDetailsTypography = Template.bind({})
PrimaryReviewDetailsTypography.args = {
  headerText: 'Transfer details',
  linkText: 'Edit',
  subHeaderTextLeft: '100.00 GBP',
  subHeaderTextRight: '114.68 EUR',
  keysValuesText: [
    {
      key: 'Fee:',
      value: '00.00 GBP',
    },
    {
      key: "Amount we'll convert:",
      value: '77.74 GBP',
    },
    {
      key: 'Guranteed rate:',
      value: '1 GBP = 1.14 EUR',
    },
  ],
}

export const SecondaryReviewDetailsTypography = Template.bind({})
SecondaryReviewDetailsTypography.args = {
  headerText: 'Recipient details',
  keysValuesText: [
    {
      key: 'Name:',
      value: 'Mario Gabriel',
    },
    {
      key: 'Email:',
      value: 'mario.gabriel@gmail.com',
    },
    {
      key: 'Account number:',
      value: '21363738391910',
    },
    {
      key: 'Account type:',
      value: 'Checking',
    },
  ],
}

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import RecipientStepperTab from '.'
import { RecipientDetails } from '../../../utils/types'

const newRecipientStepperData: RecipientDetails = {
  accountNumber: 1233456885865,
  firstName: 'Mario',
  lastName: 'Gabriel',
  ifscCode: 'ABFJ12929G',
  accountType: 'Checking',
  email: 'mario.gabriel@gmail.com',
}

export default {
  title: 'organisms/RecipientStepperTab',
  component: RecipientStepperTab,
  argTypes: {
    onContinue: { action: 'clicked continue' },
    handleBack: { action: 'clicked back' },
  },
} as ComponentMeta<typeof RecipientStepperTab>

const Template: ComponentStory<typeof RecipientStepperTab> = (args) => (
  <RecipientStepperTab {...args} />
)

export const RecipientCard = Template.bind({})
RecipientCard.args = {
  recipientData: newRecipientStepperData,
}

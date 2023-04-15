import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { ChooseYourBank } from '.'

export default {
  title: 'organisms/ChooseYourBank',
  component: ChooseYourBank,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof ChooseYourBank>

const Template: ComponentStory<typeof ChooseYourBank> = (args: any) => (
  <ChooseYourBank {...args} />
)

export const ChooseYourBankOrganism = Template.bind({})
ChooseYourBankOrganism.args = {
  onClickBank: () => {
    console.log('Clicked on Lloyds')
  },
  onClickTransactionCancel: () => {
    console.log('Confirmed cancel')
  },
}

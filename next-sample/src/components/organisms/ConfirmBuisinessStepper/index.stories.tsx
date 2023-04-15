import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ConfirmYourBusiness from '.'
import { Grid } from '@mui/material'

export default {
  title: 'organisms/ConfirmYourBusiness',
  component: ConfirmYourBusiness,
  argTypes: {},
} as ComponentMeta<typeof ConfirmYourBusiness>
const Template: ComponentStory<typeof ConfirmYourBusiness> = (args) => <Grid height='90vh'><ConfirmYourBusiness {...args} /></Grid>

export const ForYourBusinessStepper = Template.bind({})
ForYourBusinessStepper.args = {
  businessName: 'Zentech Solutions Pvt Ltd',
  registrationNum: '2020ZEN5367GJ',
  registrationAddr:
    '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
}

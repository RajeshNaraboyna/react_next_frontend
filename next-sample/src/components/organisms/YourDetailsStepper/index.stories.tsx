import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import YourDetails, { YourDetailsData } from '.'
import theme from '../../../theme/theme'
import AndorraLogo from '../../../assets/images/chn.svg'
import AustriaLogo from '../../../assets/images/ast.svg'
import IndiaLogo from '../../../assets/images/ind.svg'
import UKLogo from '../../../assets/images/uk.svg'

const countryOptions = [
  {
    code: 'AD',
    label: 'Andorra',
    logo: AndorraLogo,
    disabled: false,
  },
  {
    code: 'AE',
    label: 'United Kingdom',
    logo: UKLogo,
    disabled: false,
  },
  {
    code: 'AF',
    label: 'Austria',
    logo: AustriaLogo,
    disabled: false,
  },
  {
    code: 'AG',
    label: 'India',
    logo: IndiaLogo,
    disabled: false,
  },
]

export default {
  title: 'organisms/YourDetailsStepper',
  component: YourDetails,
  argTypes: {
    onContinue: { action: 'clicked continue' },
  },
} as ComponentMeta<typeof YourDetails>

const Template: ComponentStory<typeof YourDetails> = (args) => (
  <YourDetails {...args} />
)

export const YourDetailsStep = Template.bind({})

YourDetailsStep.args = {
  optionslist: countryOptions,
}

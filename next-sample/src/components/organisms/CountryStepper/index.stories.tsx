import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import CountryDrop from '.'
import theme from '../../../theme/theme'
import AndorraLogo from '../../../assets/images/chn.svg'
import AustriaLogo from '../../../assets/images/ast.svg'
import IndiaLogo from '../../../assets/images/ind.svg'
import UKLogo from '../../../assets/images/uk.svg'
import Vector from '../../../assets/icons/arrow-right.svg'

export default {
  title: 'organisms/CountryStepper',
  component: CountryDrop,
  argTypes: {
    onClickContinue: { action: 'clicked continue' },
    onClickBack: { action: 'clicked back' },
  },
} as ComponentMeta<typeof CountryDrop>

const countryOptions = [
  {
    code: 'AD',
    label: 'Andorra',
    logo: AndorraLogo,
    disabled: true,
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
    disabled: true,
  },
  {
    code: 'AG',
    label: 'India',
    logo: IndiaLogo,
    disabled: true,
  },
]

const Template: ComponentStory<typeof CountryDrop> = (args) => (
  <CountryDrop {...args} />
)

const onContinue = (value: string) => {
  console.log(value)
}
const onBack = () => {
  console.log('Clicker')
}

export const CountryStep = Template.bind({})
CountryStep.args = {
  onClickContinue: onContinue,
  onClickBack: onBack,
  value: '',
}
export const CountryStepWithValue = Template.bind({})
CountryStepWithValue.args = {
  onClickContinue: onContinue,
  onClickBack: onBack,
  value: 'AE',
}

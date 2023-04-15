import { ComponentMeta, ComponentStory } from '@storybook/react'
import DropDown from '.'
import AndorraLogo from '../../../assets/images/chn.svg'
import AustriaLogo from '../../../assets/images/ast.svg'
import IndiaLogo from '../../../assets/images/ind.svg'
import UKLogo from '../../../assets/images/uk.svg'

export default {
  title: 'molecules/DropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown>

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

const purposeOptions = [
  {
    code: 'AD',
    label: 'Paying rent, utilities or property charges',
    disabled: true,
  },
  {
    code: 'AE',
    label: 'Paying suppliers/contractors/employees',
    disabled: true,
  },
  {
    code: 'AF',
    label: 'Paying for goods or services abroad',
    disabled: false,
  },
  {
    code: 'AG',
    label: 'Paying tax on profit or property',
    disabled: true,
  },
]

const Template: ComponentStory<typeof DropDown> = (args: any) => (
  <DropDown {...args} />
)

export const CountryDrop = Template.bind({})
CountryDrop.args = {
  height: '60px',
  width: '516px',
  optionslist: countryOptions,
  placeholder: 'Select your country',
  onSelectLabel: 'Country of registration',
}

export const PurposeDrop = Template.bind({})
PurposeDrop.args = {
  height: '60px',
  width: '516px',
  optionslist: purposeOptions,
  placeholder: 'Tell us what you’re using PocketPay for',
  onSelectLabel: 'Tell us what you’re using PocketPay for',
}

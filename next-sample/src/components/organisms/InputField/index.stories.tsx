import { height } from '@mui/system'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import InputTextComponent from '.'

export default {
  title: 'organisms/InputTextComponent',
  component: InputTextComponent,
} as ComponentMeta<typeof InputTextComponent>

const Template: ComponentStory<typeof InputTextComponent> = (args: any) => (
  <InputTextComponent {...args} />
)

export const PasswordField = Template.bind({})
export const AddressField = Template.bind({})
export const AddressFieldEmptyValue = Template.bind({})
export const CardField = Template.bind({})
export const NameField = Template.bind({})
export const AccountField = Template.bind({})

const onChange = (value: string) => {
  console.log(value)
}

PasswordField.args = {
  label: 'Password',
  helperText: 'Enter your password',
  variantType: 'password',
  width: '516px',
  height: '60px',
  onChange: onChange,
}

AddressField.args = {
  label: 'Trading address 1',
  helperText: 'Enter address',
  variantType: 'multiline',
  width: '516px',
  height: '98px',
  value:
    '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
  onChange: onChange,
}

AddressFieldEmptyValue.args = {
  label: 'Trading address 1',
  helperText: 'Enter address',
  variantType: 'multiline',
  width: '516px',
  height: '98px',
  onChange: onChange,
}

CardField.args = {
  helperText: 'CVV / CVC',
  variantType: 'card',
  width: '308px',
  height: '60px',
  onChange: onChange,
}

NameField.args = {
  label: 'First name',
  variantType: 'standard',
  width: '516px',
  height: '60px',
  onChange: onChange,
}

AccountField.args = {
  label: 'Account number',
  variantType: 'number',
  width: '516px',
  height: '60px',
  onChange: onChange,
}

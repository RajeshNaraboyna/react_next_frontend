import { Box } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ConfirmTradingAddressComponent from '.'

export default {
  title: 'organisms/ConfirmTradingAddress',
  component: ConfirmTradingAddressComponent,
} as ComponentMeta<typeof ConfirmTradingAddressComponent>

const Template: ComponentStory<typeof ConfirmTradingAddressComponent> = (
  args: any
) => (
  <Box width="100vw" height="604px">
    <ConfirmTradingAddressComponent {...args} />
  </Box>
)

const handleChange = (addressesList: string[], address: string) => {
  console.log(addressesList)
  console.log(address)
}
export const ConfirmTradingAddress = Template.bind({})

ConfirmTradingAddress.args = {
  addresses: [
    '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    '3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003',
  ],
  onClickConfirm: handleChange,
}

import { Box } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddTradingAddress } from '.'

export default {
  title: 'organisms/AddAddress',
  component: AddTradingAddress,
} as ComponentMeta<typeof AddTradingAddress>

const Template: ComponentStory<typeof AddTradingAddress> = (args: any) => (
    <Box width="564px" height="360px">
      <AddTradingAddress {...args} />
    </Box>
)

const handleChange = (value: string) => {
  console.log(value)
}
export const PrimarySocialMediaIcons = Template.bind({})
PrimarySocialMediaIcons.args = {
  addressNumber: 3,
  onSave: handleChange,
}

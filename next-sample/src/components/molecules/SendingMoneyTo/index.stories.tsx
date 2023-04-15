import { Box } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SendingMoneyTo } from '.'

export default {
  title: 'molecules/SendingMoneyTo',
  component: SendingMoneyTo,
} as ComponentMeta<typeof SendingMoneyTo>

const Template: ComponentStory<typeof SendingMoneyTo> = (args: any) => (
  <Box width="516px">
    <SendingMoneyTo {...args} />
  </Box>
)

const onClick = () => {
  console.log('hai')
}
export const SendingMoneyToComponent = Template.bind({})
SendingMoneyToComponent.args = {
  onClick: onClick,
}

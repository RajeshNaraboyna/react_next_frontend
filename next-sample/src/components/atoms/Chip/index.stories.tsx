import { height } from '@mui/system'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import ChipComponent from '.'
import theme from '../../../theme/theme'

export default {
  title: 'atoms/ChipComponent',
  component: ChipComponent,
} as ComponentMeta<typeof ChipComponent>

const Template: ComponentStory<typeof ChipComponent> = (args: any) => (
  <ChipComponent {...args} />
)

export const NewChip = Template.bind({})

NewChip.args = {
  label: 'New',
  width: '63px',
  height: '26px',
}

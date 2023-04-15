import CheckBox from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const CheckBoxComponent = {
  title: 'atoms/CheckBox',
  component: CheckBox,
  argTypes: { onChange: { action: "checked" } },
} as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args: any) => (
  <CheckBox {...args} />
)

export const PrimaryCheckBox = Template.bind({})
PrimaryCheckBox.args = {
  width: "18px",
  height: "18px"
}

export default CheckBoxComponent

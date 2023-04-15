import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DatePickerComponent } from '.'

export default {
  title: 'organisms/DatePicker',
  component: DatePickerComponent,
} as ComponentMeta<typeof DatePickerComponent>

const handleChange = (date: Date) => {
  console.log(date)
}

const Template: ComponentStory<typeof DatePickerComponent> = (args: any) => (
  <DatePickerComponent {...args} />
)

export const DatePicker = Template.bind({})
DatePicker.args = {
  onChange: handleChange,
}

export const WithValue = Template.bind({})
WithValue.args = {
  onChange: handleChange,
  value: new Date(),
}

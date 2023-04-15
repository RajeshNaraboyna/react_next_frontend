import { Story } from '@storybook/react'
import { TypographyComponent, TypographyComponentProps } from '.'

export default {
  title: 'Atoms/Typography',
  component: TypographyComponent,
}

const Template: Story<TypographyComponentProps> = (args) => (
  <TypographyComponent {...args} />
)

export const heading = Template.bind({})
heading.args = {
  variant: 'heading1',
  children: 'Heading1',
  color: 'text_color.high_emphasis',
}

export const body1 = Template.bind({})
body1.args = {
  variant: 'body1',
  children: 'Body1',
  color: 'text_color.low_emphasis',
}

export const body2 = Template.bind({})
body2.args = {
  variant: 'body2',
  children: 'Body2',
  color: 'text_color.medium_emphasis',
}

export const body3 = Template.bind({})
body3.args = {
  variant: 'body3',
  children: 'Body3',
  color: 'text_color.high_emphasis',
}

export const caption1 = Template.bind({})
caption1.args = {
  variant: 'caption1',
  children: 'Caption1',
  color: 'text_color.main',
}

export const link_text = Template.bind({})
link_text.args = {
  variant: 'link_text',
  children: 'Link Text',
  color: 'text_color.main',
}
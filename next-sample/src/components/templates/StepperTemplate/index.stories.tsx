import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { StepperTemplate } from '.'

export default {
  title: 'templates/StepperTemplate',
  component: StepperTemplate,
} as ComponentMeta<typeof StepperTemplate>

const Template: ComponentStory<typeof StepperTemplate> = (args: any) => (
  <StepperTemplate {...args} />
)

export const StepperTemplateAvatar = Template.bind({})

StepperTemplateAvatar.args = {
  leftComponent: <p>Left</p>,
  centerComponent: <p>Center</p>,
  rightComponent: <p>Right</p>,
  bottomComponent: <p>Bottom</p>,
}

import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { StepperTabTemplate } from '.'

export default {
  title: 'templates/StepperTabTemplate',
  component: StepperTabTemplate,
} as ComponentMeta<typeof StepperTabTemplate>

const Template: ComponentStory<typeof StepperTabTemplate> = (args: any) => (
  <StepperTabTemplate {...args} />
)

export const StepperTabTemplateSmall = Template.bind({})
export const StepperTabTemplateBig = Template.bind({})

StepperTabTemplateSmall.args = {
  LeftComponent:<p>left</p>,
  RightComponent:<p>right</p>,
  CenterComponent:<p>center</p>,
  isBigContainer:false,
  containerWidth:'788px',
  containerHeight:'641px'
}

StepperTabTemplateBig.args = {
  LeftComponent:<p>left</p>,
  RightComponent:<p>right</p>,
  CenterComponent:<p>center</p>,
  isBigContainer:true,
  containerWidth:'1206px',
  containerHeight:'641px'
}

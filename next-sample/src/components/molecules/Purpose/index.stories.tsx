import { PurposeComponent } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'molecules/PurposeComponent',
  component: PurposeComponent,
} as ComponentMeta<typeof PurposeComponent>

const Template: ComponentStory<typeof PurposeComponent> = (args: any) => (
  <PurposeComponent {...args} />
)

export const PrimaryPurposeComponent = Template.bind({})
PrimaryPurposeComponent.args = {
    continueClickHandler: (value) => {
        console.log("selected drop-down option: ", value)
    },
    backClickHandler: () => {
      console.log("clicked on back icon")
    }
}

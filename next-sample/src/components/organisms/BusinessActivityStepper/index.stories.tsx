import BusinessActivityStep from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const categoryList = [
  {
    name: 'Design, marketing or communication',
    code: 'AB',
  },
  {
    name: 'Health, sports or personal care',
    code: 'AC',
  },
  {
    name: 'Real estate or construction',
    code: 'AD',
  },
  {
    name: 'Education or learning',
    code: 'AE',
  },
  {
    name: 'Others',
    code: 'AF',
  },
]

const subCategoryList = [
  {
    name: 'Real estate sale, purchase and management',
    code: 'BA',
  },
]

const businessSizeList = [
  {
    name: '50-100',
    code: 'AB',
  },
  {
    name: '100-1000',
    code: 'AC',
  },
]

export default {
  title: 'organisms/BuisinessActivityStepper',
  component: BusinessActivityStep,
  argTypes: {
    onContinue: { action: 'clicked continue' },
  },
} as ComponentMeta<typeof BusinessActivityStep>

const Template: ComponentStory<typeof BusinessActivityStep> = (args: any) => (
  <BusinessActivityStep {...args} />
)

export const BuisinessActivityStep = Template.bind({})
BuisinessActivityStep.args = {
  categoryList: categoryList,
  subCategoryList: subCategoryList,
  businessSizes: businessSizeList,
}

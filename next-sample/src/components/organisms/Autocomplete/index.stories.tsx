import Autocomplete from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import chevronDown from '../../../assets/icons/chevron-down.svg'

const AutocompleteComponent = {
  title: 'organisms/Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>

const Template: ComponentStory<typeof Autocomplete> = (args: any) => (
  <Autocomplete {...args} />
)

export const PrimaryAutocomplete = Template.bind({})
PrimaryAutocomplete.args = {
  options: [
    'Zemoso technologies pvt ltd',
    'Zentech solutions pvt ltd',
    'ZedX Infotech pvt ltd',
    'Zeswe Solutions pvt ltd',
  ],
  label: 'Select your business',
  isCustomListBoxReq: true,
  onOptionSelectHandler: (value: string) => {
    console.log('selected value is: ', value)
  },
}

export const PrimaryAutocompleteCatogery = Template.bind({})
PrimaryAutocompleteCatogery.args = {
  options: [
    'Zemoso technologies pvt ltd',
    'Zentech solutions pvt ltd',
    'ZedX Infotech pvt ltd',
    'Zeswe Solutions pvt ltd',
  ],
  label: 'Select your business',
  isCustomListBoxReq: true,
  onOptionSelectHandler: (value: string) => {
    console.log('selected value is: ', value)
  },
  icon: chevronDown,
}

export default AutocompleteComponent

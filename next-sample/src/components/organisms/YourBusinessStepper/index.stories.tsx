import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import YourBusinessStep from '.'

export default {
  title: 'organisms/YourBusinessStepper',
  component: YourBusinessStep,
  argTypes: {},
} as ComponentMeta<typeof YourBusinessStep>

const Template: ComponentStory<typeof YourBusinessStep> = (args) => (
  <YourBusinessStep {...args} />
)

const handleChange = (
  businessName: string,
  registrationNum: string,
  registrationAddr: string,
  addressesList: string[],
  address: string
) => {
  console.log(addressesList)
  console.log(address)
}

export const YourBusinessStepper = Template.bind({})
YourBusinessStepper.args = {
  options: [
    {
      name: 'Zemoso technologies pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
    {
      name: 'Zentech solutions pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
    {
      name: 'ZedX Infotech pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
    {
      name: 'Zeswe Solutions pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
    {
      name: 'TZeswe Solutions pvt ltd',
      regNum: '2020ZEN5367GJ',
      addr: '#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054',
    },
  ],
  onOptionSelectHandler: (value: string) => {
    console.log('selected value is: ', value)
  },
  onClickConfirm: handleChange,
}

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AddressRadioText } from ".";


export default{
    title: 'molecules/AddressRadioText',
    component: AddressRadioText
}as ComponentMeta<typeof AddressRadioText>

const Template: ComponentStory<typeof AddressRadioText> = (args:any) =>(
    <AddressRadioText {...args}/>
)

export const TwoAddress = Template.bind({})
export const OneAddress = Template.bind({})
const onChange =(event:any, value:string)=>{
    console.log(value);
} 

OneAddress.args={
    addresses:['#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054'],
    onChange:onChange
}

TwoAddress.args={
    addresses:['#2097, Triveni Main Rd, Gokula 1st Stage, Nanjappa Reddy Colony, Yeswanthpur, Bengaluru, Karnataka 560054', '3217, Central Avenue, 1st cross, 2nd Main Road, Unishire Victory, 2nd Main Rd, Bengaluru, Karnataka  560003'],
    onChange:onChange
}


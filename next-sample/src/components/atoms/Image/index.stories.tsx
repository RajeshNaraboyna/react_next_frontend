import { ComponentMeta, ComponentStory } from "@storybook/react";
import ImageComponent from ".";
import ShareImg from './../../../assets/images/shareImage.svg';
import Transfer from './../../../assets/images/dashBoardTransfer.svg';



export default{
    title: 'atoms/ImageComponent',
    component: ImageComponent
}as ComponentMeta<typeof ImageComponent>

const Template: ComponentStory<typeof ImageComponent> = (args:any) =>(
    <ImageComponent {...args}/>
)

export const ShareImage = Template.bind({})
export const DashBoardTransfer = Template.bind({})


ShareImage.args={
    src:ShareImg,
    width:"175px",
    height: "126px"
}

DashBoardTransfer.args={
    src:Transfer,
    width:"178px",
    height: "183px"
}

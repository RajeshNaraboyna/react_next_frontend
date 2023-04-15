import SocialMediaIcons from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FacebookIcon from '../../../assets/icons/facebook.svg'
import GoogleIcon from '../../../assets/icons/google.svg'
import AppleIcon from '../../../assets/icons/apple.svg'

export default {
    title: 'molecules/SocialMediaIcons',
    component: SocialMediaIcons
} as ComponentMeta<typeof SocialMediaIcons>

const Template: ComponentStory<typeof SocialMediaIcons> = (args: any) => (
    <SocialMediaIcons {...args}/>
);

export const PrimarySocialMediaIcons = Template.bind({})
PrimarySocialMediaIcons.args = {
    iconProps: [
        {
            src: GoogleIcon,
            onClick: () => {console.log("clicked google")}
        },
        {
            src: FacebookIcon,
            onClick: () => {console.log("clicked fb")}
        },
        {
            src: AppleIcon,
            onClick: () => {console.log("clicked apple")}
        }
    ]
}
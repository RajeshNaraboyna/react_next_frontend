import IconButton from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import UserIcon from '../../../assets/icons/user_primary.svg';
import GoogleIcon from '../../../assets/icons/google.svg';
import LinkIcon from '../../../assets/icons/link.svg';
import theme from '../../../theme/theme';

export default {
  title: 'atoms/IconButton',
  component: IconButton,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args: any) => (
  <IconButton {...args} />
);

export const DisabledIconButton = Template.bind({})
DisabledIconButton.args = {
  src: UserIcon,
  img_height: "34px",
  img_width: "34px",
  disabled: true
}

export const SecondaryStyledIconButton = Template.bind({})
SecondaryStyledIconButton.args = {
  src: LinkIcon,
  border: '1px solid',
  border_color: theme.palette.primary.primary_500,
  height: '60px',
  border_radius: '50%',
  width: '60px',
}

export const PrimaryStyledIconButton = Template.bind({})
PrimaryStyledIconButton.args = {
  src: GoogleIcon,
  border: '1px solid',
  border_color: theme.palette.grey_color.stroke_2,
  border_radius: '4px',
  padding: '16px',
}

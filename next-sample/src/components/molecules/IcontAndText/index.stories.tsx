import { Story } from '@storybook/react'
import { IconAndTextComponent, IconAndTextComponentProps } from './index'
import GbpIcon from '../../../assets/icons/gbp.svg'
import SettingsIcon from '../../../assets/icons/settings.svg'
import BusinessIcon from '../../../assets/icons/Business.svg'
import VectorIcon from '../../../assets/icons/Vector.svg'
import theme from '../../../theme/theme'

export default {
  title: 'Molecules/IconAndText',
  component: IconAndTextComponent,
}

const Template: Story<IconAndTextComponentProps> = (args) => (
  <IconAndTextComponent {...args} />
)

export const CountryIcon = Template.bind({})
CountryIcon.args = {
  variant: 'body1',
  title: 'GBP',
  color: theme.palette.text_color.high_emphasis,
  src: GbpIcon,
  gap: '10px',
  iconHeight: '24px',
  iconWidth: '24px',
}

export const SettingsTextIcon = Template.bind({})
SettingsTextIcon.args = {
  variant: 'body2',
  title: 'Settings',
  color: theme.palette.text_color.high_emphasis,
  src: SettingsIcon,
  gap: '19px',
  iconHeight: '19px',
  iconWidth: '18px',
}

export const MyBusinessTextIcon = Template.bind({})
MyBusinessTextIcon.args = {
  variant: 'body2',
  title: 'My Business',
  color: theme.palette.text_color.high_emphasis,
  src: BusinessIcon,
  gap: '16.84px',
  iconWidth: '28.33px',
  iconHeight: '26.91px',
}

export const RateIcon = Template.bind({})
RateIcon.args = {
  variant: 'body2',
  title: '1.20048',
  color: theme.palette.primary.primary_300,
  order: 'textIcon',
  src: VectorIcon,
  gap: '6px',
  imgWidth: '16px',
  imgHeight: '9.42px',
}


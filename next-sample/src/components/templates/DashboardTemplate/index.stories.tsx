import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DashboardTemplate } from '.'
import { Header } from '../../organisms/Header'
import { SideNav } from '../../organisms/SideNav'

export default {
  title: 'templates/DashboardTabTemplate',
  component: DashboardTemplate,
} as ComponentMeta<typeof DashboardTemplate>

const Template: ComponentStory<typeof DashboardTemplate> = (args: any) => (
  <DashboardTemplate {...args} />
)

export const DashboardTabTemplate = Template.bind({})

DashboardTabTemplate.args = {
  SideNavComponent: <SideNav width="230px" />,
  HeaderComponent: <Header userIcon={''} userName="test" userId="65988" />,
  BodyComponent: <p>Body</p>,
  containerWidth: '1366px',
  containerHeight: '768px',
  headerWidth: '1136px',
  sideNavWidth: '230px',
  bodyWidth: '1136px',
  bodyHeight: '709px',
}

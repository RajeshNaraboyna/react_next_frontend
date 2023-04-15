import { BalancesComponent } from '.'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IndiaIcon from '../../../assets/images/ind.svg'
import AusIcon from '../../../assets/images/aus.svg'
import AstIcon from '../../../assets/images/ast.svg'
import PlusIcon from '../../../assets/icons/plus_secondary.svg'

export default {
  title: 'molecules/BalancesComponent',
  component: BalancesComponent,
} as ComponentMeta<typeof BalancesComponent>

const Template: ComponentStory<typeof BalancesComponent> = (args: any) => (
  <BalancesComponent {...args} />
)

export const PrimaryBalancesComponent = Template.bind({})
PrimaryBalancesComponent.args = {
  headerText: 'Balances',
  iconTextValues: [
    {
      src: IndiaIcon,
      text: '10,000.00 INR',
    },
    {
      src: AstIcon,
      text: '1200 GBP',
    },
    {
      src: AusIcon,
      text: '192.00 USD',
    },
    {
      src: PlusIcon,
      text: 'Open a balance',
    },
  ],
}

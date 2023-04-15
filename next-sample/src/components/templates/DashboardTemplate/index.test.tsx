import 'jest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { DashboardTemplate } from '.'

it('renders StepperTabTemplate small ', () => {
  render(
    <DashboardTemplate
      SideNavComponent={<p>side nav</p>}
      HeaderComponent={<p>Header</p>}
      BodyComponent={<p>Body</p>}
    />
  )
  const Template = screen.getByTestId('dashboard-template')
  expect(Template).toBeInTheDocument()
})

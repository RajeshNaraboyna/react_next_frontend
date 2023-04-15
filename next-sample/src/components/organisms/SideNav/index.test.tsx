import React from 'react'
import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SideNav } from '.'

it('renders side nav', () => {
  render(
   <SideNav width='230px'/>
  )
  const sideNav = screen.getByTestId('sideNavComponent')
  expect(sideNav).toBeDefined()
  expect(sideNav).toBeInTheDocument()

  const homeTab = screen.getByText("Home")
  expect(homeTab).toBeInTheDocument()
})
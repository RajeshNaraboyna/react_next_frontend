import { render, screen } from '@testing-library/react'
import { AvatarComponent } from '.'
import '@testing-library/jest-dom'
import Ellipse from './../../../assets/images/Ellipse12.png'

it('Unit Test - Avatar', () => {
  render(<AvatarComponent src={Ellipse} />)
  const avatar = screen.getByTestId('Avatar')
  expect(avatar).toBeDefined()
  expect(avatar).toBeInTheDocument();
})

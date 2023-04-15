import 'jest'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { IconAndTextComponent } from '.'
import BusinessIcon from './../../../assets/icons/Business.svg'
import VectorIcon from './../../../assets/icons/Vector.svg'
import theme from '../../../theme/theme'

it('renders icon and text', () => {
  render(
    <IconAndTextComponent
      src={BusinessIcon}
      title="My Business"
      color={theme.palette.text_color.high_emphasis}
      gap="16.84px"
      iconWidth="28.33px"
      iconHeight="26.91px"
    />
  )
  const icontext = screen.getByTestId('iconAndText')
  expect(icontext).toBeDefined()
  expect(icontext).toBeInTheDocument()
  expect(icontext).toHaveTextContent("My Business")
})


it('renders text and icon', () => {
  render(
    <IconAndTextComponent
      src={VectorIcon}
      title="1.0542"
      color={theme.palette.primary.primary_300}
      order= 'textIcon'
      gap="6px"
      imgWidth="16px"
      imgHeight='9.42px'
    />
  )
  const textIcon = screen.getByTestId('iconAndText')
  expect(textIcon).toBeDefined()
  expect(textIcon).toBeInTheDocument()
  expect(textIcon).toHaveTextContent("1.0542")
})

import React from 'react'
import { IconButton, styled } from '@mui/material'
import theme from '../../../theme/theme'

export interface IconButtonProps {
  src?: string
  img_height?: string
  img_width?: string
  icon_color?: string
  disabled?: boolean
  border?: string
  border_color?: string
  border_radius?: string
  background_color?: string
  height?: string
  width?: string
  padding?: string
  children?: JSX.Element
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledIcon = styled(IconButton)((props: IconButtonProps) => ({
  color: props.icon_color ? props.icon_color : theme.palette.grey_color.icon_1,
  disabled: props.disabled ? props.disabled : false,
  border: props.border,
  borderColor: props.border_color,
  borderRadius: props.border_radius,
  backgroundColor: props.background_color ? props.background_color : 'none',
  height: props.height,
  width: props.width,
  padding: props.padding,
}))

const IconButtonComponent = (props: IconButtonProps) => {
  const {
    src,
    img_height,
    img_width,
    icon_color,
    disabled,
    border,
    border_color,
    border_radius,
    background_color,
    height,
    width,
    padding,
    onClick,
  } = props
  return (
    <StyledIcon
      children={
        <img
          alt="iconComponent"
          src={src}
          width={img_width}
          height={img_height}
        />
      }
      disabled={disabled}
      icon_color={icon_color}
      border={border}
      border_color={border_color}
      border_radius={border_radius}
      background_color={background_color}
      height={height}
      width={width}
      padding={padding}
      onClick={onClick}
      data-testid="iconComponent"
    />
  )
}

export default IconButtonComponent

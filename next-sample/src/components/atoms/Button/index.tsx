import React from 'react'
import theme from '../../../theme/theme'
import {
  styled,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'

interface ButtonProps extends MuiButtonProps {
  variant?: 'contained' | 'outlined'
  children?: any
  onClick?: any
  height?: string
  width?: string
  disabled?: boolean
}

const CustomButton = styled(MuiButton)((props: ButtonProps) => ({
  width: props.width,
  height: props.height,
  textTransform: 'none',
  fontFamily: theme.typography.body2.fontFamily,
  fontSize: theme.typography.body2.fontSize,
  lilneHeight: theme.typography.body2.lineHeight,
  borderRadius: '56px',

  '&.MuiButton-contained': {
    backgroundColor: props.disabled
      ? theme.palette.primary.primary_100
      : theme.palette.primary.primary_500,
    boxShadow: props.disabled ? 'none' : '0px 8px 24px rgba(85, 51, 255, 0.24)',
    color: theme.palette.structural_color.white,
  },
  '&.MuiButton-contained:hover': {
    backgroundColor: props.disabled
      ? theme.palette.primary.primary_100
      : theme.palette.primary.primary_300,
    color: theme.palette.structural_color.white,
  },
  '&.MuiButton-outlined': {
    backgroundColor: theme.palette.structural_color.white,
    boxShadow:
      '0px 8px 8px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.04), 0px 0px 1px rgba(20, 20, 20, 0.12)',
    color: theme.palette.primary.primary_500,
    border: 'none',
  },
  '&.MuiButton-outlined:hover': {
    backgroundColor: theme.palette.structural_color.button_hover,
    color: theme.palette.primary.primary_300,
  },
}))

const Button = (props: ButtonProps) => {
  const { width, height, onClick, variant, children, disabled } = props
  return (
    <CustomButton
      disabled={disabled ? disabled : false}
      data-testid="button"
      variant={variant}
      onClick={onClick}
      height={height}
      width={width}
    >
      {children}
    </CustomButton>
  )
}
export default Button

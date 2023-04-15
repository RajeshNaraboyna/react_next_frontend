import React from 'react'
import { Checkbox, styled } from '@mui/material'
import theme from '../../../theme/theme'

interface CheckboxProps {
  color?: string,
  size?: string,
  disabled?: boolean,
  checked?: boolean,
  width?: string,
  height?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

const StyledCheckbox = styled(Checkbox)((props: CheckboxProps) => ({
  color: theme.palette.primary.primary_500,
  '&.Mui-checked': {
    color: theme.palette.primary.primary_500,
  },
  size: props.size,
  width: props.width,
  height: props.height,
  padding:0,
  '& .Mui-focusVisible': {
    boxShadow: 'none',
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))

const CheckBoxComponent = (props: CheckboxProps) => {
  const { disabled, checked, onChange } = props
  return (
    <StyledCheckbox
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      data-testid="checkboxComponent"
    />
  )
}


export default CheckBoxComponent

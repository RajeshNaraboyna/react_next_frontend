import { Chip, styled } from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme'

interface ChipProps {
  label: string
  height?: string
  width?: string
  label_color?: string
  background_color?: string
}

const StyledChip = styled(Chip)((props: ChipProps) => ({
  backgroundColor: props.background_color
    ? props.background_color
    : theme.palette.structural_color.button_hover,
  width: props.width,
  height: props.height,
  '& .MuiChip-label': {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '21px',
    color: props.label_color
      ? props.label_color
      : theme.palette.primary.primary_500,
  },
}))

const ChipComponent = (props: ChipProps) => {
  const { label, width, height, background_color, label_color } = props
  return (
    <StyledChip
      data-testid="chip"
      label={label}
      height={height}
      width={width}
      background_color={background_color}
      label_color={label_color}
    />
  )
}
export default ChipComponent

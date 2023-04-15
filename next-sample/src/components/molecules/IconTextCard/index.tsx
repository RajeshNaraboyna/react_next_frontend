import { Grid, styled } from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import { TypographyComponent } from '../../atoms/Typography'

interface IconTextCardProps {
  iconSrc?: string
  primaryText?: string
  secondaryText?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  disabled?: boolean
}

interface StyledGridProp {
  disabled?: boolean
}

const StyledGrid = styled(Grid)((props: StyledGridProp) => ({
  border: '1px solid',
  borderColor: theme.palette.grey_color.stroke_2,
  borderRadius: '8px',
  width: 'fit-content',
  padding: '13px 20px 16px 20px',
  '&:hover': {
    cursor: props.disabled ? 'auto' : 'pointer',
    backgroundColor: props.disabled
      ? 'none'
      : `${theme.palette.structural_color.card_hover}`,
  },
}))

const IconTextCardComponent = (props: IconTextCardProps) => {
  const { iconSrc, primaryText, secondaryText, onClick, disabled } = props
  return (
    <StyledGrid
      data-testid="iconTextCardComponent"
      onClick={onClick}
      disabled={disabled as boolean}
    >
      <Grid
        display="flex"
        flexDirection="row"
        width="516px"
        alignItems={'center'}
      >
        <IconButtonComponent
          src={iconSrc}
          height="34px"
          width="34px"
          disabled={true}
        />
        <TypographyComponent
          variant="body2"
          children={primaryText}
          color={theme.palette.text_color.high_emphasis}
          style={{ marginLeft: '14px' }}
        />
      </Grid>
      <TypographyComponent
        variant="caption1"
        children={secondaryText}
        color={theme.palette.text_color.low_emphasis}
        style={{ marginLeft: '48px' }}
      />
    </StyledGrid>
  )
}

export default IconTextCardComponent

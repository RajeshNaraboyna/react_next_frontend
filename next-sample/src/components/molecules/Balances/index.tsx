import { Divider, Grid, styled } from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme'
import { IconAndTextComponent } from '../IcontAndText'
import { TypographyComponent } from '../../atoms/Typography'

interface BalancesProps {
  headerText: string
  iconTextValues: { src: string; text: string }[]
}

const StyledDivider = styled(Divider)(() => ({
  flexItem: true,
  width: '100%',
  borderColor: theme.palette.grey_color.stroke_2,
}))

export const BalancesComponent = (props: BalancesProps) => {
  const { headerText, iconTextValues } = props
  return (
    <Grid container gap="20px" data-testid="balancesComponent">
      <StyledDivider />
      <TypographyComponent
        variant={'caption1'}
        color={theme.palette.text_color.medium_emphasis}
        children={headerText}
        style={{ marginLeft: '20px' }}
      />
      {iconTextValues.map((value) => (
        <IconAndTextComponent
          src={value.src}
          title={value.text}
          variant={'caption1'}
          color={theme.palette.text_color.medium_emphasis}
          gap="12px"
          iconHeight="24px"
          iconWidth="24px"
          key={value.src}
          marginLeft='15px'
          padding="5px 0px 5px 5px"
          isHoverStyleReq={true}
        />
      ))}
      <StyledDivider />
    </Grid>
  )
}

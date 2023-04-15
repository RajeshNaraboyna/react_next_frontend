import { Grid, styled } from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme'
import IconButtonComponent, { IconButtonProps } from '../../atoms/Icon'

interface SocialMediaIconsProps {
  iconProps?: IconButtonProps[]
}

const StyledGrid = styled(Grid)((props: SocialMediaIconsProps) => ({
  display: 'flex',
  gap: '95px',
  alignSelf: 'center',
}))

const SocialMediaIconsComponent = (props: SocialMediaIconsProps) => {
  const { iconProps } = props
  return (
    <StyledGrid data-testid="socialMediaIconComponent">
      {iconProps!.map((iconProp: IconButtonProps) => (
          <IconButtonComponent
            src={iconProp.src}
            border='1px solid'
            border_color={theme.palette.grey_color.stroke_2}
            border_radius={'4px'}
            padding={'16px'}
            onClick={iconProp.onClick}
            key={iconProp.src}
          />
        ))}
    </StyledGrid>
  )
}

export default SocialMediaIconsComponent

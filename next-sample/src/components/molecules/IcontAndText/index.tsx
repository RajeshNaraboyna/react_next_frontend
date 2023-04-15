import React from 'react'
import { TypographyComponent } from '../../atoms/Typography/index'
import IconButtonComponent from '../../atoms/Icon'
import { Box, Grid } from '@mui/material'
import theme from '../../../theme/theme'

export interface IconAndTextComponentProps {
  title?: string | JSX.Element
  variant?: 'body1' | 'body2' | 'body3' | 'caption1'
  order?: 'iconText' | 'textIcon'
  color?: any
  src?: string
  gap?: string
  imgWidth?: string
  imgHeight?: string
  iconWidth?: string
  iconHeight?: string
  marginLeft?: string
  padding?: string
  isHoverStyleReq?: boolean
}

export const IconAndTextComponent = (props: IconAndTextComponentProps) => {
  if (props.order === 'textIcon') {
    return (
      <Grid
        container
        display="flex"
        alignItems="center"
        gap={props.gap}
        data-testid="iconAndText"
      >
        <TypographyComponent variant={props.variant} color={props.color}>
          {props.title}
        </TypographyComponent>
        <IconButtonComponent
          src={props.src}
          width={props.iconHeight}
          height={props.iconWidth}
          img_height={props.imgHeight}
          img_width={props.imgWidth}
        ></IconButtonComponent>
      </Grid>
    )
  } else {
    return (
      <Grid
        container
        display="flex"
        gap={props.gap}
        alignItems="center"
        data-testid="iconAndText"
        marginLeft={props.marginLeft}
        padding={props.padding}
        sx={
          props.isHoverStyleReq
            ? {
                ':hover': {
                  backgroundColor: theme.palette.structural_color.card_hover,
                  cursor: 'default'
                },
              }
            : null
        }
      >
        <Box display="flex" alignItems="center !important">
          <IconButtonComponent
            disabled={true}
            src={props.src}
            width={props.iconHeight}
            height={props.iconWidth}
            img_height={props.imgHeight}
            img_width={props.imgWidth}
            padding="0px"
          ></IconButtonComponent>
        </Box>
        <Box display="flex" alignItems="center !important">
          <TypographyComponent
            display="flex"
            variant={props.variant}
            color={props.color}
          >
            {props.title}
          </TypographyComponent>
        </Box>
      </Grid>
    )
  }
}

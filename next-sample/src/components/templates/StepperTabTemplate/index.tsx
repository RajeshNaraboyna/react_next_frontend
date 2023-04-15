import { Grid } from '@mui/material'
import React from 'react'

interface StepperTabTemplateProps {
  LeftComponent?: JSX.Element
  RightComponent?: JSX.Element
  CenterComponent?: JSX.Element
  containerWidth?: string
  containerHeight?: string
  isBigContainer: boolean
}
export const StepperTabTemplate = (props: StepperTabTemplateProps) => {
  const {
    LeftComponent,
    RightComponent,
    CenterComponent,
    containerHeight,
    containerWidth,
    isBigContainer,
  } = props
  return (
    <Grid
      container
      width={containerWidth}
      data-testid="stepper-tab-template"
      display={'row'}
      height={containerHeight}
    >
      <Grid key="left-grid" item xs={isBigContainer ? 1.165: 2}>
        {LeftComponent}
      </Grid>
      <Grid
        item
        xs={isBigContainer ? 9.67 : 8}
        container
        key="center-grid"
        test-id="main-container"
        marginTop="61px"
        justifyContent="center"
      >
        {CenterComponent}
      </Grid>
      <Grid
        key="right-grid"
        container
        height={containerHeight}
        item
        xs={isBigContainer ? 1.165 : 2}
        direction="column"
        display="flex"
        justifyContent={'flex-end'}
      >{RightComponent}</Grid>
    </Grid>
  )
}

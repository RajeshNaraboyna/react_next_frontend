import { Grid } from '@mui/material'
import React from 'react'


interface StepperTabTemplateProps {
  leftComponent?: JSX.Element
  rightComponent?: JSX.Element
  centerComponent?: JSX.Element
  bottomComponent?: JSX.Element
  type?: 'hasAvatar' | 'noAvatar'
}
export const StepperTemplate = (props: StepperTabTemplateProps) => {
  const {
    rightComponent: rightComponent,
    leftComponent: leftComponent,
    centerComponent: CenterComponent,
    bottomComponent,
  } = props
  return (
    <Grid direction="column" display="flex" container height='100vh'>
      <Grid item xs="auto">
      <Grid
        container
        data-testid="stepper-tab-template"
        display={'row'}
        height="73px"
        width={'100%'}
        p="0px"
      >
        <Grid
          key="left-grid"
          item
          xs={2}
          display="flex"
          justifyContent="center"
          alignItems={'center'}
        >
          {leftComponent}
        </Grid>
        <Grid
          item
          xs={8}
          container
          key="center-grid"
          test-id="main-container"
          data-testid="main-container"
          justifyContent="center"
          marginTop="31px"
        >
          {CenterComponent}
        </Grid>
        <Grid
          key="right-grid"
          item
          xs={2}
          display="flex"
          alignItems="center"
          justifyContent={'center'}
        >
          {rightComponent}
        </Grid>
      </Grid>
      </Grid>
      <Grid item xs display="flex">
      <Grid
        width={'100%'}
        display="flex"
        justifyContent="center"
        data-testid="bottom-container"
        marginTop="30px"
        paddingBottom={'24px'}
      >
        {bottomComponent}
      </Grid>
      </Grid>
    </Grid>
  )
}

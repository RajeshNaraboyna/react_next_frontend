import { Grid } from '@mui/material'

interface DashboardTemplateProps {
  SideNavComponent: JSX.Element
  HeaderComponent: JSX.Element
  BodyComponent: JSX.Element
  containerWidth?: string
  containerHeight?: string
  sideNavWidth?: string
  headerWidth?: string
  bodyWidth?: string
  bodyHeight?: string
}

export const DashboardTemplate = (props: DashboardTemplateProps) => {
  const {
    SideNavComponent,
    HeaderComponent,
    BodyComponent,
    containerHeight,
    containerWidth,
    sideNavWidth,
    headerWidth,
    bodyWidth,
    bodyHeight,
  } = props
  return (
    <Grid
      container
      width={containerWidth}
      height={containerHeight}
      data-testid="dashboard-template"
      display={'row'}
      flexWrap="nowrap"
      spacing={2}
    >
      <Grid item key="side-grid" xs={2} width={sideNavWidth}>
        {SideNavComponent}
      </Grid>
      <Grid item test-id="main-container" xs={10} justifyContent="center">
        <Grid container display="flex" direction="column">
          <Grid item width={headerWidth}>
            {HeaderComponent}
          </Grid>
          <Grid item width={bodyWidth} height={bodyHeight}>
            {BodyComponent}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

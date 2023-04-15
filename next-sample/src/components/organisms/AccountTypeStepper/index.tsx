import { Grid } from '@mui/material'
import { TypographyComponent } from '../../atoms/Typography'
import theme from '../../../theme/theme'
import IconTextCardComponent from '../../molecules/IconTextCard'
import UserIcon from '../../../assets/icons/user_primary.svg'
import BusinessIcon from '../../../assets/icons/Business.svg'
import { accountTypeStepperConsts } from '../../../utils/constants'
import IconButtonComponent from '../../atoms/Icon'
import Vector from '../../../assets/icons/arrow-right.svg'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'
import { useCallback } from 'react'

export interface AccountTypeStepperProps {
  handleClick: (arg: any) => void
  handleBackClick: () => void
}

const AccountTypeStepper = (prop: AccountTypeStepperProps) => {
  const handleBusinessClick = useCallback(() => {
    prop.handleClick(accountTypeStepperConsts.businessText)
  }, [])
  return (
    <Grid
      container
      display="flex"
      direction="column"
      data-testid="accountTypeStepper"
      alignItems={'center'}
      height='100%'
    >
      <StepperTabTemplate
        containerWidth="788px"
        containerHeight='100%'
        isBigContainer={false}
        LeftComponent={
          <IconButtonComponent
            src={Vector}
            height="32px"
            width="32px"
            onClick={prop.handleBackClick}
          />
        }
        CenterComponent={
          <Grid
            display={'flex'}
            alignItems="center"
            direction="column"
            width="516px"
          >
            <Grid>
              <Grid>
                <TypographyComponent
                  variant="heading1"
                  color={theme.palette.text_color.high_emphasis}
                  children={accountTypeStepperConsts.headingText}
                />
              </Grid>
              <Grid item paddingTop="12px">
                <TypographyComponent
                  variant="body3"
                  color={theme.palette.text_color.medium_emphasis}
                  children={accountTypeStepperConsts.headingSubText}
                />
              </Grid>
              <Grid item paddingTop="40px" width="516px">
                <IconTextCardComponent
                  iconSrc={UserIcon}
                  primaryText={accountTypeStepperConsts.personalText}
                  secondaryText={accountTypeStepperConsts.personalSecondaryText}
                  disabled={true}
                />
              </Grid>
              <Grid item paddingTop="20px" width="516px" data-testid='business'>
                <IconTextCardComponent
                  iconSrc={BusinessIcon}
                  primaryText={accountTypeStepperConsts.businessText}
                  secondaryText={accountTypeStepperConsts.businessSecondaryText}
                  onClick={handleBusinessClick}
                />
              </Grid>
            </Grid>
          </Grid>
        }
      />
    </Grid>
  )
}

export default AccountTypeStepper

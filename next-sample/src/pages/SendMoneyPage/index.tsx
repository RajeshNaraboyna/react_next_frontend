import { Box, Grid, Typography } from '@mui/material'
import { StepperTemplate } from '../../templates/StepperTemplate'
import React, { useCallback, useState, useContext } from 'react'
import LogoComp from '../../atoms/Logo'
import RightArrow from '../../../assets/icons/arrow-right.svg'
import Send from '../../../assets/icons/send_color.svg'
import SetupIcon from '../../../assets/icons/setup_color.svg'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'
import IconButtonComponent from '../../atoms/Icon'
import IconTextCardComponent from '../../molecules/IconTextCard'
import theme from '../../../theme/theme'
import { useNavigate } from 'react-router-dom'
import { ExtendedProfileComponent } from '../../molecules/ExtendedProfile'
import { AvatarComponent } from '../../atoms/Avatar'
import Ellipse from '../../../assets/images/Ellipse12.png'
import CloseLogo from '../../../assets/icons/close.svg'
import { sendMoneyPageConsts } from '../../../utils/constants'
import AuthContext, { IAuthContext } from '../../../context/AuthProvider'
import { useAuth0 } from '@auth0/auth0-react'



export const SendMoneyPage = () => {
  let navigate = useNavigate()

  const routeChangeHome = useCallback(() => {
    navigate('/home')
  }, [])
  const routeChangeTransaction = useCallback(() => {
    navigate('/transaction')
  }, [])
  const profileComponent = (
    <Grid
      container
      gap="12px"
      justifyContent={'center'}
      mt="22px"
      flexDirection="row"
      sx={{
        ':hover': {
          cursor: 'pointer',
        },
      }}
    >
      <IconButtonComponent height="13px" width="13px" src={CloseLogo} onClick={routeChangeHome}/>
    </Grid>
  )
  return (
    <Grid data-testid="send-money-page">
      <StepperTemplate
        leftComponent={<LogoComp />}
        rightComponent={profileComponent}
        bottomComponent={
          <StepperTabTemplate
            containerHeight="641px"
            containerWidth="788px"
            isBigContainer={false}
            CenterComponent={
              <Grid container display="flex" direction="column">
                <Grid item>
                  <Typography
                    variant="heading1"
                    children={sendMoneyPageConsts.sendMoneyHeader}
                  />
                </Grid>
                <Grid item paddingTop={theme.spacing(10)}>
                  <IconTextCardComponent
                    iconSrc={Send}
                    primaryText={sendMoneyPageConsts.cardPrimary1}
                    secondaryText={sendMoneyPageConsts.cardSecondary1}
                    onClick={routeChangeTransaction}
                  />
                </Grid>
                <Grid item paddingTop={theme.spacing(10)}>
                  <IconTextCardComponent
                    iconSrc={SetupIcon}
                    primaryText={sendMoneyPageConsts.cardPrimary2}
                    secondaryText={sendMoneyPageConsts.cardSecondary2}
                  />
                </Grid>
              </Grid>
            }
          />
        }
      />
    </Grid>
  )
}

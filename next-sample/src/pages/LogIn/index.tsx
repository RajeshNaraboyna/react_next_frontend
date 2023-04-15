import React from 'react'
import { Box, Grid, Link, styled } from '@mui/material'
import Button from '../../components/atoms/Button'
import { TypographyComponent } from '../../components/atoms/Typography'
import InputTextComponent from '../../components/organisms/InputField'
import theme from '../../theme/theme'
import IconButtonComponent, { IconButtonProps } from '../../components/atoms/Icon'
import CheckBoxComponent from '../../components/atoms/Checkbox'
import { StepperTemplate } from '../../components/templates/StepperTemplate'
import FacebookIcon from '../../assets/icons/facebook.svg'
import GoogleIcon from '../../assets/icons/google.svg'
import AppleIcon from '../../assets/icons/apple.svg'
import CloseLogo from '../../assets/icons/close.svg'
import { signUpConsts } from '../../utils/constants'
import { useCustomHook } from './hooks'
import LogoComp from '../../components/atoms/Logo'

export interface LogInProps {
  onLogInNextClick?: (email: string) => void
}

const StyledGrid = styled(Grid)(() => ({
  maxWidth: '516px',
  height: '100%',
}))

const iconProps = [
  {
    src: GoogleIcon,
  },
  {
    src: FacebookIcon,
    onClick: () => {},
  },
  {
    src: AppleIcon,
    onClick: () => {},
  },
]

const LogIn = (props: LogInProps) => {
  const {
    email,
    onChangeEmail,
    onChangePassword,
    password,
    enableLogin,
    onGoogleLoginClick,
    togglePageType,
    handleLogin,
  } = useCustomHook()

  return (
    <StepperTemplate
      leftComponent={<LogoComp />}
      bottomComponent={
        <Grid
          data-testid="signup-bottom"
          display="flex"
          justifyContent="center"
        >
          <StyledGrid>
            <Box sx={{ mt: '51px' }}>
              <Box sx={{ height: '40px' }}>
                <TypographyComponent
                  variant="heading1"
                  color="text_color.high_emphasis"
                  children={signUpConsts.welcomeBackLabel}
                />
              </Box>
              <Box data-testid="email" sx={{ mt: '52px' }}>
                <InputTextComponent
                  label={signUpConsts.emailLabel}
                  helperText={signUpConsts.emailYourAddrLabel}
                  variantType="standard"
                  width={'516px'}
                  height={'60px'}
                  value={email}
                  onChange={onChangeEmail}
                />
              </Box>
              <Box data-testid="password" sx={{ mt: '28px' }}>
                <InputTextComponent
                  label={signUpConsts.passwordLabel}
                  helperText={signUpConsts.enterYourPasswordLabel}
                  variantType="password"
                  width={'516px'}
                  height={'60px'}
                  onChange={onChangePassword}
                />
              </Box>
              <Box sx={{ mt: '40px' }}>
                <Button
                  width="516px"
                  variant="contained"
                  height="60px"
                  onClick={handleLogin}
                  children={
                    email && password
                      ? signUpConsts.signInLabel
                      : signUpConsts.logInLabel
                  }
                  disabled={!enableLogin}
                />
              </Box>
              <Box
                sx={{
                  mt: '20px',
                  height: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <CheckBoxComponent checked={true} />
                  <TypographyComponent
                    variant="body3"
                    color={'text_color.high_emphasis'}
                    children={signUpConsts.rememberMeLabel}
                  />
                </Box>
                <Box>
                  <Link
                    variant={'body3'}
                    color={theme.palette.primary.primary_500}
                    children={signUpConsts.troubleLogginLabel}
                    sx={{
                      textDecorationColor: theme.palette.primary.primary_500,
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  mt: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  height: '21px',
                }}
              >
                <TypographyComponent
                  variant="caption1"
                  color="text_color.medium_emphasis"
                  children={signUpConsts.orLogInLabel}
                />
              </Box>
              <Box
                sx={{
                  mt: '20px',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
                data-testid="icon-buttons"
              >
                {iconProps &&
                  iconProps.map((iconProp: IconButtonProps, index) => (
                    <IconButtonComponent
                      src={iconProp.src}
                      border="1px solid"
                      border_color={theme.palette.grey_color.stroke_2}
                      border_radius={'4px'}
                      padding={'16px'}
                      onClick={
                        index === 0 ? onGoogleLoginClick : iconProp.onClick
                      }
                      key={iconProp.src}
                    />
                  ))}
              </Box>

              <Box
                sx={{
                  width: '516px',
                  borderTop: '1px solid #E4E4E5',
                  mt: '40px',
                }}
              ></Box>
              <Box
                sx={{
                  mt: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  height: '21px',
                  alignItems: 'center',
                }}
              >
                <TypographyComponent
                  variant="caption1"
                  color="text_color.medium_emphasis"
                  children={signUpConsts.newToPocketPayLabel}
                />
                <Link
                  mx="3px"
                  variant={'link_text'}
                  color={theme.palette.primary.primary_500}
                  onClick={togglePageType}
                  children={signUpConsts.signUpLabel}
                  sx={{
                    textDecorationColor: theme.palette.primary.primary_500,
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                />
              </Box>
            </Box>
          </StyledGrid>
        </Grid>
      }
    />
  )
}

export default LogIn

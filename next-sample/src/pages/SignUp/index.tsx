import React from 'react'
import { Box, Grid, Link, styled } from '@mui/material'
import Button from '../../atoms/Button'
import { TypographyComponent } from '../../atoms/Typography'
import InputTextComponent from '../../organisms/InputField'
import theme from '../../../theme/theme'
import IconButtonComponent, {
  IconButtonProps,
} from '../../../components/atoms/Icon'
import { StepperTemplate } from '../../templates/StepperTemplate'
import FacebookIcon from '../../../assets/icons/facebook.svg'
import GoogleIcon from '../../../assets/icons/google.svg'
import AppleIcon from '../../../assets/icons/apple.svg'
import CloseLogo from '../../../assets/icons/close.svg'
import { signUpConsts } from '../../../utils/constants'
import { useCustomHook } from './hooks'
import LogoComp from '../../atoms/Logo'

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

const SignUp = () => {
  const {
    signUpEmail,
    onChangeSignUpEmail,
    enableNext,
    onNextSignUpClick,
    onGoogleLoginClick,
    togglePageType,
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
                  children={signUpConsts.createPocketPayLabel}
                />
              </Box>
              <Box data-testid="email" sx={{ mt: '52px' }}>
                {
                  <InputTextComponent
                    label={signUpConsts.emailLabel}
                    helperText={signUpConsts.emailYourAddrLabel}
                    variantType="standard"
                    width={'516px'}
                    height={'60px'}
                    value={signUpEmail}
                    onChange={onChangeSignUpEmail}
                  />
                }
              </Box>
              <Box sx={{ mt: '40px' }}>
                {
                  <Button
                    width="516px"
                    variant="contained"
                    height="60px"
                    children={signUpConsts.nextLabel}
                    disabled={!enableNext}
                    onClick={onNextSignUpClick}
                  />
                }
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
              {
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
                    children={signUpConsts.byRegisteringLabel}
                  />
                  <Link
                    mx="3px"
                    variant={'link_text'}
                    color={theme.palette.primary.primary_500}
                    children={signUpConsts.termsOfUseLabel}
                    sx={{
                      textDecorationColor: theme.palette.primary.primary_500,
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  />
                  <TypographyComponent
                    variant="caption1"
                    color="text_color.medium_emphasis"
                    children={signUpConsts.andLabel}
                  />
                  <Link
                    mx="3px"
                    variant={'link_text'}
                    color={theme.palette.primary.primary_500}
                    children={signUpConsts.privacePolicyLabel}
                    sx={{
                      textDecorationColor: theme.palette.primary.primary_500,
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  />
                </Box>
              }
              <Box
                sx={{
                  width: '516px',
                  borderTop: '1px solid #E4E4E5',
                  mt: '40px',
                }}
              ></Box>
              {
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
                    children={signUpConsts.alreadyHaveAnAccntLabel}
                  />
                  <Link
                    mx="3px"
                    variant={'link_text'}
                    color={theme.palette.primary.primary_500}
                    onClick={togglePageType}
                    children={signUpConsts.logInLinkLabel}
                    sx={{
                      textDecorationColor: theme.palette.primary.primary_500,
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  />
                </Box>
              }
            </Box>
          </StyledGrid>
        </Grid>
      }
    />
  )
}

export default SignUp

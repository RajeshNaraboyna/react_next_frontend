import Button from '../../atoms/Button'
import IconButtonComponent from '../../atoms/Icon'
import { TypographyComponent } from '../../atoms/Typography'
import InputTextComponent from '../InputField'
import { useCustomHook } from './hook'
import { Box, Grid, Link, styled } from '@mui/material'
import theme from '../../../theme/theme'
import Arrow from '../../../assets/icons/arrow-right.svg'
import { ConfirmBusinessStepperConsts } from '../../../utils/constants'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

export interface ForYourProps {
  src?: any
  onClickContinue?: any
  onClickBack?: any
  businessName: string
  registrationNum: string
  registrationAddr: string
}

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  width: '516px',
}))

const ConfirmYourBusiness = (props: ForYourProps) => {
  const {
    isInEditPage,
    handleCancelClick,
    handleContinue,
    handleBack,
    handleSaveClick,
    handleEditClick,
    businessName,
    registrationNum,
    registrationAddr,
    newBusinessName,
    newRegistrationNum,
    newRegistrationAddr,
    changeNewBusinessName,
    changeNewRegistrationNum,
    changeNewRegistrationAddr,
  } = useCustomHook(props)
  return (
    <StepperTabTemplate
      containerWidth="788px"
      containerHeight="100%"
      isBigContainer={false}
      LeftComponent={
        <Box sx={{ mt: '-61px' }}>
          <IconButtonComponent
            data-testid="backButton"
            src={Arrow}
            height="32px"
            width="32px"
            onClick={handleBack}
          />
        </Box>
      }
      CenterComponent={
        <Box height='100%'>
          <Grid height='100%' display='flex' direction='column' justifyContent={'space-between'}>
            <Box>
            <StyledGrid direction={'column'} >
              <Box sx={{ height: '40px', mt: '-61px' }}>
                <TypographyComponent
                  variant="heading1"
                  color={'text_color.high_emphasis'}
                >
                  {ConfirmBusinessStepperConsts.confirmBusinessDetailsLabel}
                </TypographyComponent>
              </Box>
              <Box sx={{ mt: '12px', height: '47px', width: '380px' }}>
                <TypographyComponent
                  variant="body3"
                  color={'text_color.medium_emphasis'}
                >
                  {ConfirmBusinessStepperConsts.registerdConfirmLabel}
                </TypographyComponent>
              </Box>
            </StyledGrid>
            <StyledGrid direction={'column'}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  direction: 'row',
                  alignItems: 'center',
                  mt: '32px',
                }}
              >
                <TypographyComponent
                  variant="caption1"
                  color={'text_color.low_emphasis'}
                >
                  {ConfirmBusinessStepperConsts.businessDetailsLabel}
                </TypographyComponent>

                {!isInEditPage && (
                  <Link
                    data-testid="confirmYouBusinessEdit"
                    variant={'link_text'}
                    color={theme.palette.primary.primary_500}
                    children={'Edit'}
                    onClick={handleEditClick}
                    sx={{
                      textDecorationColor: theme.palette.primary.primary_500,
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}
                  />
                )}
              </Box>
              <Grid container display="flex" direction="column" width="516">
                <Grid container display="flex" direction="column" width="416px">
                  {!isInEditPage ? (
                    <>
                      <Box sx={{ mt: '32px', height: '24px' }}>
                        <TypographyComponent
                          variant="body2"
                          color={'text_color.medium_emphasis'}
                        >
                          {ConfirmBusinessStepperConsts.businessNameLabel}
                        </TypographyComponent>
                      </Box>
                      <Box sx={{ mt: '12px', height: '24px' }}>
                        <TypographyComponent
                          variant="body2"
                          color={'text_color.high_emphasis'}
                        >
                          {businessName}
                        </TypographyComponent>
                      </Box>
                    </>
                  ) : (
                    <Box sx={{ mt: '32px' }}>
                      <InputTextComponent
                        label={ConfirmBusinessStepperConsts.businessNameLabel1}
                        helperText={
                          ConfirmBusinessStepperConsts.enterBusinessNameLabel
                        }
                        variantType={'standard'}
                        width={'516px'}
                        height="60px"
                        value={newBusinessName}
                        onChange={changeNewBusinessName}
                      />
                    </Box>
                  )}
                </Grid>
                <Grid container>
                  {!isInEditPage ? (
                    <>
                      <Box sx={{ height: '24px', mt: '32px' }}>
                        <TypographyComponent
                          variant="body2"
                          color={'text_color.medium_emphasis'}
                        >
                          {ConfirmBusinessStepperConsts.registeredNumberLabel}
                        </TypographyComponent>
                      </Box>
                      <Box sx={{ mt: '12px', height: '17px', width: '516px' }}>
                        <TypographyComponent
                          variant="body2"
                          color={'text_color.high_emphasis'}
                        >
                          {registrationNum}
                        </TypographyComponent>
                      </Box>
                    </>
                  ) : (
                    <Box sx={{ mt: '32px' }}>
                      <InputTextComponent
                        label={
                          ConfirmBusinessStepperConsts.registeredNumberLabel1
                        }
                        helperText={
                          ConfirmBusinessStepperConsts.enterRegNumberLabel
                        }
                        variantType={'standard'}
                        width={'516px'}
                        height="60px"
                        value={newRegistrationNum}
                        onChange={changeNewRegistrationNum}
                      />
                    </Box>
                  )}
                </Grid>
                <Grid container display="flex" direction="column" width="516px">
                  {!isInEditPage ? (
                    <>
                      <Box sx={{ height: '24px', mt: '32px' }}>
                        <TypographyComponent
                          variant="body2"
                          color={'text_color.medium_emphasis'}
                        >
                          {ConfirmBusinessStepperConsts.registrationAddrLabel}
                        </TypographyComponent>
                      </Box>
                      <Box sx={{ height: '24px', mt: '12px' }}>
                        <TypographyComponent
                          variant="body2"
                          color={'text_color.high_emphasis'}
                        >
                          {registrationAddr}
                        </TypographyComponent>
                      </Box>
                    </>
                  ) : (
                    <Box sx={{ mt: '32px' }}>
                      <InputTextComponent
                        label={
                          ConfirmBusinessStepperConsts.registrationAddrLabel1
                        }
                        helperText={
                          ConfirmBusinessStepperConsts.enterRegNumLabel
                        }
                        variantType={'multiline'}
                        width={'516px'}
                        height="98px"
                        value={newRegistrationAddr}
                        onChange={changeNewRegistrationAddr}
                      />
                    </Box>
                  )}
                </Grid>
              </Grid>
            </StyledGrid>
            </Box>
            <StyledGrid direction={'row-reverse'}>
              {isInEditPage ? (
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    mt: '50px',
                    mr: '20px',
                  }}
                >
                  <Button
                    data-testid="cancelButton"
                    height="56px"
                    variant="outlined"
                    children="Cancel"
                    width="135px"
                    onClick={handleCancelClick}
                  ></Button>
                </Box>
              ) : null}
            </StyledGrid>
          </Grid>
        </Box>
      }
      RightComponent={
        <Box>
          <Button
            data-testid="continueButton"
            height="56px"
            variant="contained"
            children={!isInEditPage ? 'Confirm' : 'Save'}
            width="135px"
            onClick={!isInEditPage ? handleContinue : handleSaveClick}
          ></Button>
        </Box>
      }
    />
  )
}

export default ConfirmYourBusiness

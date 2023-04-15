import React, { useCallback, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import theme from '../../../theme/theme'
import { TypographyComponent } from '../../atoms/Typography'
import InputTextComponent from '../InputField'
import Button from '../../atoms/Button'
import IconButtonComponent from '../../atoms/Icon'
import { passwordFieldConsts } from '../../../utils/constants'
import Vector from '../../../assets/icons/arrow-right.svg'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

export interface PasswordFieldProps {
  onClickContinue: (arg: string) => void
  onClickBack: () => void
}

const PasswordField = (props: PasswordFieldProps) => {
  const { onClickContinue, onClickBack } = props
  const [password, setPassword] = useState<string>('')
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)

  const handleContinueClick = useCallback(() => {
    onClickContinue(password)
  }, [password])

  useEffect(() => {
    setIsButtonDisabled(
      password.length >= 8 ? false : true
    )
  }, [password])

  return (
    <StepperTabTemplate
      containerWidth="788px"
      containerHeight={'100%'}
      isBigContainer={false}
      LeftComponent={
        <IconButtonComponent
          data-testid="backButton"
          src={Vector}
          height="32px"
          width="32px"
          onClick={onClickBack}
        />
      }
      CenterComponent={
        <Box
          data-testid="passwordField"
          sx={{ height: '153px', display: 'flex', justifyContent: 'center' }}
        >
          <Box sx={{ width: '512px' }}>
            <Box sx={{ height: '40px', mb: '44px' }}>
              <TypographyComponent
                color={theme.palette.text_color.high_emphasis}
                variant="heading1"
                children={passwordFieldConsts.children}
              />
            </Box>
            <Box sx={{ height: '60px' }}>
              <InputTextComponent
                data-testid="passwordInput"
                onChange={setPassword}
                width={passwordFieldConsts.inputwidth}
                height={passwordFieldConsts.inputheight}
                variantType={'password'}
                label={passwordFieldConsts.label}
                helperText={passwordFieldConsts.helperText}
                maxLength={15}
              />
            </Box>
          </Box>
        </Box>
      }
      RightComponent={
        <Button
          data-testid="continueButton"
          height="56px"
          variant="contained"
          children="Continue"
          width="135px"
          onClick={handleContinueClick}
          disabled={isButtonDisabled}
        ></Button>
      }
    />
  )
}

export default PasswordField

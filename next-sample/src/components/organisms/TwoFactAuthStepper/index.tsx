import { TypographyComponent } from '../../atoms/Typography'
import theme from '../../../theme/theme'
import {
  Box,
  FormLabel,
  Link,
  MenuItem,
  Select,
  styled,
  TextField,
} from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import Button from '../../atoms/Button'
import IconButtonComponent from '../../atoms/Icon'
import InputTextComponent from '../InputField'
import { IconAndTextComponent } from '../../molecules/IcontAndText'
import { CountryCode, TwoFactAuthStepperConst } from '../../../utils/constants'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

export interface TwoFactAuthStepperProps {
  onClickSubmit: (arg:string)=>void
  onClickBack: ()=>void
  value?: string
}

const StyledSelect = styled(Select)(() => ({
  '& .MuiSvgIcon-root': {
    right: '6px',
    top: '18px',
  },
}))

const TwoFactAuthStepper = (props: TwoFactAuthStepperProps) => {
  const { value, onClickBack, onClickSubmit } = props
  const [code, setCode] = useState('')
  const [number, setNumber] = useState(value ? value : '+44')
  const [isContinueButtonEnabled, setIsContinueButtonEnabled] = useState(false)
  const [isSubmitButtonEnabled, setIsSubmitButtonEnabled] = useState(false)
  const [isInCodePage, setIsInCodePage] = useState(false)
  const [isInAnotherPage, setIsInAnotherPage] = useState(false)

  const handleNumberChange = useCallback(
    (event: any) => {
      setNumber(event.target.value)
    },
    [number]
  )

  const handelContinueButton = useCallback(() => {
    setIsInAnotherPage(false)
    setIsInCodePage(true)
  }, [isInAnotherPage, isInCodePage])

  const handelAnotherWay = useCallback(() => {
    setIsInCodePage(false)
    setIsInAnotherPage(true)
  }, [isInCodePage, isInAnotherPage])

  const handelDifferentNumber = useCallback(() => {
    setNumber('+44')
    setCode('')
    setIsInCodePage(false)
    setIsInAnotherPage(false)
  }, [number, code, isInCodePage, isInAnotherPage])

  const handleSubmitClick = useCallback(() => {
    onClickSubmit(number)
  }, [number])

  const handleBack = useCallback(()=>{
    if(!isInCodePage && !isInAnotherPage){
      onClickBack()
    }else if(isInCodePage){
      setIsInCodePage(false)
      setIsInAnotherPage(false)
    }else if(isInAnotherPage){
      setIsInCodePage(true)
      setIsInAnotherPage(false)
    }
  },[isInAnotherPage,isInCodePage])

  useEffect(() => {
    setIsSubmitButtonEnabled(code.length >= 6)
  }, [code])

  useEffect(() => {
    setNumber(number.replace(/[a-z]/gi, ''))
    setIsContinueButtonEnabled(number.length >= 12)
  }, [number])

  const getContentBody = () => {
    if (isInCodePage)
      return (
        <Box>
          <Box
            sx={{ height: '153px', display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ width: '512px' }}>
              <Box sx={{ height: '40px', mb: '12px' }}>
                <TypographyComponent
                  variant="heading1"
                  children={TwoFactAuthStepperConst.codeHeading}
                  color={theme.palette.text_color.high_emphasis}
                />
              </Box>
              <Box sx={{ height: '24px', mb: '52px' }}>
                <TypographyComponent
                  variant="body3"
                  children={TwoFactAuthStepperConst.codeSubText}
                  color={theme.palette.text_color.medium_emphasis}
                />
                <TypographyComponent
                  variant="body3"
                  children={number}
                  color={theme.palette.text_color.medium_emphasis}
                />
              </Box>
              <Box sx={{ mb: '20px' }}>
                <InputTextComponent
                  width="516px"
                  maxLength={6}
                  height="60px"
                  label={TwoFactAuthStepperConst.codeLable}
                  helperText={TwoFactAuthStepperConst.codeHelperText}
                  onChange={setCode}
                />
              </Box>
              <Box>
                <Link
                  variant={'link_text'}
                  color={theme.palette.primary.primary_500}
                  children={TwoFactAuthStepperConst.codeLink}
                  onClick={handelAnotherWay}
                  sx={{
                    textDecorationColor: theme.palette.primary.primary_500,
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )
    else if (isInAnotherPage)
      return (
        <Box
          sx={{ height: '153px', display: 'flex', justifyContent: 'center' }}
        >
          <Box sx={{ width: '512px' }}>
            <Box sx={{ height: '40px', mb: '12px' }}>
              <TypographyComponent
                variant="heading1"
                children={TwoFactAuthStepperConst.anotherwayHeading}
                color={theme.palette.text_color.high_emphasis}
              />
            </Box>
            <Box sx={{ height: '24px', mb: '52px' }}>
              <TypographyComponent
                variant="body3"
                children={TwoFactAuthStepperConst.anotherwaySubtext}
                color={theme.palette.text_color.medium_emphasis}
              />
              <TypographyComponent
                variant="body3"
                children={number}
                color={theme.palette.text_color.medium_emphasis}
              />
            </Box>
            <Box
              sx={{ height: '50px', width: '516px', ml: '20px', md: '16px' }}
            >
              <IconAndTextComponent
                variant="caption1"
                title={TwoFactAuthStepperConst.anotherwayResend}
                gap="334px"
                color={theme.palette.text_color.high_emphasis}
                order="textIcon"
                src={TwoFactAuthStepperConst.anotherwayRightLogo}
              />
            </Box>
            <Box
              sx={{ height: '50px', width: '516px', ml: '20px', md: '20px' }}
            >
              <IconAndTextComponent
                variant="caption1"
                title={TwoFactAuthStepperConst.anotherwayCall}
                gap="315px"
                color={theme.palette.text_color.high_emphasis}
                order="textIcon"
                src={TwoFactAuthStepperConst.anotherwayRightLogo}
              />
            </Box>
            <Box sx={{ width: '224px', height: '14px' }}>
              <Link
                variant={'link_text'}
                color={theme.palette.primary.primary_500}
                children={TwoFactAuthStepperConst.anotherwayLink}
                onClick={handelDifferentNumber}
                sx={{
                  textDecorationColor: theme.palette.primary.primary_500,
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      )
    else
      return (
        <Box>
          <Box
            sx={{ height: '153px', display: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ width: '512px' }}>
              <Box sx={{ height: '40px', mb: '12px' }}>
                <TypographyComponent
                  variant="heading1"
                  children={TwoFactAuthStepperConst.phonePageHeading}
                  color={theme.palette.text_color.high_emphasis}
                />
              </Box>
              <Box sx={{ height: '24px', mb: '52px' }}>
                <TypographyComponent
                  variant="body3"
                  children={TwoFactAuthStepperConst.phonePageSubtext}
                  color={theme.palette.text_color.medium_emphasis}
                />
              </Box>
              <Box
                width="516px"
                height="60px"
                border={1}
                borderRadius="8px"
                borderColor={theme.palette.grey_color.stroke_2}
              >
                <FormLabel
                  sx={{
                    marginLeft: '0.71em',
                    marginTop: '-0.71em',
                    paddingLeft: '0.44em',
                    paddingRight: '0.44em',
                    backgroundColor: (theme) =>
                      theme.palette.background.default,
                    position: 'absolute',
                    fontSize: '14px',
                    width: 'auto',
                  }}
                >
                  Mobile Number
                </FormLabel>
                <StyledSelect
                  inputProps={{ 'data-testid': 'select' }}
                  defaultValue={value ? value.slice(0, 3) : '+44'}
                  sx={{
                    '& fieldset': { border: 'none' },
                  }}
                  IconComponent={KeyboardArrowDownOutlinedIcon}
                  onChange={handleNumberChange}
                >
                  {CountryCode.map((option) => (
                    <MenuItem data-testid='menu'key={option.value} value={option.value}>
                      <img src={option.label} />
                    </MenuItem>
                  ))}
                </StyledSelect>
                <img src={TwoFactAuthStepperConst.phonePageRectangleIcon} />
                <TextField
                  inputProps={{ 'data-testid': 'phoneInput' }}
                  sx={{
                    '& fieldset': { border: 'none' },
                  }}
                  value={number}
                  onChange={handleNumberChange}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )
  }
  return (
    <Box data-testid="twoFactorStepper">
      <StepperTabTemplate
        isBigContainer={false}
        containerWidth="788px"
        containerHeight="100%"
        LeftComponent={
          <IconButtonComponent
            data-testid="backButton"
            src={TwoFactAuthStepperConst.anotherwayRightArrow}
            height="32px"
            width="32px"
            onClick={handleBack}
          />
        }
        CenterComponent={getContentBody()}
        RightComponent={
          isInCodePage || !isInAnotherPage ? (
            <Button
              data-testid="continueButton"
              height="56px"
              variant="contained"
              children={
                isInCodePage
                  ? TwoFactAuthStepperConst.codeSubmitButton
                  : 'Continue'
              }
              width="135px"
              disabled={
                isInCodePage ? !isSubmitButtonEnabled : !isContinueButtonEnabled
              }
              onClick={isInCodePage ? handleSubmitClick : handelContinueButton}
            ></Button>
          ) : undefined
        }
      />
    </Box>
  )
}

export default TwoFactAuthStepper

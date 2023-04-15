import { Box, Grid, styled } from '@mui/material'
import CheckBoxComponent from '../../atoms/Checkbox'
import IconButtonComponent from '../../atoms/Icon'
import { TypographyComponent } from '../../atoms/Typography'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'
import InputTextComponent from '../InputField'
import Arrow from '../../../assets/icons/arrow-right.svg'
import Button from '../../atoms/Button'
import DropDown from '../../molecules/DropDown'
import { RecipientStepperConsts } from '../../../utils/constants'
import { useCustomHook } from './hook'
import { RecipientDetails } from '../../../utils/types'
import { useCallback } from 'react'
import theme from '../../../theme/theme'

const accountOptions = [
  { code: 'Checking', label: 'Checking' },
  { code: 'Savings', label: 'Savings' },
]

export interface AccountDetailsInfo {
  acctNum: string
  firstName: string
  lastName: string
  financeCode: string
  accountTypeSelected: string
  email: string
}

export interface RecipientStepperProp {
  handleBack?: any
  recipientData: RecipientDetails
  onContinue: (data: RecipientDetails) => void
}

const StyledGrid = styled(Grid)(() => ({
  maxWidth: '516px',
  boxSizing: 'border-box',
  overflow: 'scroll',
  '&::-webkit-scrollbar': { width: 0 },
  height:'max-content',
  maxHeight:'760px',
}))

const RecipientStepperTab = (props: RecipientStepperProp) => {
  const {
    email,
    onEmailChange,
    accountNumber,
    onAccountNumberChange,
    firstName,
    onFirstNameChange,
    lastName,
    onLastNameChange,
    indianFinancialCode,
    onIndianFinancialCodeChange,
    onDropChange,
    onContinueHandler,
    buttonEnable,
    checkBox,
    setCheckBox,
    accountTypeSelected,
  } = useCustomHook(props)

  const handleCheckbox = useCallback(() => {
    setCheckBox(!checkBox)
  }, [])
  return (
    <StepperTabTemplate
      containerWidth="788px"
      isBigContainer={false}
      LeftComponent={
        <Box data-testid="backButton">
          <IconButtonComponent
            src={Arrow}
            height="32px"
            width="32px"
            onClick={props.handleBack}
          />
        </Box>
      }
      CenterComponent={
        <Grid height="100%" data-testid="recipientStepper">
          <StyledGrid>
            <Box sx={{ height: '40px' }}>
              <TypographyComponent
                variant="heading1"
                color={'text_color.high_emphasis'}
                children={RecipientStepperConsts.sendToSomeOneLabel}
              />
            </Box>
            <Box data-testid="email" sx={{ mt: '30px' }}>
              <InputTextComponent
                value={email}
                label={RecipientStepperConsts.emailLabel}
                variantType="standard"
                width="516px"
                height="60px"
                onChange={onEmailChange}
              />
            </Box>
            <Box
              sx={{ height: '24px', mt: '14px' }}
              display="flex"
              flexDirection="row"
            >
              <CheckBoxComponent onChange={handleCheckbox} checked={checkBox} />
              <Box paddingLeft={theme.spacing(2.75)}>
                <TypographyComponent
                  variant="body3"
                  color={'text_color.medium_emphasis'}
                  children={RecipientStepperConsts.iKnowBankDetailsLabel}
                />
              </Box>
            </Box>
            <Box sx={{ height: '24px', mt: '32px' }}>
              <TypographyComponent
                variant="body3"
                color={'text_color.high_emphasis'}
                children={RecipientStepperConsts.recipientDetailsLabel}
              />
            </Box>
            <Box data-testid="acctNumber" sx={{ mt: '24px' }}>
              <InputTextComponent
                key={accountNumber}
                value={accountNumber}
                label={RecipientStepperConsts.acctNumberLabel}
                variantType="number"
                width="516px"
                height="60px"
                onChange={onAccountNumberChange}
              />
            </Box>
            <Box data-testid="firstName" sx={{ mt: '28px' }}>
              <InputTextComponent
                key={firstName}
                value={firstName}
                label={RecipientStepperConsts.firstNameLabel}
                variantType="standard"
                width="516px"
                height="60px"
                onChange={onFirstNameChange}
              />
            </Box>
            <Box data-testid="lastName" sx={{ mt: '28px' }}>
              <InputTextComponent
                key={lastName}
                value={lastName}
                label={RecipientStepperConsts.lastNameLabel}
                variantType="standard"
                width="516px"
                height="60px"
                onChange={onLastNameChange}
              />
            </Box>
            <Box data-testid="financeCode" sx={{ mt: '28px' }}>
              <InputTextComponent
                key={indianFinancialCode}
                value={indianFinancialCode}
                label={RecipientStepperConsts.financeCodeLabel}
                variantType="standard"
                width="516px"
                height="60px"
                onChange={onIndianFinancialCodeChange}
              />
            </Box>
            <Box data-testid="accountType" sx={{ mt: '28px' }}>
              <DropDown
                key={accountTypeSelected}
                value={accountTypeSelected}
                optionslist={accountOptions}
                height="60px"
                width="516px"
                placeholder={RecipientStepperConsts.acctTypeLabel}
                onSelectLabel="Account type"
                onSelect={onDropChange}
              />
            </Box>
          </StyledGrid>
        </Grid>
      }
      RightComponent={
        <Box data-testid="Continue">
          <Button
            height="56px"
            variant="contained"
            children={RecipientStepperConsts.continueLabel}
            width="135px"
            onClick={onContinueHandler}
            disabled={!buttonEnable}
          ></Button>
        </Box>
      }
    />
  )
}

export default RecipientStepperTab

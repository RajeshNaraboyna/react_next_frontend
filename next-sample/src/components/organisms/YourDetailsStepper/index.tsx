import React from 'react'
import { Grid, styled, Box } from '@mui/material'
import Button from '../../atoms/Button'
import { TypographyComponent } from '../../atoms/Typography'
import DropDown, { OptionsType } from '../../molecules/DropDown'
import { DatePickerComponent } from '../DatePicker'
import InputTextComponent from '../InputField'
import { useCustomHook } from './hook'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

export interface YourDetailsData {
  firstName?: string
  lastName?: string
  countrySelected?: string
  homeAddress?: string
  city?: string
  pincode?: string
  enteredDate?: Date
}

export interface YourDetailsProps {
  optionslist: OptionsType[]
  onContinue: (data: YourDetailsData) => void
  native?: true | false
}

export interface GridProps {
  sx?: any
  width?: any
}

const StyledGrid = styled(Grid)((props: GridProps) => ({
  maxWidth: '516px',
  height: 'max-content',
  boxSizing: 'border-box',
  overflow: 'scroll',
  maxHeight:'760px',
  '&::-webkit-scrollbar': { width: 0 },
}))

const YourDetailsStep = (props: YourDetailsProps) => {
  const {
    onFirstNameChange,
    onLastNameChange,
    onDateChange,
    onDropChange,
    onAddChange,
    onCityChange,
    onPinChange,
    onContinueHandler,
    buttonEnable,
  } = useCustomHook(props)

  return (
    <StepperTabTemplate
      containerWidth="788px"
      containerHeight="100%"
      isBigContainer={false}
      CenterComponent={
        <Box data-testid="yourDetails">
          <Box>
            <StyledGrid>
              <Box sx={{ height: '40px', mb: '12px' }}>
                <TypographyComponent
                  variant="heading1"
                  children="Fill in your details"
                  color="text_color.high_emphasis"
                />
              </Box>
              <Box sx={{ height: '48px', mb: '44px' }}>
                <TypographyComponent
                  variant="body2"
                  children="Since you’re opening the account, we need to know a bit more about you."
                  color="text_color.low_emphasis"
                />
              </Box>
              <Box data-testid="firstName" sx={{ mb: '28px' }}>
                <InputTextComponent
                  label="First Name"
                  variantType="standard"
                  width="516px"
                  height="60px"
                  onChange={onFirstNameChange}
                />
              </Box>
              <Box data-testid="lastName" sx={{ mb: '28px' }}>
                <InputTextComponent
                  label="Last Name"
                  variantType="standard"
                  width="516px"
                  height="60px"
                  onChange={onLastNameChange}
                />
              </Box>
              <Box data-testid="selectedDate" sx={{ mb: '28px' }}>
                <DatePickerComponent onChange={onDateChange} width="425px" />
              </Box>
              <Box data-testid="selectedCountry" sx={{ mb: '28px' }}>
                <DropDown
                  optionslist={props.optionslist}
                  placeholder={'Country of residence'}
                  height="60px"
                  width="516px"
                  onSelectLabel={'Country of residence'}
                  onSelect={onDropChange}
                  native={props.native}
                />
              </Box>
              <Box data-testid="homeAddress" sx={{ mb: '28px' }}>
                <InputTextComponent
                  label="Home address"
                  variantType="standard"
                  width="516px"
                  height="60px"
                  onChange={onAddChange}
                />
              </Box>
              <Box data-testid="city" sx={{ mb: '28px' }}>
                <InputTextComponent
                  label="City"
                  variantType="standard"
                  width="516px"
                  height="60px"
                  onChange={onCityChange}
                />
              </Box>
              <Box data-testid="pincode" sx={{ mb: '28px' }}>
                <InputTextComponent
                  label="Pincode"
                  variantType="standard"
                  width="516px"
                  height="60px"
                  onChange={onPinChange}
                />
              </Box>
            </StyledGrid>
          </Box>
        </Box>
      }
      RightComponent={
        <Box data-testid="continue">
          <Button
            variant="contained"
            height="56px"
            width="136px"
            children={'Continue'}
            onClick={onContinueHandler}
            disabled={!buttonEnable}
          />
        </Box>
      }
    ></StepperTabTemplate>
  )
}

export default YourDetailsStep

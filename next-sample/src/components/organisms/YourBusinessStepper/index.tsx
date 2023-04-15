import React from 'react'
import { Box, Grid } from '@mui/material'
import { TypographyComponent } from '../../atoms/Typography'
import Autocomplete from '../Autocomplete'
import ConfirmYourBusiness from '../ConfirmBuisinessStepper'
import ConfirmTradingAddressComponent from '../ConfirmTradingAddress'
import { useCustomHook } from './hook'
import { YourBusinessStepperConsts } from '../../../utils/constants'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

export interface CompanyData {
  name: string
  addr: string
  regNum: string
}

export interface YourBusinessProps {
  options: CompanyData[]
  onOptionSelectHandler?: (value: string) => void
  onClickConfirm: (
    businessName: string,
    registrationNum: string,
    registrationAddr: string,
    addressesList: string[],
    address: string
  ) => void
}

const YourBusinessStep = (props: YourBusinessProps) => {
  const {
    showConfirmTradingAddr,
    registrationAddr,
    isCompanySelected,
    onSelectBusinessName,
    businessName,
    registrationNum,
    clickBack,
    handleConfirmContinue,
    onConfirmTradingAddr,
  } = useCustomHook(props)

  let businessStepperComp = !isCompanySelected ? (
    <Box
      data-testid="yourBusinessStepper"
      height='100%'
      sx={{
        width: '516px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ width: '512px' }}>
        <Box sx={{ height: '40px', mb: '12px' }}>
          <TypographyComponent
            color={'text_color.high_emphasis'}
            variant="heading1"
            children={YourBusinessStepperConsts.searchBusinessStepperLabel}
          />
        </Box>
        <Box sx={{ height: '40px', mb: '44px' }}>
          <TypographyComponent
            color={'text_color.medium_emphasis'}
            variant="body3"
            children={YourBusinessStepperConsts.searchBusinessDescLabel}
          />
        </Box>
        <Box sx={{ height: '60px' }}>
          <Autocomplete
            options={props.options.map((company) => company.name)}
            label={YourBusinessStepperConsts.selectYourBusinessLabel}
            isCustomListBoxReq={true}
            onOptionSelectHandler={onSelectBusinessName}
          />
        </Box>
      </Box>
    </Box>
  ) : (
    <ConfirmYourBusiness
      businessName={businessName}
      registrationNum={registrationNum}
      registrationAddr={registrationAddr}
      onClickBack={clickBack}
      onClickContinue={handleConfirmContinue}
    />
  )

  return (
    <StepperTabTemplate
      containerWidth="788px"
      containerHeight="100%"
      isBigContainer={false}
      CenterComponent={
        <Grid>
          {showConfirmTradingAddr ? (
            <ConfirmTradingAddressComponent
              addresses={[registrationAddr]}
              onClickConfirm={onConfirmTradingAddr}
            />
          ) : (
            businessStepperComp
          )}
        </Grid>
      }
    ></StepperTabTemplate>
  )
}

export default YourBusinessStep

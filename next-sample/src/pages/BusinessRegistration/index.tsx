import React from 'react'
import { StepperTemplate } from '../../templates/StepperTemplate'
import { StepDataBusiness } from '../../../utils/types'
import YourBusinessStep from '../../organisms/YourBusinessStepper'
import {
  BusinessRegistrationConsts,
  countryOptions,
} from '../../../utils/constants'
import { Stepper } from '../../organisms/Stepper'
import BusinessActivityStepper from '../../organisms/BusinessActivityStepper'
import YourDetailsStepper from '../../organisms/YourDetailsStepper'
import { useCustomHook } from './hooks'
import LogoComp from '../../atoms/Logo'
import { Box } from '@mui/material'

export interface BusinessRegistrationProps {}

const BusinessRegistration = (props: BusinessRegistrationProps) => {
  const {
    activeTab,
    yourBusinessConfirm,
    yourBusinessActivityContinue,
    yourDetailsDataContinue,
  } = useCustomHook(props)

  const stepperDataArray: StepDataBusiness[] = [
    {
      label: 'Your business',
      content: (
        <YourBusinessStep
          options={BusinessRegistrationConsts.options}
          onClickConfirm={yourBusinessConfirm}
        />
      ),
    },
    {
      label: 'Your business Activity',
      content: (
        <BusinessActivityStepper
          categoryList={BusinessRegistrationConsts.categoryList}
          subCategoryList={BusinessRegistrationConsts.subCategoryList}
          businessSizes={BusinessRegistrationConsts.businessSizeList}
          onContinue={yourBusinessActivityContinue}
        />
      ),
    },
    {
      label: 'Your details',
      content: (
        <YourDetailsStepper
          optionslist={countryOptions}
          onContinue={yourDetailsDataContinue}
        />
      ),
    },
  ]
  return (
    <Box data-testid="business_registration">
      <StepperTemplate
        leftComponent={<LogoComp />}
        centerComponent={
          <Stepper activeTab={activeTab} stepDataArray={stepperDataArray} />
        }
        bottomComponent={stepperDataArray[activeTab].content}
      />
    </Box>
  )
}

export default BusinessRegistration

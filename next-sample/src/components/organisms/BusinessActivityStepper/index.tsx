import React from 'react'
import { Box, Grid, styled } from '@mui/material'
import { TypographyComponent } from '../../atoms/Typography'
import AutocompleteComponent from '../Autocomplete'
import chevronDown from '../../../assets/icons/chevron-down.svg'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'
import Button from '../../atoms/Button'
import { useCustomHook } from './hooks'

export interface ActivityListData {
  name: string
  code: string
}

export interface BusinessActivityData {
  category: string
  subcategory: string
  businessSize: string
}

export interface BusinessActivityProps {
  categoryList: ActivityListData[]
  subCategoryList: ActivityListData[]
  businessSizes: ActivityListData[]
  onContinue: (data: BusinessActivityData) => void
}

const StyledGrid = styled(Grid)(() => ({
  maxWidth: '516px',
  boxSizing: 'border-box',
}))

const BusinessActivityStep = (props: BusinessActivityProps) => {
  const {
    onCatogorySelectHandler,
    onSubCatogorySelectHandler,
    onBusinessSizeSelectHandler,
    onContinueHandler,
    buttonEnable,
  } = useCustomHook(props)

  return (
    <StepperTabTemplate
      isBigContainer={false}
      containerWidth="788px"
      containerHeight="100%"
      CenterComponent={
        <Grid
          data-testid="businessActivityStepper"
          display={'flex'}
          width="100%"
          justifyContent={'center'}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <StyledGrid>
              <Box sx={{ height: '40px' }}>
                <TypographyComponent
                  variant="heading1"
                  color="text_color.high_emphasis"
                  children={'Help us verify your account faster'}
                ></TypographyComponent>
              </Box>
              <Box sx={{ height: '24px', mt: '12px' }}>
                <TypographyComponent
                  variant="body3"
                  color="text_color.medium_emphasis"
                  children={
                    'Without this information we can’t verify your account'
                  }
                ></TypographyComponent>
              </Box>
              <Box data-testid="categoryAuto" sx={{ mt: '44px' }}>
                <AutocompleteComponent
                  isCustomListBoxReq={false}
                  options={props.categoryList.map((category) => category.name)}
                  label={'Category'}
                  labelMain={'Category'}
                  onOptionSelectHandler={onCatogorySelectHandler}
                  icon={chevronDown}
                  type="Drop"
                />
              </Box>
              <Box data-testid="subCategoryAuto" sx={{ mt: '28px' }}>
                <AutocompleteComponent
                  isCustomListBoxReq={false}
                  options={props.subCategoryList.map(
                    (category) => category.name
                  )}
                  labelMain={'Subcategory'}
                  label={'Subcategory'}
                  onOptionSelectHandler={onSubCatogorySelectHandler}
                  icon={chevronDown}
                  type="Drop"
                />
              </Box>
              <Box data-testid="businessSizeAuto" sx={{ mt: '28px' }}>
                <AutocompleteComponent
                  isCustomListBoxReq={false}
                  options={props.businessSizes.map((category) => category.name)}
                  label={'Size of your business'}
                  labelMain={'Size of your business'}
                  onOptionSelectHandler={onBusinessSizeSelectHandler}
                  icon={chevronDown}
                  type="Drop"
                />
              </Box>
            </StyledGrid>
          </Box>
        </Grid>
      }
      RightComponent={
        <Button
          variant="contained"
          height="56px"
          width="136px"
          children={'Continue'}
          onClick={onContinueHandler}
          disabled={!buttonEnable}
        />
      }
    />
  )
}

export default BusinessActivityStep

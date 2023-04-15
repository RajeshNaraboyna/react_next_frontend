import { Grid, Box } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import { TypographyComponent } from '../../atoms/Typography'
import Button from '../../atoms/Button'
import DropDown from '../DropDown'
import { purposeComponentConsts } from '../../../utils/constants'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

interface PurposeComponentProps {
  continueClickHandler: (arg: string) => void
  backClickHandler: () => void
}
export const PurposeComponent = (props: PurposeComponentProps) => {
  const { continueClickHandler, backClickHandler } = props
  const buttonTitle = 'Continue'
  const [dropDownOption, setDropDownOption] = useState('')
  const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(
    dropDownOption === ''
  )

  const onClickHandler = useCallback(() => {
    continueClickHandler(
      purposeComponentConsts.optionsList.filter((el) => {
        return el && el.code === dropDownOption
      })[0].label
    )
  }, [dropDownOption])

  const handleOnSelect = useCallback(
    (value: any) => {
      setDropDownOption(value)
    },
    [dropDownOption]
  )

  useEffect(() => {
    setIsContinueButtonDisabled(dropDownOption === '')
  })
  return (
    <Grid data-testid="purposeComponent" id="purposeComponentId" height='100%'>
      <StepperTabTemplate
        isBigContainer={false}
        containerWidth="788px"
        containerHeight="100%"
        LeftComponent={
          <Box padding="4px" width="24px">
            <IconButtonComponent
              src={ArrowRight}
              height="24px"
              width="24px"
              onClick={backClickHandler}
            />
          </Box>
        }
        CenterComponent={
          <Grid
            container
            width="516px"
            display="flex"
            gap="44px"
            direction="column"
          >
            <Grid
              container
              display={'flex'}
              direction="column"
              gap="12px"
              width="516px"
              justifyContent="flex-start"
            >
              <Box>
                <TypographyComponent
                  color={theme.palette.text_color.high_emphasis}
                  variant="heading1"
                >
                  {purposeComponentConsts.headerTitle}
                </TypographyComponent>
                <TypographyComponent
                  color={theme.palette.text_color.high_emphasis}
                  variant="heading2"
                  children={'?'}
                />
              </Box>
              <TypographyComponent
                color={theme.palette.text_color.medium_emphasis}
                variant="body3"
              >
                {purposeComponentConsts.subHeaderTitle}
              </TypographyComponent>
            </Grid>
            <DropDown
              height="60px"
              width="516px"
              optionslist={purposeComponentConsts.optionsList}
              placeholder={purposeComponentConsts.placeholderOrLabel}
              onSelectLabel={purposeComponentConsts.placeholderOrLabel}
              onSelect={handleOnSelect}
            />
          </Grid>
        }
        RightComponent={
          <Button
            variant="contained"
            children={buttonTitle}
            height="56px"
            width="135px"
            onClick={onClickHandler}
            disabled={isContinueButtonDisabled}
            data-testid="purposeComponentButton"
          />
        }
      />
    </Grid>
  )
}

import { Box } from '@mui/material'
import React, {  useCallback, useState, useEffect } from 'react'
import theme from '../../../theme/theme'
import { TypographyComponent } from '../../atoms/Typography'
import Button from '../../atoms/Button'
import DropDown from '../../molecules/DropDown'
import IconButtonComponent from '../../atoms/Icon'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'
import Vector from '../../../assets/icons/arrow-right.svg'
import { registrationCountryOptions } from '../../../utils/constants'

interface CountryDropProps {
  onClickContinue: (arg:string)=>void
  onClickBack: ()=>void
  value:string
}

const CountryDrop = (props: CountryDropProps) => {
  const {onClickContinue,onClickBack,value} = props
  const [selectedCountry, setCountry] = useState<string>(value?value:'')
  const [isButtonDisabled,setIsButtonDisabled] = useState<boolean>(true)

  const handleContinueClick = useCallback(() => {
    onClickContinue(selectedCountry)
  }, [selectedCountry])

  useEffect(()=>{
    setIsButtonDisabled(selectedCountry===''?true:false)
  },[selectedCountry])

  return (
    <StepperTabTemplate
      containerWidth="788px"
      containerHeight={'100%'}
      isBigContainer={false}
      LeftComponent={
        <IconButtonComponent
          src={Vector}
          height="32px"
          width="32px"
          onClick={onClickBack}
        />
      }
      RightComponent={
        <Button
          height="56px"
          variant="contained"
          children="Continue"
          width="135px"
          onClick={handleContinueClick}
          disabled={isButtonDisabled}
        ></Button>
      }
      CenterComponent={
        <Box sx={{ width: '512px' }} data-testid="countryDropField">
          <Box sx={{ height: '40px', mb: '44px' }}>
            <TypographyComponent
              color={theme.palette.text_color.high_emphasis}
              variant="heading1"
              children={'Your country of registration'}
            />
          </Box>
          <Box sx={{ height: '60px' }}>
            <DropDown
              optionslist={registrationCountryOptions}
              placeholder={'Select your country'}
              height="60px"
              width="516px"
              value={selectedCountry}
              onSelectLabel={'Country of registration'}
              onSelect={setCountry}
            />
          </Box>
        </Box>
      }
    />
  )
}

export default CountryDrop

import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  styled,
} from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme'
import { TypographyComponent } from '../../atoms/Typography'

export interface AddressRadioTextProps {
  addresses: string[]
  onChange: (event: any, arg: string) => void
}

const StyledLabel = styled(FormControlLabel)(() => ({
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  '& .MuiButtonBase-root': {
    marginRight: '28px',
    padding: '0px',
  },
  '& .Mui-checked': {
    color: `${theme.palette.primary.primary_500} !important`,
  },
  margin: '0px !important',
}))

export const AddressRadioText = (props: AddressRadioTextProps) => {
  const { addresses, onChange } = props
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={0}
        name="radio-buttons-group"
        onChange={onChange}
      >
        <Grid
          container
          display="flex"
          direction="column"
          gap={'16px'}
          width="516"
        >
          {addresses.map((address: string, index: number) => (
            <StyledLabel
              data-testid="addressRadio"
              value={index}
              control={<Radio />}
              key={address}
              label={
                <Grid
                  container
                  display="flex"
                  direction="column"
                  gap={'12px'}
                  width="416px"
                >
                  <TypographyComponent
                    variant="body2"
                    color={'text_color.medium_emphasis'}
                  >
                    {`Address ${index + 1}`}
                  </TypographyComponent>
                  <TypographyComponent
                    variant="body2"
                    color={'text_color.high_emphasis'}
                  >
                    {address}
                  </TypographyComponent>
                </Grid>
              }
            />
          ))}
        </Grid>
      </RadioGroup>
    </FormControl>
  )
}

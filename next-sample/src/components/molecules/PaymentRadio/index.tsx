import { Grid, Radio, styled } from '@mui/material'
import React, { useCallback } from 'react'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import { TypographyComponent } from '../../atoms/Typography'
import CardIcon from '../../../assets/icons/credit-card.svg'
import BankIcon from '../../../assets/icons/bank.svg'
import GlobeIcon from '../../../assets/icons/globe.svg'
import { paymentRadioConst } from '../../../utils/constants'

interface PaymentRadioProps {
  handleRadioChange: (arg: string) => void
}

const StyledGrid = styled(Grid)(() => ({
  width: '474px',
  height: '103px',
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '16px',
  alignItems: 'center',
  '& .Mui-checked': {
    color: `${theme.palette.primary.primary_500} !important`,
  },
}))

const PaymentRadioComponent = (props: PaymentRadioProps) => {
  const [selectedValue, setSelectedValue] = React.useState('bank')

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.handleRadioChange(event.target.value)
      setSelectedValue(event.target.value)
    },
    [selectedValue]
  )

  const getPayRadio = (
    iconSrc: string,
    primaryText: string,
    secondaryText: string,
    tertiaryText: string,
    radioValue: string
  ) => (
    <StyledGrid>
      <Grid container direction="row">
        <Grid item paddingTop="23px">
          <IconButtonComponent
            src={iconSrc}
            height="34px"
            width="34px"
            background_color={theme.palette.structural_color.blue}
          />
        </Grid>
        <Grid item>
          <Grid
            container
            display="flex"
            direction="column"
            style={{ marginLeft: '16px' }}
          >
            <TypographyComponent
              variant="body3"
              children={primaryText}
              color={theme.palette.text_color.high_emphasis}
              style={{ marginTop: '4px' }}
            />
            <TypographyComponent
              variant="caption1"
              children={secondaryText}
              color={theme.palette.text_color.low_emphasis}
              style={{ marginTop: '4px' }}
            />
            <TypographyComponent
              variant="caption1"
              children={tertiaryText}
              color={theme.palette.text_color.low_emphasis}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Radio
          data-testid="paymentRadio"
          checked={selectedValue === radioValue}
          onChange={handleChange}
          value={radioValue}
          name="radio-buttons"
        />
      </Grid>
    </StyledGrid>
  )
  return (
    <Grid container direction="column" data-testid="paymentTextRadio">
      <Grid item paddingBottom="12px">
        <TypographyComponent
          variant="caption1"
          children={paymentRadioConst.cardHeader}
          color={theme.palette.text_color.low_emphasis}
        />
      </Grid>
      <Grid item paddingBottom="16px">
        {getPayRadio(
          CardIcon,
          paymentRadioConst.debitText,
          paymentRadioConst.cardTypeText,
          paymentRadioConst.arriveByText,
          'debit'
        )}
      </Grid>

      <Grid item paddingBottom="20px">
        {getPayRadio(
          CardIcon,
          paymentRadioConst.creditText,
          paymentRadioConst.cardTypeText,
          paymentRadioConst.arriveByText,
          'credit'
        )}
      </Grid>
      <Grid item paddingBottom="12px">
        <TypographyComponent
          variant="caption1"
          children={paymentRadioConst.transferHeader}
          color={theme.palette.text_color.low_emphasis}
        />
      </Grid>
      <Grid item paddingBottom="20px">
        {getPayRadio(
          BankIcon,
          paymentRadioConst.transferText,
          paymentRadioConst.transferTypeText,
          paymentRadioConst.arriveByText,
          'bank'
        )}
      </Grid>
      <Grid item>
        <TypographyComponent
          variant="caption1"
          children={paymentRadioConst.advTransferHeader}
          color={theme.palette.text_color.low_emphasis}
        />
      </Grid>
      <Grid item>
        {getPayRadio(
          GlobeIcon,
          paymentRadioConst.swiftText,
          paymentRadioConst.swiftTypeText,
          paymentRadioConst.arriveByText,
          'swift'
        )}
      </Grid>
    </Grid>
  )
}
export default PaymentRadioComponent

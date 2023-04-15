import { Box, Grid, Link, styled } from '@mui/material'
import { TypographyComponent } from '../../atoms/Typography'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import Button from '../../atoms/Button'
import { BankDetailsForPaymentsConsts } from '../../../utils/constants'

export interface BankDetailsForPaymentsProps {
  name: string
  reference: string
  amount: string
  ukSortCode: string
  accNumber: string
  bankAdress: string[]
  onContinue: () => void
  onCancel: () => void
}
const StyledGrid = styled(Grid)(() => ({
  border: '1px solid',
  backgroundColor: theme.palette.structural_color.white,
  borderColor: theme.palette.grey_color.stroke_2,
  borderRadius: '16px',
  width: '516px',
  paddingLeft: `${theme.spacing(8)}`,
  paddingRight: `${theme.spacing(8)}`,
  paddingBottom: `${theme.spacing(8)}`,
}))
const BankDetailsForPayments = (props: BankDetailsForPaymentsProps) => {
  const bankDetails = (primaryText: string, secondaryText: string[]) => (
    <Grid container display="flex" direction="column">
      <Grid item>
        <TypographyComponent
          variant="caption1"
          color={theme.palette.text_color.low_emphasis}
          children={primaryText}
        />
      </Grid>
      {secondaryText.map((strvalue: string, index: number) => (
        <Grid item key={strvalue}>
          <TypographyComponent
            variant="caption1"
            color={theme.palette.text_color.high_emphasis}
            children={strvalue}
          />
        </Grid>
      ))}
    </Grid>
  )
  const {
    name,
    reference,
    amount,
    ukSortCode,
    accNumber,
    bankAdress,
    onContinue,
    onCancel,
  } = props
  return (
    <StyledGrid
      container
      display="flex"
      direction="column"
      data-testid="bankDetails"
    >
      <Grid item marginTop={theme.spacing(4)} paddingBottom="10px">
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButtonComponent
            img_width="15.08px"
            img_height="15.74px"
            border="2px solid"
            border_color={theme.palette.structural_color.card_hover}
            src={BankDetailsForPaymentsConsts.lloydsIcon}
          ></IconButtonComponent>
        </Box>
      </Grid>
      <Grid item paddingBottom="27px">
        <TypographyComponent
          variant="body1"
          color={theme.palette.text_color.high_emphasis}
          children={BankDetailsForPaymentsConsts.headerText}
        />
        <TypographyComponent
          variant="caption1"
          color={theme.palette.text_color.medium_emphasis}
          children={BankDetailsForPaymentsConsts.headerSubText}
        />
      </Grid>
      <Grid item paddingBottom={theme.spacing(5)}>
        <Grid container display="flex" direction="row" spacing={2}>
          <Grid item xs={8}>
            {bankDetails(BankDetailsForPaymentsConsts.payeeName, [name])}
          </Grid>
          <Grid item xs={4}>
            {bankDetails(BankDetailsForPaymentsConsts.referenceText, [
              reference,
            ])}
          </Grid>
        </Grid>
      </Grid>
      <Grid item paddingBottom={theme.spacing(5)}>
        <Grid container display="flex" direction="row" spacing={2}>
          <Grid item xs={8}>
            {bankDetails(BankDetailsForPaymentsConsts.amountText, [amount])}
          </Grid>
          <Grid item xs={4}>
            {bankDetails(BankDetailsForPaymentsConsts.ukSortCodeText, [
              ukSortCode,
            ])}
          </Grid>
        </Grid>
      </Grid>
      <Grid item paddingBottom={theme.spacing(10)}>
        {bankDetails(BankDetailsForPaymentsConsts.accNumberText, [accNumber])}
      </Grid>
      <Grid item paddingBottom={theme.spacing(10)}>
        {bankDetails(BankDetailsForPaymentsConsts.bankAddressText, bankAdress)}
      </Grid>
      <Grid item paddingBottom={theme.spacing(10)}>
        <TypographyComponent
          variant="caption1"
          color={theme.palette.text_color.low_emphasis}
          children={BankDetailsForPaymentsConsts.linkText1}
        />
        <Link
          variant={'link_text'}
          color={theme.palette.primary.primary_500}
          children={BankDetailsForPaymentsConsts.linkText2}
          sx={{
            textDecorationColor: theme.palette.primary.primary_500,
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        />
        <TypographyComponent
          variant="caption1"
          color={theme.palette.text_color.low_emphasis}
          children={BankDetailsForPaymentsConsts.linkText3}
        />
      </Grid>
      <Grid item paddingBottom={theme.spacing(4)}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            children={BankDetailsForPaymentsConsts.buttonContinueText}
            height="50px"
            width="200px"
            onClick={onContinue}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box display="flex" justifyContent="center" alignItems="center" marginBottom={'48px'}>
          <Button
            variant="outlined"
            children={BankDetailsForPaymentsConsts.buttonCancelText}
            height="56px"
            width="218px"
            onClick={onCancel}
          />
        </Box>
      </Grid>
    </StyledGrid>
  )
}

export default BankDetailsForPayments

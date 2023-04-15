import { Grid } from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme'
import { RecipientDetails, TransferDetails } from '../../../utils/types'
import Button from '../../atoms/Button'
import IconButtonComponent from '../../atoms/Icon'
import { TypographyComponent } from '../../atoms/Typography'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import { transactionCardConsts } from '../../../utils/constants'

interface TransactionCardProps {
  onContinueClick?: () => void
  onCancelClick?: () => void
  recipientDetails: RecipientDetails
  transferDetails: TransferDetails
  width?: string
  height?: string
  haveButtons?: boolean
  isButtonEnabled?: boolean
}

interface CustomBoxProps {
  leftText: string
  rightText: string
}

const CustomBox = (props: CustomBoxProps) => {
  const { leftText, rightText } = props
  return (
    <Grid display={'flex'} justifyContent="space-between">
      <TypographyComponent
        variant="body2"
        color={theme.palette.text_color.medium_emphasis}
      >
        {leftText}
      </TypographyComponent>
      <TypographyComponent
        variant="body2"
        color={theme.palette.text_color.high_emphasis}
      >
        {rightText}
      </TypographyComponent>
    </Grid>
  )
}

export const TransactionCard = (props: TransactionCardProps) => {
  const {
    onContinueClick,
    onCancelClick,
    recipientDetails,
    transferDetails,
    width,
    height,
    haveButtons,
  } = props

  const {
    senderAmountBeforeDeduction,
    sendingCurrency,
    recipientCurrency,
    rate,
    senderAmountAfterDeduction,
    receiverAmountAfterDeduction,
    fee
  } = transferDetails

  return (
    <Grid
      container
      display="flex"
      direction={'column'}
      width={width ? width : '476px'}
      height={height ? height : '652px'}
      gap="32px"
      padding="48px 32px"
      borderRadius={'16px'}
      border={`1px solid ${theme.palette.grey_color.stroke_2}`}
      data-testid="transaction-card"
    >
      <Grid container width="100%" gap={'16px'}>
        <TypographyComponent
          variant="caption1"
          color={theme.palette.text_color.low_emphasis}
        >
          {transactionCardConsts.heading}
        </TypographyComponent>
        <Grid container direction="column" width="100%" gap="12px">
          <Grid
            container
            display={'flex'}
            alignItems="center"
            gap="10px"
            direction={'row'}
          >
            <TypographyComponent
              variant="body2"
              color={theme.palette.text_color.high_emphasis}
            >
              {senderAmountBeforeDeduction + ' ' + sendingCurrency}
            </TypographyComponent>
            <IconButtonComponent src={ArrowRight} width="24px" height="24px" />
            <TypographyComponent
              variant="body2"
              color={theme.palette.text_color.high_emphasis}
            >
              {receiverAmountAfterDeduction +
                ' ' +
                recipientCurrency}
            </TypographyComponent>
          </Grid>
          <CustomBox
            leftText="Fee:"
            rightText={`${fee.toFixed(2)} ${sendingCurrency}`}
          />
          <CustomBox
            leftText="Amount we’ll convert:"
            rightText={`${senderAmountAfterDeduction.toFixed(2)} ${sendingCurrency}`}
          />
          <CustomBox
            leftText="Guaranteed rate:"
            rightText={`1 ${sendingCurrency} = ${rate} ${recipientCurrency}`}
          />
        </Grid>
      </Grid>
      <Grid
        container
        display="flex"
        width="100%"
        gap={'16px'}
        direction="column"
      >
        <TypographyComponent
          variant="caption1"
          color={theme.palette.text_color.low_emphasis}
        >
          {transactionCardConsts.recipient}
        </TypographyComponent>
        <Grid container direction="column" width="100%" gap="12px">
          <CustomBox
            leftText="Name:"
            rightText={`${recipientDetails.firstName} ${recipientDetails.lastName}`}
          />
          <CustomBox leftText="Email:" rightText={recipientDetails.email} />
          <CustomBox
            leftText="Account number:"
            rightText={`${recipientDetails.accountNumber}`}
          />
        </Grid>
        <CustomBox
          leftText="Account type:"
          rightText={recipientDetails.accountType}
        />
      </Grid>
      {haveButtons && (
        <Grid container display={'flex'} gap="20px" justifyContent={'center'}>
          <Button
            variant="contained"
            width="218px"
            height="56px"
            onClick={onContinueClick}
            disabled={props.isButtonEnabled !== undefined ? !props.isButtonEnabled : false}
          >
            {transactionCardConsts.continueButton}
          </Button>
          <Button
            variant="outlined"
            width="218px"
            height="56px"
            onClick={onCancelClick}
          >
            {transactionCardConsts.cancelButton}
          </Button>
        </Grid>
      )}
    </Grid>
  )
}

import { Box, Grid } from '@mui/material'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import { TypographyComponent } from '../../atoms/Typography'
import RightArrow from '../../../assets/icons/arrow-right.svg'
import Button from '../../atoms/Button'
import InputTextComponent from '../InputField'
import { RecipientDetails, TransferDetails } from '../../../utils/types'
import { useCustomHook } from './hooks'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'
import ReviewDetailsTypography from '../../molecules/ReviewDetailsTypography'
import { reviewStepperTabConst } from '../../../utils/constants'

export interface ReviewStepperTabProps {
  accountDetails: RecipientDetails
  transferDetails: TransferDetails
  sending: string
  shouldArive: string
  repeats: string
  onContinueClick: any
  onClickBackButton: any
}

const ReviewStepperTab = (props: ReviewStepperTabProps) => {
  const {
    currentAccountDetails,
    currentName,
    currentEmail,
    currentAccNumber,
    currentAccType,
    isEditTransfer,
    isEditRecipient,
    currentAmount,
    currentTransferDetails,
    currentFee,
    currentRate,
    currentConvert,
    setName,
    setEmail,
    setAccNumber,
    setAccType,
    handleEditClick,
    handleEditRecipient,
    handleAmountChange,
    handleTextChange,
    getCancelHandler,
    getSaveHandler,
    handleContinueClick,
    handleAccountNumberChange
  } = useCustomHook(props)

  const getContentBody = () => {
    if (isEditTransfer) {
      return (
        <>
          <Grid item>
            <TypographyComponent
              variant="caption1"
              color={theme.palette.text_color.low_emphasis}
              children={reviewStepperTabConst.transferText}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(8)}>
            <InputTextComponent
              width="516px"
              height="60px"
              helperText={reviewStepperTabConst.amountText}
              label={reviewStepperTabConst.amountText}
              value={currentAmount?.toFixed(2)}
              onChange={handleAmountChange}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(8)}>
            <InputTextComponent
              width="516px"
              height="60px"
              helperText={reviewStepperTabConst.feeText}
              label={reviewStepperTabConst.feeText}
              key={currentFee}
              value={currentFee + ' ' + props.transferDetails.sendingCurrency}
              disabled={true}
              onChange={handleTextChange}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(8)}>
            <InputTextComponent
              width="516px"
              height="60px"
              helperText={reviewStepperTabConst.amountConvertText}
              label={reviewStepperTabConst.amountConvertText}
              key={currentConvert}
              value={
                currentConvert + ' ' + props.transferDetails.sendingCurrency
              }
              disabled={true}
              onChange={handleTextChange}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(8)}>
            <InputTextComponent
              width="516px"
              height="60px"
              helperText={reviewStepperTabConst.ratetext}
              label={reviewStepperTabConst.ratetext}
              disabled={true}
              key={currentRate}
              value={
                '1 ' +
                props.transferDetails.sendingCurrency +
                ' = ' +
                currentRate +
                ' ' +
                props.transferDetails.recipientCurrency
              }
              onChange={handleTextChange}
            />
          </Grid>
        </>
      )
    } else if (isEditRecipient) {
      return (
        <>
          <Grid item>
            <TypographyComponent
              variant="caption1"
              color={theme.palette.text_color.low_emphasis}
              children={reviewStepperTabConst.businessDetailsText}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(8)}>
            <InputTextComponent
              width="516px"
              height="60px"
              helperText={reviewStepperTabConst.nameText}
              label={reviewStepperTabConst.nameText}
              value={currentName}
              onChange={setName}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(8)}>
            <InputTextComponent
              width="516px"
              height="60px"
              helperText={reviewStepperTabConst.emailText}
              label={reviewStepperTabConst.emailText}
              value={currentEmail}
              onChange={setEmail}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(8)}>
            <InputTextComponent
              width="516px"
              height="60px"
              helperText={reviewStepperTabConst.accountNumberText}
              label={reviewStepperTabConst.accountNumberText}
              value={currentAccNumber as number}
              variantType="number"
              onChange={handleAccountNumberChange}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(8)}>
            <InputTextComponent
              width="516px"
              height="60px"
              helperText={reviewStepperTabConst.accountType}
              label={reviewStepperTabConst.accountType}
              value={currentAccType}
              onChange={setAccType}
            />
          </Grid>
        </>
      )
    } else {
      return (
        <>
          <Grid item>
            <ReviewDetailsTypography
              headerText={reviewStepperTabConst.subHeading1}
              linkText="Edit"
              subHeaderTextLeft={
                currentTransferDetails.senderAmountBeforeDeduction?.toFixed(2) +
                ' ' +
                currentTransferDetails.sendingCurrency
              }
              subHeaderTextRight={
                currentTransferDetails.receiverAmountAfterDeduction?.toFixed(2) +
                ' ' +
                currentTransferDetails.recipientCurrency
              }
              onClick={handleEditClick}
              keysValuesText={[
                {
                  key: reviewStepperTabConst.feeText + ':',
                  value: `${
                    currentTransferDetails.fee.toFixed(2) +
                    ' ' +
                    currentTransferDetails.sendingCurrency
                  }`,
                },
                {
                  key: reviewStepperTabConst.amountConvertText + ':',
                  value: `${
                    currentTransferDetails.senderAmountAfterDeduction.toFixed(2) +
                    ' ' +
                    currentTransferDetails.sendingCurrency
                  }`,
                },
                {
                  key: reviewStepperTabConst.ratetext + ':',
                  value: `${
                    '1 ' +
                    currentTransferDetails.sendingCurrency +
                    ' = ' +
                    currentTransferDetails.rate +
                    ' ' +
                    currentTransferDetails.recipientCurrency
                  }`,
                },
              ]}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(10)}>
            <ReviewDetailsTypography
              headerText={reviewStepperTabConst.subHeading2}
              linkText="Change"
              onClick={handleEditRecipient}
              keysValuesText={[
                {
                  key: reviewStepperTabConst.nameText + ':',
                  value:
                    currentAccountDetails.firstName +
                    ' ' +
                    currentAccountDetails.lastName,
                },
                {
                  key: reviewStepperTabConst.emailText + ':',
                  value: currentAccountDetails.email,
                },
                {
                  key: reviewStepperTabConst.accountNumberText + ':',
                  value:
                    currentAccountDetails.accountNumber?.toString() as string,
                },
                {
                  key: reviewStepperTabConst.accountType + ':',
                  value: currentAccountDetails.accountType,
                },
              ]}
            />
          </Grid>
          <Grid item marginTop={theme.spacing(10)}>
            <ReviewDetailsTypography
              headerText={reviewStepperTabConst.subHeading3}
              linkText="Edit"
              keysValuesText={[
                {
                  key: reviewStepperTabConst.sendingText + ':',
                  value: props.sending,
                },
                {
                  key: reviewStepperTabConst.shouldArrive + ':',
                  value: props.shouldArive,
                },
                {
                  key: reviewStepperTabConst.repeatsText + ':',
                  value: props.repeats,
                },
              ]}
            />
          </Grid>
          <Grid item justifyContent="center" justifyItems="center" width="100%">
            <Box
              display="flex"
              marginTop={theme.spacing(10)}
              justifyContent="center"
              justifyItems="center"
            >
              <Box width="244px" height="42px" sx={{ textAlign: 'center' }}>
                <TypographyComponent
                  variant="caption1"
                  color={theme.palette.text_color.medium_emphasis}
                  children={reviewStepperTabConst.tAndcText}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item marginTop={5}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Button
                onClick={handleContinueClick}
                width="220px"
                height="56px"
                variant="contained"
                children={reviewStepperTabConst.confirmButton}
              />
            </Box>
          </Grid>
        </>
      )
    }
  }

  return (
    <StepperTabTemplate
      containerHeight="641px"
      containerWidth="788px"
      isBigContainer={false}
      LeftComponent={
        <Box padding="4px" width="24px">
          <IconButtonComponent
            src={RightArrow}
            height="24px"
            width="24px"
            onClick={props.onClickBackButton}
          />
        </Box>
      }
      CenterComponent={
        <Grid
          container
          display="flex"
          width="516px"
          direction="column"
          data-testid="reviewStepperTab"
        >
          <Grid item marginBottom={theme.spacing(10)}>
            <TypographyComponent
              variant="heading1"
              children={reviewStepperTabConst.pageHeader}
            />
          </Grid>
          {getContentBody()}
          <Grid item marginTop={theme.spacing(5)}>
            {isEditRecipient || isEditTransfer ? (
              <Box
                display="flex"
                flexDirection="row"
                marginLeft="23rem"
                gap={theme.spacing(5)}
              >
                <Button
                  variant="outlined"
                  width="135px"
                  height="56px"
                  onClick={getCancelHandler(isEditRecipient, isEditTransfer)}
                  children="Cancel"
                />
                <Button
                  variant="contained"
                  width="135px"
                  height="56px"
                  onClick={getSaveHandler(isEditRecipient, isEditTransfer)}
                  children="Save"
                />
              </Box>
            ) : (
              ''
            )}
          </Grid>
        </Grid>
      }
    />
  )
}

export default ReviewStepperTab

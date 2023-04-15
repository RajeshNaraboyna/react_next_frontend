import {
  Grid,
  InputAdornment,
  TextField,
  styled,
  Divider,
  Box,
  Dialog,
  Typography,
} from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import { TypographyComponent } from '../../atoms/Typography'
import Button from '../../atoms/Button'
import { amountStepperConsts } from '../../../utils/constants'
import ArrowDown from '../../../assets/icons/chevron-down.svg'
import InfoIcon from '../../../assets/icons/Info.svg'
import DownIcon from '../../../assets/icons/Down.svg'
import DropDown from '../../molecules/DropDown'
import { StepperTabTemplateSmall } from '../../templates/StepperTabTemplate/index.stories'
import { CurrencyDetails, TransferDetails } from '../../../utils/types'
import { getCurrencyDetails } from '../../../apis/library'

interface AmountStepperProps {
  continueClickHandler: (arg: TransferDetails) => void
  backClickHandler: () => void
  transferDetails: TransferDetails
}

const StyledInputField = styled(TextField)(() => ({
  width: '516px',
  height: '60px',
  overflowWrap: 'normal',
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.grey_color.stroke_2} !important`,
    borderRadius: '8px',
  },
  '& .MuiInputBase-input': {
    fontSize: '17px !important',
    lineHeight: '24px',
    color: theme.palette.text_color.high_emphasis,
  },
  '& .MuiAutocomplete-input, & .MuiInputLabel-root': {
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
    textTransform: theme.typography.body2.textTransform,
    fontFamily: theme.typography.body2.fontFamily,
    color: theme.palette.text_color.medium_emphasis,
  },
  '& .Mui-disabled .MuiInputBase-input': {
    color: `${theme.palette.text_color.high_emphasis} !important`,
    WebkitTextFillColor: `${theme.palette.text_color.high_emphasis} !important`,
  },
  '& .Mui-disabled': {
    color: `${theme.palette.text_color.medium_emphasis} !important`,
  },
  '& .Mui-focused': {
    color: `${theme.palette.text_color.medium_emphasis} !important`,
    borderRadius: '8px',
  },
  '& .MuiInputLabel-shrink': {
    color: `${theme.palette.text_color.medium_emphasis} !important`,
  },
}))

const StyledTypography = styled(Typography)(() => ({
  color: theme.palette.text_color.high_emphasis,
  marginLeft: '10px !important',
  marginRight: '12px',
}))

const AmountStepper = (props: AmountStepperProps) => {
  const { continueClickHandler, backClickHandler, transferDetails } = props
  const [countryInfo, setCountryInfo] = useState(
    amountStepperConsts.countryInfo
  )

  const [senderCountryLabel, setSenderCountryLabel] = useState(
    countryInfo.find(
      (country) => country.currency === transferDetails.sendingCurrency
    )?.label
  )
  const [senderCurrencyValue, setSenderCurrencyValue] = useState(
    transferDetails.senderAmountBeforeDeduction !== null
      ? transferDetails.senderAmountBeforeDeduction
      : ''
  )
  const [isSenderDropDownVisible, setIsSenderDropDownVisible] = useState(false)
  const [receipientCountryLabel, setReceipientCountryLabel] = useState(
    countryInfo.find(
      (country) => country.currency === transferDetails.recipientCurrency
    )?.label
  )
  const [receipientCurrencyValue, setReceipientCurrencyValue] = useState(
    transferDetails.receiverAmountAfterDeduction !== null
      ? transferDetails.receiverAmountAfterDeduction
      : ''
  )
  const [isReceipientDropDownVisible, setIsReceipientDropDownVisible] =
    useState(false)

  const [transferDetailValues, setTransferDetailValues] = useState([
    'From ' + transferDetails.fee + ` ${transferDetails.sendingCurrency}`,
    transferDetails.rate.toFixed(5),
    transferDetails.senderAmountAfterDeduction.toFixed(2) +
      ` ${transferDetails.sendingCurrency}`,
  ])
  const [popUpOpen, setPopUpOpen] = useState(false)
  const [isContinueButtonEnabled, setIsContinueButtonEnabled] = useState(false)
  const [guaranteedRate, setGuaranteedRate] = useState(transferDetails.rate)
  const [transactionFee, setTransactionFee] = useState(transferDetails.fee)
  const handleClickOpen = useCallback(() => setPopUpOpen(true), [popUpOpen])
  const handleClose = useCallback(() => setPopUpOpen(false), [popUpOpen])

  useEffect(() => {
    setIsContinueButtonEnabled(
      senderCurrencyValue.toString().length > 0 &&
        isNumeric(senderCurrencyValue.toString()) &&
        receipientCurrencyValue.toString().length > 0 &&
        isNumeric(receipientCurrencyValue.toString())
    )
  })
  useEffect(() => {
    getCurrencyInfo()
  }, [])

  const getCurrencyInfo = async () => {
    const currencyData = await getCurrencyDetails()
    const newCurrencyInfo = countryInfo.map((currency) => {
      const unitValueInDollar = currencyData?.find(
        (fetchedCurrency:CurrencyDetails) => currency.currency === fetchedCurrency.symbol
      )?.worth_in_usd
      return { ...currency, unitValueInDollar: unitValueInDollar as number }
    })
    setCountryInfo(newCurrencyInfo)
  }
  useEffect(() => {
    setSenderCountryLabel(
      countryInfo.find(
        (country) => country.currency === transferDetails.sendingCurrency
      )?.label
    )
    setReceipientCountryLabel(
      countryInfo.find(
        (country) => country.currency === transferDetails.recipientCurrency
      )?.label
    )
  }, [countryInfo])

  const onClickHandler = useCallback(() => {
    continueClickHandler({
      senderAmountBeforeDeduction: Number(senderCurrencyValue),
      receiverAmountAfterDeduction: Number(receipientCurrencyValue),
      fee: Number(transactionFee.toFixed(2)),
      senderAmountAfterDeduction: Number(senderCurrencyValue) - transactionFee,
      sendingCurrency: getCountryInfoByLabel(senderCountryLabel as string)
        ?.currency as string,
      recipientCurrency: getCountryInfoByLabel(receipientCountryLabel as string)
        ?.currency as string,
      rate: Number(guaranteedRate),
    })
  }, [senderCurrencyValue, receipientCurrencyValue])

  const onBackClickHandler = useCallback(() => {
    if (isSenderDropDownVisible) {
      setIsSenderDropDownVisible(false)
    } else if (isReceipientDropDownVisible) {
      setIsReceipientDropDownVisible(false)
    } else {
      backClickHandler()
    }
  }, [isSenderDropDownVisible, isReceipientDropDownVisible])

  const senderInputOnChangeHandler = useCallback(
    (event: any) => {
      setSenderCurrencyValue(event.target.value)
    },
    [senderCurrencyValue]
  )

  function isNumeric(value: string) {
    const isNumber = /^\d+\.\d+$|^\d+$/.test(value)
    return isNumber
  }

  const getCountryInfoByLabel = (reqLabel: string) => {
    return countryInfo.find((info) => info.label === reqLabel)
  }

  const getCountryInfoByCode = (reqCode: string) => {
    return countryInfo.find((country) => country.code === reqCode)
  }
  const calculateReceipientAmount = (
    currentSenderCountry: any,
    currentReceipientCountry: any
  ) => {
    const guaranteed_rate =
      Math.floor(
        (currentSenderCountry.unitValueInDollar /
          currentReceipientCountry.unitValueInDollar) *
          10000
      ) / 10000
    const transaction_fee = (3.69 / 100) * Number(senderCurrencyValue)
    const total_amount = Number(senderCurrencyValue) - transaction_fee
    const receipient_value = (guaranteed_rate * total_amount).toFixed(2)
    setGuaranteedRate(Number(guaranteed_rate.toFixed(4)))
    setReceipientCurrencyValue(receipient_value.toString())
    setTransactionFee(transaction_fee)
    setTransferDetailValues([
      'From ' +
        transaction_fee.toFixed(2) +
        ` ${currentSenderCountry.currency}`,
      guaranteed_rate.toFixed(4),
      total_amount.toFixed(2) + ` ${currentSenderCountry.currency}`,
    ])
  }

  const senderDropDownOnSelectHandler = useCallback(
    (value: any) => {
      setIsSenderDropDownVisible(false)
      const currentSenderCountry = getCountryInfoByCode(value)
      setSenderCountryLabel(currentSenderCountry?.label)
    },
    [isSenderDropDownVisible, senderCountryLabel]
  )

  const receipientDropDownOnSelectHandler = useCallback(
    (value: any) => {
      setIsReceipientDropDownVisible(false)
      const currentReceipientCountry = getCountryInfoByCode(value)
      const currentSenderCountry = getCountryInfoByLabel(
        senderCountryLabel as string
      )
      setReceipientCountryLabel(currentReceipientCountry?.label)
      if (
        senderCurrencyValue.toString().length > 0 &&
        isNumeric(senderCurrencyValue.toString())
      ) {
        calculateReceipientAmount(
          currentSenderCountry,
          currentReceipientCountry
        )
      } else {
        setReceipientCurrencyValue('')
      }
    },
    [
      isReceipientDropDownVisible,
      senderCountryLabel,
      receipientCountryLabel,
      senderCurrencyValue,
      receipientCurrencyValue,
    ]
  )

  const senderDropDownIconClickHandler = useCallback(() => {
    setIsSenderDropDownVisible(true)
  }, [isSenderDropDownVisible])

  const receipientDropDownIconClickHandler = useCallback(() => {
    setIsReceipientDropDownVisible(true)
  }, [isReceipientDropDownVisible])

  return (
    <Grid height={'100%'}>
    <StepperTabTemplateSmall
      data-testid="amountStepper"
      LeftComponent={
        <IconButtonComponent
          src={ArrowRight}
          img_width="24px"
          img_height="24px"
          onClick={onBackClickHandler}
        />
      }
      RightComponent={
        <Button
          variant="contained"
          children={amountStepperConsts.transferContinueButton}
          height="56px"
          width="135px"
          onClick={onClickHandler}
          data-testid="amountStepperButton"
          disabled={!isContinueButtonEnabled}
        />
      }
      CenterComponent={
        <Grid container direction="column" width="516px">
          <Grid
            container
            sx={{ marginBottom: '44px !important' }}
            flexDirection="column"
            alignContent={'flex-start'}
          >
            <div>
              <TypographyComponent
                color={theme.palette.text_color.high_emphasis}
                variant="heading1"
              >
                {amountStepperConsts.headerTitle}
              </TypographyComponent>
              <TypographyComponent
                color={theme.palette.text_color.high_emphasis}
                variant="heading2"
                children={'?'}
              />
            </div>
          </Grid>
          <Grid item marginBottom={'28px'}>
            {isSenderDropDownVisible ? (
              <DropDown
                height="60px"
                width="516px"
                optionslist={amountStepperConsts.countryOptions}
                placeholder="Select currency"
                isDropDownOpenByDefault={true}
                onSelect={senderDropDownOnSelectHandler}
                data-testid="custom-dropDown"
              />
            ) : (
              <StyledInputField
                id="sender-money-textfield"
                variant="outlined"
                label={amountStepperConsts.senderDropDownLabel}
                value={senderCurrencyValue}
                onChange={senderInputOnChangeHandler}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButtonComponent
                        src={
                          getCountryInfoByLabel(senderCountryLabel as string)
                            ?.icon
                        }
                        disabled={true}
                        width="24px"
                        height="24px"
                      />
                      <StyledTypography
                        children={
                          getCountryInfoByLabel(senderCountryLabel as string)
                            ?.currency
                        }
                        variant="body1"
                        sx={{ mt: '4px' }}
                      />
                      <IconButtonComponent
                        src={ArrowDown}
                        width="24px"
                        height="24px"
                        onClick={senderDropDownIconClickHandler}
                        data-testid="arrowIconComponent"
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Grid>
          <Grid item marginBottom={'36px'}>
            {isReceipientDropDownVisible ? (
              <DropDown
                height="60px"
                width="516px"
                optionslist={amountStepperConsts.countryOptions}
                placeholder="Select currency"
                isDropDownOpenByDefault={true}
                onSelect={receipientDropDownOnSelectHandler}
              />
            ) : (
              <StyledInputField
                id="receipient-money-textfield"
                variant="outlined"
                label={amountStepperConsts.receipientDropDownLabel}
                value={receipientCurrencyValue}
                disabled
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButtonComponent
                        src={
                          getCountryInfoByLabel(
                            receipientCountryLabel as string
                          )?.icon
                        }
                        disabled={true}
                        width="24px"
                        height="24px"
                      />
                      <StyledTypography
                        children={
                          getCountryInfoByLabel(
                            receipientCountryLabel as string
                          )!.currency
                        }
                        variant="body1"
                        sx={{ mt: '4px' }}
                      />
                      <IconButtonComponent
                        src={ArrowDown}
                        width="24px"
                        height="24px"
                        onClick={receipientDropDownIconClickHandler}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          </Grid>
          <Grid item flexDirection="column" width={'480px'} alignSelf="center">
            {amountStepperConsts.transferDetails.map(
              (title: string, index: number) => (
                <Box
                  display="flex"
                  marginBottom="20px"
                  justifyContent="space-between"
                  key={title}
                >
                  <Box>
                    <TypographyComponent
                      children={title}
                      variant="body3"
                      color={theme.palette.text_color.low_emphasis}
                    />
                  </Box>
                  <Divider
                    sx={{
                      height: '1px',
                      alignSelf: 'center',
                      marginLeft: '11px',
                      marginRight: '11px',
                      flex: 'auto',
                      borderColor: theme.palette.grey_color.stroke_2,
                    }}
                    variant="middle"
                  />
                  <Box>
                    <TypographyComponent
                      children={transferDetailValues[index]}
                      variant="body3"
                      color={
                        index === 1
                          ? theme.palette.primary.primary_300
                          : theme.palette.text_color.medium_emphasis
                      }
                    />
                    <IconButtonComponent
                      src={index === 1 ? DownIcon : InfoIcon}
                      width="24px"
                      height="24px"
                      disabled={index !== 1}
                      onClick={handleClickOpen}
                    />
                  </Box>
                </Box>
              )
            )}
          </Grid>
          <Dialog
            open={popUpOpen}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            PaperProps={{
              sx: { borderRadius: '16px' },
            }}
          >
            <Grid
              container
              width="564px"
              height="335px"
              borderRadius="16px !important"
              alignItems="center"
              direction="column"
              display="flex"
            >
              <Grid
                item
                sx={{ mt: '60px', width: '345px', ml: '40px', mr: 'auto' }}
              >
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text_color.medium_emphasis}
                  children={
                    "We'll apply this rate if we receive your money today."
                  }
                />
              </Grid>
              <Grid item sx={{ mt: '131px' }}>
                <Button
                  width="135px"
                  height="56px"
                  children={'OK'}
                  variant="contained"
                  onClick={handleClose}
                />
              </Grid>
            </Grid>
          </Dialog>
        </Grid>
      }
      isBigContainer={false}
      containerWidth="788px"
      containerHeight="100%"
    />
    </Grid>
  )
}

export default AmountStepper

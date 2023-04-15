import {
  Box,
  Divider,
  Grid,
  Radio,
  styled,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import PaymentRadioComponent from '../../molecules/PaymentRadio'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'
import { TypographyComponent } from '../../atoms/Typography'
import { TransactionCard } from '../TransactionCard'
import { ChooseYourBank } from '../ChooseYourBank'
import PayFromYourBank from '../PayFromYourBank'
import BankDetailsForPayments from '../BankDetailsForPayments/input'
import InputTextComponent from '../InputField'
import LloydsIcon from '../../../assets/icons/lloyds.svg'
import VisaIcon from '../../../assets/icons/visa.svg'
import Button from '../../atoms/Button'
import { payStepperTabConsts } from '../../../utils/constants'
import { RecipientDetails, TransferDetails } from '../../../utils/types'
import { getCardsForAccount } from '../../../apis/library'

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-root': {
    padding: '20px !important',
    border: '5px',
  },
  minHeight: '46px !important',
  width: '300px',
  marginLeft: '80px',
  '& .MuiTabs-flexContainer': {
    justifyContent: 'center',
    gap: '107px',
  },
})

const StyledTab = styled(Tab)({
  '&.MuiTab-root': {
    minHeight: '46px',
    maxHeight: '46px',
    minWidth: '96px',
    maxWidth: '124px',
    padding: '10px 0px 12px 0px',
    fontFamily: theme.typography.body3.fontFamily,
    fonstSize: theme.typography.body3.fontSize,
    lineHeight: theme.typography.body3.lineHeight,
    ':disabled': {
      color: theme.palette.text_color.medium_emphasis,
    },
  },
})

const StyledGrid = styled(Grid)(() => ({
  width: '474px',
  height: '136px',
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '20px',
  marginTop: '23px',
  alignItems: 'center',
  '& .Mui-checked': {
    color: `${theme.palette.primary.primary_500} !important`,
  },
}))

const StyledGridOverFlow = styled(Grid)(() => ({
  overflow: 'scroll',
  height: 'max-content',
  maxHeight: '760px',
  display: 'flex',
  boxSizing: 'border-box',
  '&::-webkit-scrollbar': { width: 0 },
}))

interface PayStepperTabProps {
  continueClickHandler: () => void
  cancelClickHandler: () => void
  isComingBack?: boolean
  recipientDetails: RecipientDetails
  transferDetails: TransferDetails
}
export const PayStepperTab = (props: PayStepperTabProps) => {
  const [screenNumber, setScreenNumber] = useState(0)
  const [isBigContainer, setIsBigContainer] = useState(true)
  const [pathNumber, setPathNumber] = useState(0)
  const [selectedRadio, setSelectedRadio] = useState('bank')
  const [selectedCardRadio, setSelectedCardRadio] = useState('visa0')
  const [cvvValues, setCvvValues] = useState([{ value: '' }, { value: '' }])
  const [cardLastDigits, setCardLastDigits] = useState(
    payStepperTabConsts.cardRadioDetails.cardDigits[0]
  )
  const [isPayContinueButtonEnabled, setIsPayContinueButtonEnabled] =
    useState(false)
  const [cards, setCards] = useState(new Array())

  useEffect(() => {
    const getCards = async () => {
      try {
        const email = localStorage.getItem('email')
        const cardDetails = await getCardsForAccount(email as string)
        setCards(cardDetails)
      } catch (error) {
        console.error(error)
      }
    }
    getCards()

    if (screenNumber === 3) {
      setIsBigContainer(false)
    } else {
      setIsBigContainer(true)
    }
  }, [screenNumber])

  const handleContinueClick = useCallback(() => {
    if (
      (pathNumber === 0 && screenNumber < 3) ||
      (pathNumber === 1 && screenNumber < 2)
    ) {
      setScreenNumber((prevState) => {
        return prevState + 1
      })
    } else {
      // To use the value "cardLastDigits" in next pages, based on the requirement,
      // either send "cardLastDigits" as arg, to below method
      // or store "cardLastDigits" value in db or jsonObj.
      props.continueClickHandler()
    }
  }, [pathNumber, screenNumber])

  const handleTransactionCardContinueClick = useCallback(() => {
    if (screenNumber === 0) {
      if (selectedRadio === 'bank') {
        setPathNumber(0)
        handleContinueClick()
      } else if (selectedRadio === 'debit') {
        setPathNumber(1)
        handleContinueClick()
      }
    } else if (screenNumber === 1) {
      const index = Number(selectedCardRadio[4])
      setCardLastDigits(payStepperTabConsts.cardRadioDetails.cardDigits[index])
      handleContinueClick()
    }
  }, [
    screenNumber,
    selectedRadio,
    pathNumber,
    selectedCardRadio,
    cvvValues,
    cardLastDigits,
  ])

  useEffect(() => {
    const index = Number(selectedCardRadio[4])
    setIsPayContinueButtonEnabled(cvvValues[index].value.length === 3)
  }, [selectedCardRadio, cvvValues])

  const handleCancel = useCallback(() => {
    props.cancelClickHandler()
  }, [])

  const handleBackClick = useCallback(() => {
    if (screenNumber !== 0) {
      if (screenNumber === 1) {
        setSelectedRadio('bank')
      }
      setScreenNumber((prevState) => {
        return prevState - 1
      })
    }
  }, [screenNumber])

  const handleCvvInputChange0 = useCallback(
    (value: string) => {
      setCvvValues((prevCvvValues) => {
        const newCvvValues = [...prevCvvValues]
        newCvvValues[0].value = value
        return newCvvValues
      })
    },
    [cvvValues]
  )
  const handleCvvInputChange1 = useCallback(
    (value: string) => {
      setCvvValues((prevCvvValues) => {
        const newCvvValues = [...prevCvvValues]
        newCvvValues[1].value = value
        return newCvvValues
      })
    },
    [cvvValues]
  )

  const handleRadioOptionChange = useCallback(
    (selectedValue: string) => {
      setSelectedRadio(selectedValue)
    },
    [selectedRadio]
  )

  const isBackButtonReq = () => {
    return !(
      (pathNumber === 0 && screenNumber === 1) ||
      (pathNumber === 0 && screenNumber === 2) || (screenNumber===0)
    )
  }

  const handleCardRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedCardRadio(event.target.value)
    },
    [selectedCardRadio]
  )

  const getPayRadio = (
    primaryText: string,
    secondaryText: { key: string; value: string }[],
    radioValue: string,
    index: number
  ) => (
    <StyledGrid key={secondaryText[0].value}>
      <Grid container direction="row">
        <Grid item alignSelf={'baseline'}>
          <Radio
            value={radioValue}
            name="radio-buttons"
            checked={selectedCardRadio === radioValue}
            onChange={handleCardRadioChange}
          />
        </Grid>
        <Grid item>
          <Grid
            container
            display="flex"
            direction="column"
            style={{ marginLeft: '30px' }}
          >
            <TypographyComponent
              variant="body2"
              children={primaryText}
              color={theme.palette.text_color.high_emphasis}
              style={{ marginTop: '3px' }}
            />
            <Grid
              container
              style={{ marginTop: '4px' }}
              flexDirection="row"
              spacing={1}
            >
              {secondaryText.map((text) => (
                <>
                  <Grid item>
                    <TypographyComponent
                      variant="body2"
                      children={text.key}
                      color={theme.palette.text_color.medium_emphasis}
                    />
                  </Grid>
                  <Grid item>
                    <TypographyComponent
                      variant="body2"
                      children={text.value}
                      color={theme.palette.text_color.high_emphasis}
                    />
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item marginLeft={'74px'} marginTop={'16px'}>
          <InputTextComponent
            helperText={payStepperTabConsts.debitCardInputHelperText}
            variantType="card"
            width="308px"
            height="60px"
            value={cvvValues[index].value}
            onChange={
              index === 0 ? handleCvvInputChange0 : handleCvvInputChange1
            }
          />
        </Grid>
      </Grid>
    </StyledGrid>
  )

  return (
    <Grid
      width={'100%'}
      display="flex"
      justifyContent={'center'}
      data-testid="pay-stepper"
    >
      <StepperTabTemplate
        LeftComponent={
          isBackButtonReq() ? (
            <Grid display="flex" justifyContent={'center'}>
              <IconButtonComponent
                src={ArrowRight}
                img_width="24px"
                img_height="24px"
                onClick={handleBackClick}
              />
            </Grid>
          ) : (
            <></>
          )
        }
        CenterComponent={
          <StyledGridOverFlow>
            {(pathNumber === 0 || pathNumber === 1) && screenNumber === 0 && (
              <Grid
                container
                gap="24px"
                flexDirection={'row'}
                justifyContent={'center'}
              >
                <Grid item>
                  <Grid marginBottom={'32px'}>
                    <Typography
                      children={payStepperTabConsts.screen_0_Header}
                      variant="heading1"
                      color={theme.palette.text_color.high_emphasis}
                    />
                  </Grid>
                  <PaymentRadioComponent
                    handleRadioChange={handleRadioOptionChange}
                  />
                </Grid>
                <Grid item>
                  <TransactionCard
                    recipientDetails={props.recipientDetails}
                    transferDetails={props.transferDetails}
                    onContinueClick={handleTransactionCardContinueClick}
                    onCancelClick={handleCancel}
                    haveButtons={true}
                  />
                </Grid>
              </Grid>
            )}
            {pathNumber === 0 && screenNumber === 1 && (
              <Grid marginTop={'-61px'}>
                <ChooseYourBank
                  onClickBank={handleContinueClick}
                  onClickTransactionCancel={handleCancel}
                  onClickBack={handleBackClick}
                />
              </Grid>
            )}
            {pathNumber === 0 && screenNumber === 2 && (
              <Grid marginTop={'-61px'}>
                <PayFromYourBank
                  accountType={payStepperTabConsts.accountType}
                  amount={
                    props.transferDetails.senderAmountBeforeDeduction +
                    ' ' +
                    props.transferDetails.sendingCurrency
                  }
                  onClick={handleContinueClick}
                  onClickBack={handleBackClick}
                />
              </Grid>
            )}
            {pathNumber === 0 && screenNumber === 3 && (
              <Grid container flexDirection={'row'} gap="32px" width="516px">
                <Typography
                  children={payStepperTabConsts.path_0_screen_3_Header}
                  variant="heading1"
                  color={theme.palette.text_color.high_emphasis}
                />
                <BankDetailsForPayments
                  name={
                    props.recipientDetails.firstName +
                    ' ' +
                    props.recipientDetails.lastName
                  }
                  amount={
                    props.transferDetails.senderAmountBeforeDeduction!.toFixed(
                      2
                    ) +
                    ' ' +
                    props.transferDetails.sendingCurrency
                  }
                  accNumber={`${props.recipientDetails.accountNumber}`}
                  {...payStepperTabConsts.bankDetails}
                  onContinue={handleContinueClick}
                  onCancel={handleCancel}
                />
              </Grid>
            )}
            {pathNumber === 1 && screenNumber === 1 && (
              <Grid
                container
                gap="24px"
                flexDirection={'row'}
                justifyContent={'center'}
              >
                <Grid item width="480px">
                  <Typography
                    children={payStepperTabConsts.path_1_screen_1_Header}
                    variant="heading1"
                    color={theme.palette.text_color.high_emphasis}
                  />
                  <StyledTabs
                    value={payStepperTabConsts.cardTabDetails[0].value}
                    sx={{ marginTop: '32px' }}
                  >
                    <StyledTab
                      label={payStepperTabConsts.cardTabDetails[0].label}
                      value={payStepperTabConsts.cardTabDetails[0].value}
                      {...a11yProps(0)}
                    />
                    <StyledTab
                      label={payStepperTabConsts.cardTabDetails[1].label}
                      value={payStepperTabConsts.cardTabDetails[1].value}
                      disabled
                      {...a11yProps(1)}
                    />
                  </StyledTabs>
                  <Divider
                    style={{
                      marginTop: '15px',
                      borderColor: theme.palette.grey_color.stroke_2,
                    }}
                  ></Divider>
                  <Grid paddingTop={'20px'}>
                    {cards.map((card, index) => {
                      return getPayRadio(
                        payStepperTabConsts.cardRadioDetails.debitCardName,
                        [
                          {
                            key: payStepperTabConsts.cardRadioDetails
                              .lastFourDigitLabel,
                            value: card.card_number.toString().slice(-4),
                          },
                          {
                            key: payStepperTabConsts.cardRadioDetails
                              .expiryDateLabel,
                            value: card.exp_date,
                          },
                        ],
                        'visa' + index,
                        index
                      )
                    })}
                  </Grid>
                </Grid>
                <Grid item>
                  <TransactionCard
                    recipientDetails={props.recipientDetails}
                    transferDetails={props.transferDetails}
                    onContinueClick={handleTransactionCardContinueClick}
                    onCancelClick={handleCancel}
                    haveButtons={true}
                    isButtonEnabled={isPayContinueButtonEnabled}
                  />
                </Grid>
              </Grid>
            )}
            {pathNumber === 1 && screenNumber === 2 && (
              <Grid
                container
                gap="24px"
                flexDirection={'row'}
                justifyContent={'center'}
              >
                <Grid item width="480px">
                  <Typography
                    children={payStepperTabConsts.path_1_screen_2_Header}
                    variant="heading1"
                    color={theme.palette.text_color.high_emphasis}
                  />
                  <Box
                    sx={{
                      border: '1px solid',
                      borderColor: theme.palette.grey_color.stroke_2,
                      borderRadius: '16px',
                      width: '474px',
                      height: '395px',
                      marginTop: '20px',
                    }}
                  >
                    <Grid
                      container
                      flexDirection={'row'}
                      justifyContent="space-between"
                      width={'100%'}
                      padding="24px 32px 8px 32px"
                    >
                      <IconButtonComponent
                        img_height="15.75px"
                        img_width="15.08px"
                        border="1px solid"
                        border_color={theme.palette.grey_color.stroke_2}
                        width="40px"
                        height="40px"
                        src={LloydsIcon}
                        disabled={true}
                      />
                      <IconButtonComponent
                        height="24px"
                        width="24px"
                        src={VisaIcon}
                        disabled={true}
                      />
                    </Grid>
                    <Divider
                      style={{
                        borderColor: theme.palette.grey_color.stroke_2,
                      }}
                    ></Divider>
                    <Grid
                      container
                      flexDirection={'column'}
                      alignItems="center"
                      marginTop={'22px'}
                      gap="8px"
                    >
                      <TypographyComponent
                        children={
                          payStepperTabConsts.path_1_screen_2_CardHeader
                        }
                        variant="body1"
                        color={theme.palette.text_color.high_emphasis}
                      />
                      <Grid
                        container
                        gap="12px"
                        width={'308px'}
                        marginBottom="30px"
                      >
                        <TypographyComponent
                          variant="caption1"
                          color={theme.palette.text_color.medium_emphasis}
                        >
                          <>
                            <span
                              style={{
                                color: theme.palette.text_color.high_emphasis,
                              }}
                            >
                              {props.transferDetails.sendingCurrency +
                                ' ' +
                                props.transferDetails.senderAmountBeforeDeduction!.toFixed(
                                  2
                                )}
                            </span>
                            {payStepperTabConsts.path_1_screen_2_CardSubHeader}
                            <span
                              style={{
                                color: theme.palette.text_color.high_emphasis,
                              }}
                            >
                              {cardLastDigits}
                            </span>
                          </>
                        </TypographyComponent>
                        <TypographyComponent
                          children={
                            payStepperTabConsts
                              .path_1_screen_2_CardDescription[0]
                          }
                          variant="caption1"
                          color={theme.palette.text_color.medium_emphasis}
                        />
                        <TypographyComponent
                          children={
                            payStepperTabConsts
                              .path_1_screen_2_CardDescription[1]
                          }
                          variant="caption1"
                          color={theme.palette.text_color.medium_emphasis}
                        />
                      </Grid>
                      <Button
                        variant="contained"
                        width="135px"
                        height="56px"
                        onClick={handleContinueClick}
                        children={payStepperTabConsts.completeButton}
                      />
                    </Grid>
                  </Box>
                </Grid>
                <Grid item>
                  <TransactionCard
                    recipientDetails={props.recipientDetails}
                    transferDetails={props.transferDetails}
                    onContinueClick={handleContinueClick}
                    onCancelClick={handleCancel}
                    haveButtons={false}
                  />
                </Grid>
              </Grid>
            )}
          </StyledGridOverFlow>
        }
        isBigContainer={isBigContainer}
        containerWidth={!isBigContainer ? '788px' : '1920'}
      />
    </Grid>
  )
}

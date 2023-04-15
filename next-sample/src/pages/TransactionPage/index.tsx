import React, { useCallback, useState, useEffect, useContext } from 'react'
import { StepperTemplate } from '../../templates/StepperTemplate'
import { Box, Grid } from '@mui/material'
import {
  OwnerDirectorDetails,
  RecipientDetails,
  TransferDetails,
} from '../../../utils/types'
import { VerificationStepperTab } from '../../organisms/VerificationStepperTab'
import { newPerson } from '../../organisms/ConfirmOwnerConfirmDirector/hook'
import { Stepper } from '../../organisms/Stepper'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'
import IconButtonComponent from '../../atoms/Icon'
import { SendingMoneyTo } from '../../molecules/SendingMoneyTo'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import RecipientStepperTab from '../../organisms/RecipientStepperTab'
import ReviewStepperTab from '../../organisms/ReviewStepperTab'
import moment from 'moment'
import AmountStepper from '../../organisms/AmountStepper'
import CloseLogo from '../../../assets/icons/close.svg'
import LogoComp from '../../atoms/Logo'
import { useNavigate } from 'react-router-dom'
import { PayStepperTab } from '../../organisms/PayStepperTab'
import { addTransaction, getDirectorsAndOwner } from '../../../apis/library'
import AuthContext, { IAuthContext } from '../../../context/AuthProvider'
import { useAuth0 } from '@auth0/auth0-react'


export const TransactionPage = () => {
  let navigate = useNavigate()
  const routeChangeSend = () => {
    navigate('/send_money')
  }
  const routeChangeHome = useCallback(() => {
    navigate('/home')
  }, [])

  const newRecipientData: RecipientDetails = {
    firstName: '',
    lastName: '',
    email: '',
    accountNumber: null,
    ifscCode: '',
    accountType: '',
  }

  const newTransferDetails: TransferDetails = {
    senderAmountBeforeDeduction: null,
    fee: 3.69,
    senderAmountAfterDeduction: 96.31,
    sendingCurrency: 'GBP',
    recipientCurrency: 'EUR',
    rate: 1.20048,
    receiverAmountAfterDeduction: null,
  }

  const [activeStep, setActiveStep] = useState(0)
  const [isComingFromBack, setIsComingFromBack] = useState(false)
  const [purpose, setPurpose] = useState('')
  const [ownersDirectorsLists, setOwnersDirectorsLists] = useState({
    directorsList: [newPerson],
    ownersList: [newPerson],
  })
  const [sendingMoneyData, setSendingMoney] = useState('')
  const [recipientData, setRecipientData] = useState(newRecipientData)
  const [transferDetails, setTransferDetails] =
    useState<TransferDetails>(newTransferDetails)

  const handleAmountContinueClick = useCallback(
    (data: TransferDetails) => {
      setTransferDetails(data)
      onContinueClick()
    },
    [transferDetails]
  )

  const handleVerificationContinueClick = useCallback(
    (
      directorsList: OwnerDirectorDetails[],
      ownersList: OwnerDirectorDetails[],
      purpose: string
    ) => {
      setOwnersDirectorsLists({
        directorsList: directorsList,
        ownersList: ownersList,
      })
      setPurpose(purpose)
      onContinueClick()
    },
    [setOwnersDirectorsLists, purpose]
  )

  const handleRecipeantContinueClick = useCallback(
    (data: RecipientDetails) => {
      setRecipientData(data)
      onContinueClick()
    },
    [recipientData]
  )

  const handleSendingMoneyContinueClick = useCallback(
    (args: string) => {
      setSendingMoney(args)
      onContinueClick()
    },
    [sendingMoneyData]
  )

  const handleReviewContinueClick = useCallback(
    (recipientData: RecipientDetails, transferDetails: TransferDetails) => {
      setRecipientData(recipientData)
      setTransferDetails(transferDetails)
      onContinueClick()
    },
    [recipientData, transferDetails, activeStep]
  )

  const onBackClick = useCallback(() => {
    setIsComingFromBack(true)
    if (activeStep > 0) {
      setActiveStep((prevState) => {
        return prevState - 1
      })
    } else if (activeStep == 0) {
      routeChangeSend()
    }
  }, [isComingFromBack, activeStep])

  const onContinueClick = useCallback(() => {
    setIsComingFromBack(false)
    if (activeStep < 5) {
      setActiveStep((prevState) => {
        return prevState + 1
      })
    } else {
      try {
        const email = localStorage.getItem('email')
        addTransaction(
          recipientData,
          transferDetails,
          purpose,
          email as string
        ).then(() => routeChangeHome())
      } catch (e) {
        console.error(e)
      }
    }
  }, [activeStep, isComingFromBack])

  const onCancelClick = useCallback(() => {
    routeChangeHome()
  }, [])

  useEffect(() => {
    if (activeStep === 3) {
      getDirectorsAndOwnersList().catch((error) => {
        console.error(error)
      })
    }
  }, [activeStep])

  const getDirectorsAndOwnersList = async () => {
    try {
      const email = localStorage.getItem('email')
      const data = await getDirectorsAndOwner(email as string)
      setOwnersDirectorsLists({
        directorsList: data.directorsList,
        ownersList: data.ownersList,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const stepData = [
    {
      label: 'Amount',
      content: (
        <>
          <AmountStepper
            transferDetails={transferDetails}
            continueClickHandler={handleAmountContinueClick}
            backClickHandler={onBackClick}
          />
        </>
      ),
    },
    {
      label: 'You',
      content: (
        <>
          <StepperTabTemplate
            containerWidth="788px"
            isBigContainer={false}
            LeftComponent={
              <IconButtonComponent
                src={ArrowRight}
                height="32px"
                width="32px"
                onClick={onBackClick}
              />
            }
            CenterComponent={
              <SendingMoneyTo onClick={handleSendingMoneyContinueClick} />
            }
          />
        </>
      ),
    },
    {
      label: 'Recipient',
      content: (
        <>
          <RecipientStepperTab
            recipientData={recipientData}
            handleBack={onBackClick}
            onContinue={handleRecipeantContinueClick}
          />
        </>
      ),
    },
    {
      label: 'Verification',
      content: (
        <Grid container justifyContent={'center'}>
          <VerificationStepperTab
            isComingBack={isComingFromBack}
            directors={ownersDirectorsLists.directorsList}
            owners={ownersDirectorsLists.directorsList}
            onContinueClick={handleVerificationContinueClick}
            onBackClick={onBackClick}
          />
        </Grid>
      ),
    },
    {
      label: 'Review',
      content: (
        <>
          <ReviewStepperTab
            accountDetails={recipientData}
            transferDetails={transferDetails}
            sending={'Now'}
            shouldArive={`by ${moment().add(2, 'days').format('MMM Do YY')}`}
            repeats={'Never'}
            onContinueClick={handleReviewContinueClick}
            onClickBackButton={onBackClick}
          />
        </>
      ),
    },
    {
      label: 'Pay',
      content: (
        <PayStepperTab
          continueClickHandler={onContinueClick}
          cancelClickHandler={onCancelClick}
          recipientDetails={recipientData}
          transferDetails={transferDetails}
        />
      ),
    },
  ]

  const profileComponent = (
    <Grid
      container
      gap="12px"
      justifyContent={'center'}
      mt="22px"
      flexDirection="row"
      sx={{
        ':hover': {
          cursor: 'pointer',
        },
      }}
    >
        <IconButtonComponent height="13px" width="13px" src={CloseLogo} onClick={routeChangeHome}/>
    </Grid>
  )

  return (
    <Grid data-testid="transaction-page">
      <StepperTemplate
        rightComponent={profileComponent}
        bottomComponent={stepData[activeStep].content}
        leftComponent={<LogoComp style={{ width: '103px', height: '22px' }} />}
        centerComponent={
          <Stepper stepDataArray={stepData} activeTab={activeStep} />
        }
      />
    </Grid>
  )
}


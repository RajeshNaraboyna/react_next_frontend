import { Grid } from '@mui/material'
import { useCallback, useState } from 'react'
import { OwnerDirectorDetails } from '../../../utils/types'
import { ConfirmDirectorOwner } from '../ConfirmOwnerConfirmDirector'
import { PurposeComponent } from '../../molecules/Purpose'

export interface VerificationStepperTabProps {
  directors?: OwnerDirectorDetails[]
  owners?: OwnerDirectorDetails[]
  onContinueClick: (
    directorsList: OwnerDirectorDetails[],
    ownersList: OwnerDirectorDetails[],
    reason: string
  ) => void
  onBackClick: () => void
  isComingBack: boolean
}

const newPerson: OwnerDirectorDetails = {
  firstName: '',
  lastName: '',
  dateOfBirth: null,
  countryOfResidence: '',
}

export const VerificationStepperTab = (props: VerificationStepperTabProps) => {
  const { directors, owners, onContinueClick, onBackClick, isComingBack } = props
  const [screenNumber, setScreenNumber] = useState(isComingBack ? 1 : 0)
  const [reason, setReason] = useState('')
  const handleContinueClick = useCallback((arg:string) => {  
    setReason(arg)
    setScreenNumber(1)
  }, [reason]);
  const handleContinueClickScreen1 = useCallback((directors:OwnerDirectorDetails[],owners:OwnerDirectorDetails[])=>{
    onContinueClick(directors, owners, reason)
  },[screenNumber])
  const handleBackClick = useCallback(() => {
    setScreenNumber(0)
  },[screenNumber])
  return (
    <Grid
      width={'100%'}
      display="flex"
      justifyContent={'center'}
      data-testid="verification-stepper"
      height='821px'
    >
      <Grid width="788px">
        {screenNumber === 0 ? (
          <PurposeComponent
            continueClickHandler={handleContinueClick}
            backClickHandler={onBackClick}
          />
        ) : (
          <ConfirmDirectorOwner
            directors={directors}
            owners={owners}
            onContinueClick={handleContinueClickScreen1}
            onBackClick={handleBackClick}
            screenNo={isComingBack? 1: 0}
          />
        )}
      </Grid>
    </Grid>
  )
}

import { Grid, Link, styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { OwnerDirectorDetails } from '../../../utils/types'
import InputTextComponent from '../InputField'
import DropDown from '../../molecules/DropDown'
import {
  confirmDirectorsOwnersValues,
  confirmOwnerDirectorConsts,
  countryOptions,
} from '../../../utils/constants'
import { TypographyComponent } from '../../atoms/Typography'
import theme from '../../../theme/theme'
import { DatePickerComponent } from '../DatePicker'
import { IconAndTextComponent } from '../../molecules/IcontAndText'
import AddIcon from '../../../assets/icons/plus.svg'
import IconButtonComponent from '../../atoms/Icon'
import RightArrow from '../../../assets/icons/arrow-right.svg'
import Close from '../../../assets/icons/close.svg'
import Button from '../../atoms/Button'
import { useCustomHook, useCustomHookForSubComponent } from './hook'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

export interface ConfirmDirectorOwnerProps {
  directors?: OwnerDirectorDetails[]
  owners?: OwnerDirectorDetails[]
  onContinueClick: (
    directorsList: OwnerDirectorDetails[],
    ownersList: OwnerDirectorDetails[]
  ) => void
  onBackClick: () => void
  screenNo?: number
}

export interface DirectorOwnerComponentProps {
  type: 'director' | 'shareHolder'
  number: number
  person: OwnerDirectorDetails
  onChange: (person: OwnerDirectorDetails, number: number, type: string) => void
  handleRemovePerson: (number: number) => void
}

const StyledGrid = styled(Grid)(() => ({
  overflowY: 'scroll',
  height:'max-content',
  maxHeight:'760px',
  display:'flex',
  boxSizing: 'border-box',
  '&::-webkit-scrollbar': { width: 0 },
}))

const DirectorOwnerComponent = (props: DirectorOwnerComponentProps) => {
  const {
    type,
    number,
    removePerson,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    dateOfBirth,
    setDateOfBirth,
    countryOfResidence,
    setCountryOfResidence,
  } = useCustomHookForSubComponent(props)
  return (
    <Grid
      key="director-or-owner"
      display={'flex'}
      container
      direction={'column'}
      gap="24px"
      width="516px"
      justifyContent={'center'}
    >
      <Grid
        key="typography"
        display={'flex'}
        justifyContent="space-between"
        alignItems={'center'}
      >
        <TypographyComponent
          variant="body3"
          color={theme.palette.text_color.high_emphasis}
        >
          {`${
            type === 'director'
              ? confirmOwnerDirectorConsts.directorText
              : confirmOwnerDirectorConsts.shareHolderText
          } ${number + 1}`}
        </TypographyComponent>
        {number > 0 && (
          <IconButtonComponent
            src={Close}
            height="24px"
            width="24px"
            onClick={removePerson}
          />
        )}
      </Grid>
      <Grid
        key="fields"
        display={'flex'}
        container
        direction={'column'}
        gap="28px"
        width="516px"
      >
        <InputTextComponent
          key="first-name"
          label={confirmOwnerDirectorConsts.firstNameFieldLabel}
          variantType="standard"
          value={firstName as string}
          onChange={setFirstName}
        />
        <InputTextComponent
          key="last-name"
          label="Last name"
          variantType="standard"
          value={lastName as string}
          onChange={setLastName}
        />
        <DatePickerComponent
          key="date-of-birth"
          value={dateOfBirth as Date}
          onChange={setDateOfBirth}
        />
        <DropDown
          key="country"
          height="60px"
          optionslist={countryOptions}
          onSelect={setCountryOfResidence}
          value={countryOfResidence}
          placeholder={confirmOwnerDirectorConsts.countryFieldLabel}
          onSelectLabel={confirmOwnerDirectorConsts.countryFieldLabel}
        />
      </Grid>
    </Grid>
  )
}

export const ConfirmDirectorOwner = (props: ConfirmDirectorOwnerProps) => {
  const {
    handelBackButton,
    screenNumber,
    directorsList,
    ownersList,
    handleRemovePerson,
    handlePersonChange,
    handleAddPersonClick,
    disableContinueButton,
    handelContinueButton,
  } = useCustomHook(props)

  return (
      <StepperTabTemplate
        containerHeight="821px"
        containerWidth="788px"
        isBigContainer={false}
        LeftComponent={
          <Box padding="4px" width="24px">
            <IconButtonComponent
              src={RightArrow}
              height="24px"
              width="24px"
              onClick={handelBackButton}
            />
          </Box>
        }
        CenterComponent={
          <Box height='100%'>
          <StyledGrid
            width='516px'
            container
            gap="32px"
            key="center-grid"
            test-id="main-container"
            alignItems={'flex-start'}
          >
            <Grid container direction="column" gap="12px" height={'100px'}>
              <TypographyComponent
                variant="heading1"
                color={theme.palette.text_color.high_emphasis}
              >
                {screenNumber === 0
                  ? confirmDirectorsOwnersValues.director.topText
                  : confirmDirectorsOwnersValues.owner.topText}
              </TypographyComponent>
              <TypographyComponent
                variant="body3"
                color={theme.palette.text_color.medium_emphasis}
              >
                {screenNumber === 0
                  ? confirmDirectorsOwnersValues.director.bottomText
                  : confirmDirectorsOwnersValues.owner.bottomText}
              </TypographyComponent>
            </Grid>
            <Grid container display={'flex'} direction="column" gap="32px">
              {screenNumber === 0
                ? directorsList.map(
                    (director: OwnerDirectorDetails, index: number) => (
                      <Grid key={`owners ${director.dateOfBirth}`}>
                        <DirectorOwnerComponent
                          key={`directors ${director.dateOfBirth}`}
                          handleRemovePerson={handleRemovePerson}
                          onChange={handlePersonChange}
                          number={index}
                          person={director}
                          type="director"
                        />
                      </Grid>
                    )
                  )
                : ownersList.map(
                    (owner: OwnerDirectorDetails, index: number) => (
                      <Grid key={`owners ${owner.dateOfBirth}`}>
                        <DirectorOwnerComponent
                          key={`owners ${owner.dateOfBirth}`}
                          handleRemovePerson={handleRemovePerson}
                          onChange={handlePersonChange}
                          number={index}
                          person={owner}
                          type="shareHolder"
                        />
                      </Grid>
                    )
                  )}
              <Grid container display={'flex'} sx={{ marginTop: '-16px' }}>
                <Link
                  variant={'link_text'}
                  sx={{ textDecoration: 'none' }}
                  children={
                    <IconAndTextComponent
                      src={AddIcon}
                      title={
                        screenNumber === 0
                          ? confirmOwnerDirectorConsts.textForAddDirector
                          : confirmOwnerDirectorConsts.textForAddOwner
                      }
                      imgHeight="24px"
                      imgWidth="24px"
                      variant="body3"
                      gap="12px"
                    />
                  }
                  onClick={handleAddPersonClick}
                />
              </Grid>
            </Grid>
          </StyledGrid>
          </Box>
        }
        RightComponent={
          <Button
            data-testid="continueButton"
            height="56px"
            variant="contained"
            children={confirmOwnerDirectorConsts.continueButtonText}
            width="135px"
            disabled={disableContinueButton}
            onClick={handelContinueButton}
          ></Button>
        }
      />
  )
}

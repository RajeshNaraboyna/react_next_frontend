import { Box, Grid, Link, styled } from '@mui/material'
import Dialog from '@material-ui/core/Dialog'
import React from 'react'
import theme from '../../../theme/theme'
import Button from '../../atoms/Button'
import { TypographyComponent } from '../../atoms/Typography'
import { AddressRadioText } from '../../molecules/AddressRadioText'
import { AddTradingAddress } from '../AddTradingAddress'
import InputTextComponent from '../InputField'
import { useCustomHook } from './hook'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

export interface ConfirmTradingAddressProps {
  addresses: string[]
  onClickConfirm: (addressesList: string[], address: string) => void
}

const StyledGrid = styled(Grid)(() => ({
  gap: theme.spacing(1.5),
  display: 'flex',
  width: '516px',
}))

export default function ConfirmTradingAddressComponent(
  props: ConfirmTradingAddressProps
) {
  const {
    isInEditPage,
    onChange,
    setCurrentAddress,
    addressIndex,
    currentAddress,
    addressList,
    handleAddAddress,
    handleCancelClick,
    handleConfirm,
    handleSaveClick,
    isSaveButtonEnabled,
    isPopupOpen,
    handleClose,
    fullScreen,
    addNewAddress,
    handleEditClick,
    isAddButtonEnabled,
  } = useCustomHook(props)
  return (
    <Grid height="100%" data-testid="confirmTradingAddress">
      <Box display={'flex'} justifyContent="center">
        <Grid
          width="516px"
          container
          direction={'column'}
          display="flex"
          gap={theme.spacing(5)}
        >
          <StyledGrid direction={'column'}>
            <TypographyComponent
              variant="heading1"
              color={theme.palette.text_color.high_emphasis}
            >
              Confirm trading address
            </TypographyComponent>
            <TypographyComponent
              variant="body3"
              color={theme.palette.text_color.medium_emphasis}
            >
              Your trading address is usually the place you work every day. If
              the business has multiple trading addresses, add as many as
              possible
            </TypographyComponent>
          </StyledGrid>
          <StyledGrid direction={'column'}>
            <Grid
              container
              display="flex"
              justifyContent="space-between"
              direction="row"
              alignItems={'center'}
            >
              <TypographyComponent
                variant="body1"
                color={theme.palette.text_color.medium_emphasis}
              >
                Trading addresses
              </TypographyComponent>
              {!isInEditPage && (
                <Link
                  variant={'link_text'}
                  color={theme.palette.primary.primary_500}
                  children={'Edit'}
                  onClick={handleEditClick}
                  sx={{
                    textDecorationColor: theme.palette.primary.primary_500,
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                />
              )}
            </Grid>
            <Grid>
              {!isInEditPage ? (
                <AddressRadioText onChange={onChange} addresses={addressList} />
              ) : (
                <Box paddingTop='24px'>
                <InputTextComponent
                  onChange={setCurrentAddress}
                  label={`Trading address ${addressIndex + 1}`}
                  helperText="Enter address"
                  variantType="multiline"
                  width="516px"
                  height="98px"
                  value={currentAddress}
                />
                </Box>
              )}
            </Grid>
          </StyledGrid>
          <Grid gap="20px" direction={'column'} container alignItems={'center'}>
            <Button
              variant="outlined"
              width="218px"
              height="56px"
              disabled={!isInEditPage && !isAddButtonEnabled}
              onClick={!isInEditPage ? handleAddAddress : handleCancelClick}
            >
              {!isInEditPage ? 'Add Trading address' : 'Cancel'}
            </Button>
            <Button
              variant="contained"
              width="218px"
              height="56px"
              onClick={!isInEditPage ? handleConfirm : handleSaveClick}
              disabled={isInEditPage && !isSaveButtonEnabled}
            >
              {!isInEditPage ? 'Confirm' : 'Save'}
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        open={isPopupOpen}
        onClose={handleClose}
        fullScreen={fullScreen}
        aria-labelledby="responsive-dialog-title"
      >
        <AddTradingAddress
          onSave={addNewAddress}
          addressNumber={addressList.length + 1}
        />
      </Dialog>
    </Grid>
  )
}

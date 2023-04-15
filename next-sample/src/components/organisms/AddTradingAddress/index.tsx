import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useCallback, useEffect, useState } from 'react'
import theme from '../../../theme/theme'
import { addTradingAddressConsts } from '../../../utils/constants'
import Button from '../../atoms/Button'
import InputTextComponent from '../InputField'

interface AddTradingAddressProps {
  onSave: (arg: string) => void
  addressNumber: number
}
export const AddTradingAddress = (props: AddTradingAddressProps) => {
  const [address, setAddress] = useState('')
  const [isButtonEnabled, setIsButtonEnabled] = useState(true)
  const handleChange = useCallback(
    (value: string) => {
      setAddress(value)
    },
    [address]
  )
  const handleClick = useCallback(() => {
    props.onSave(address)
  }, [address])
  useEffect(() => {
    if (address.length >= 10) {
      setIsButtonEnabled(true)
    } else {
      setIsButtonEnabled(false)
    }
  }, [address])

  return (
    <Grid
      width="564px"
      container
      borderRadius={'16px'}
      direction="column"
      sx={{ backgroundColor: 'white' }}
      padding="24px"
      gap="32px"
      data-testid="addAddress"
    >
      <Typography variant="body1" color={theme.palette.grey_color.icon_1}>
        {addTradingAddressConsts.header}
      </Typography>
      <InputTextComponent
        width="516px"
        variantType="multiline"
        onChange={handleChange}
        label={`Trading address ${props.addressNumber}`}
        helperText={addTradingAddressConsts.inputFieldHelperText}
      />
      <Box
        display={'flex'}
        width="100%"
        justifyContent={'center'}
        marginTop="8px"
      >
        <Button
          disabled={!isButtonEnabled}
          variant="contained"
          width="135px"
          height="56px"
          children={addTradingAddressConsts.buttonText}
          onClick={handleClick}
        />
      </Box>
    </Grid>
  )
}

import * as React from 'react'
import { SelectCustProps } from '.'
import { SelectChangeEvent } from '@mui/material/Select'
import { Grid } from '@mui/material'

export const useCustomHook = (props: SelectCustProps) => {
  const [selectedCode, setSelectedCode] = React.useState(
    props.value ? props.value : ''
  )
  const [open, setOpen] = React.useState(false)

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedCode(event.target.value as string)
    if (props.onSelect) {
      props.onSelect(event.target.value as string)
    }
  }

  const renderValHandler = (value: unknown) => {
    const renderObj = props.optionslist.filter((option) => {
      return option && option.code === value
    })[0]
    return (
      props.optionslist && (
        <Grid container display="flex" justifyContent="space-between">
          <Grid item>{renderObj.label}</Grid>
          {renderObj.cardLabel && (
            <Grid item>{`xxxx xxxx ${renderObj.cardLabel}`}</Grid>
          )}
        </Grid>
      )
    )
  }

  const openTrue = () => {
    setOpen(true)
  }

  const openFalse = () => {
    setOpen(false)
  }

  return {
    selectedCode,
    handleChange,
    renderValHandler,
    openTrue,
    openFalse,
    open,
  }
}

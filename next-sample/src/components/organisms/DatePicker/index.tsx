import React, { useState, useEffect, useCallback } from 'react'
import { ThemeProvider, styled, TextField, TextFieldProps } from '@mui/material'
import { StyledEngineProvider } from '@mui/styled-engine'
import theme from '../../../theme/theme'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment, { Moment } from 'moment'
import CalendarTodayOutlined from '@mui/icons-material/CalendarTodayOutlined'
import { datePickerConsts } from '../../../utils/constants'
interface DatePickerProps {
  value?: Date
  onChange: (arg: Date) => void
  label?: string
  width?: any
}

interface DatePickProp {
  width?: any
}

const StyledDatePicker = styled(DatePicker)((props: DatePickProp) => ({
  height: '60px',
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.grey_color.stroke_2} !important`,
    borderRadius: '8px',
  },
  '& .MuiInputBase-input': {
    padding: '20px 21px 16px 18px',
    fontSize: '17px !important',
    lineHeight: '24px',
    color: theme.palette.text_color.high_emphasis,
    width: props.width ? props.width : '100%',
  },
  '& .MuiOutlinedInput-root': {
    fontSize: '20px',
  },
  '& .MuiFormLabel-root': {
    fontSize: '17px',
    lineHeight: '21px',
    marginTop: '4px',
    color: `${theme.palette.text_color.low_emphasis} !important`,
  },
  '& .Mui-focused': {
    color: `${theme.palette.primary.primary_500} !important`,
    borderBottomRightRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(2),
    borderBottom: '2px solid #7633FF !important',
  },
  '& .MuiInputLabel-shrink': {
    color: `${theme.palette.text_color.low_emphasis}`,
    fontSize: '20px !important',
    border: 'none !important',
  },
  '& .MuiIconButton-root': {
    marginRight: '0px',
    padding:'3px'
  },
}))
export const DatePickerComponent = (props: DatePickerProps) => {
  const { onChange, value, label } = props
  const [selectedDate, handleDateChange] = useState<Moment | null>(
    value ? moment(value) : null
  )
  useEffect(() => {
    if (selectedDate) {
      onChange(selectedDate.toDate())
    }
  }, [selectedDate])
  const handleChange = useCallback(
    (value: unknown) => {
      handleDateChange(value as Moment)
    },
    [selectedDate]
  )
  const CustomTextField = useCallback(
    (props: TextFieldProps) => (
      <TextField
        {...props}
        sx={{
          svg: {
            color:
              selectedDate !== null
                ? theme.palette.text_color.high_emphasis
                : theme.palette.text_color.low_emphasis,
          },
        }}
      />
    ),
    []
  )
  const handleDateFormat = useCallback((day: string) => day.toUpperCase(), [])
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <StyledDatePicker
            data-testid="datePicker"
            width={props.width ? props.width : '100%'}
            PopperProps={{
              placement: 'bottom-end',
              style: {
                fontFamily: 'Gerbera',
                fontSize: '14px !important',
                lineHeight: '21px !important',
              },
            }}
            dayOfWeekFormatter={handleDateFormat}
            components={{
              OpenPickerIcon: CalendarTodayOutlined,
            }}
            label={label ? label : datePickerConsts.label}
            value={selectedDate}
            onChange={handleChange}
            renderInput={CustomTextField}
            maxDate={moment().subtract(18,"y").toDate()}
          />
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

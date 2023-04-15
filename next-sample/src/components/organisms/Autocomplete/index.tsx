import React, { useCallback, useState } from 'react'
import {
  Autocomplete,
  Box,
  Grid,
  InputAdornment,
  styled,
  TextField,
  AutocompleteInputChangeReason,
  Paper,
} from '@mui/material'
import SearchIcon from '../../../assets/icons/search.svg'
import IconButtonComponent from '../../atoms/Icon'
import theme from '../../../theme/theme'
import { TypographyComponent } from '../../atoms/Typography'

const StyledAutocomplete = styled(Autocomplete)(() => ({
  '& .MuiOutlinedInput-root': {
    paddingRight: '17px !important',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid',
    borderColor: theme.palette.grey_color.stroke_2,
    borderRadius: '8px',
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid',
    borderColor: theme.palette.grey_color.stroke_2,
    borderRadius: '8px',
  },
  '& .MuiAutocomplete-input, & .MuiInputLabel-root': {
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
    textTransform: theme.typography.body2.textTransform,
    fontFamily: theme.typography.body2.fontFamily,
    color: theme.palette.text_color.high_emphasis,
    '& ::placeholder': {
      color: theme.palette.text_color.low_emphasis,
    },
  },
  '& .MuiAutocomplete-noOptions': {
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
    textTransform: theme.typography.body2.textTransform,
    fontFamily: theme.typography.body2.fontFamily,
  },
}))

const Option = styled('li')({
  fontSize: theme.typography.body2.fontSize,
  lineHeight: theme.typography.body2.lineHeight,
  textTransform: theme.typography.body2.textTransform,
  fontFamily: theme.typography.body2.fontFamily,
  color: theme.palette.text_color.high_emphasis,
  padding: '16px 0px 22px 18px !important',
})

const ListBoxComponent = React.forwardRef(
  (props: any, ref: React.ForwardedRef<unknown>) => {
    return (
      <>
        <ul
          {...props}
          style={{
            paddingBottom: '0',
            overflowX: 'hidden',
          }}
        >
          {props.children}
          <li
            style={{
              bottom: '0',
              position: 'sticky',
              margin: '0',
              padding: '0',
              background: 'white',
              borderTop: `1px solid ${theme.palette.grey_color.stroke_2}`,
            }}
          >
            <Grid
              container
              flexDirection={'row'}
              padding="16px 0px 22px 18px"
              border="1px solid"
              borderTop="none"
              borderColor={theme.palette.grey_color.stroke_2}
              borderRadius="0px 0px 8px 8px"
              width={'516px'}
            >
              <TypographyComponent
                color={theme.palette.text_color.medium_emphasis}
                variant="body2"
                children="Can't find your business"
              />
              <TypographyComponent
                color={theme.palette.text_color.medium_emphasis}
                variant="body4"
                children={'?'}
              />
              <Grid marginLeft="8px">
                <TypographyComponent
                  color={theme.palette.primary.primary_500}
                  variant="body2"
                  children="Enter your details"
                />
              </Grid>
            </Grid>
          </li>
        </ul>
      </>
    )
  }
)

const DefaultListBox = React.forwardRef(
  (props: any, ref: React.ForwardedRef<unknown>) => {
    return (
      <>
        <ul {...props}>{props.children}</ul>
      </>
    )
  }
)

const CustomPaperComponent = (props: any) => {
  return (
    <Box>
      <Paper
        sx={{
          boxShadow: 'none',
          borderRight: '1px solid',
          borderLeft: '1px solid',
          borderBottom: '1px solid',
          borderColor: theme.palette.grey_color.stroke_2,
          borderRadius: '0px 0px 8px 8px',
          overflow: 'hidden',
        }}
        {...props}
      />
    </Box>
  )
}

export interface AutocompleteProps {
  label: string
  options: string[]
  isCustomListBoxReq: boolean
  onOptionSelectHandler: (value: string) => void
  icon?: any
  labelMain?: any
  value?: any
  type?: 'Search' | 'Drop'
}

const AutocompleteComponent = (props: AutocompleteProps) => {
  const {
    label,
    options,
    isCustomListBoxReq,
    onOptionSelectHandler,
    labelMain,
    type,
  } = props

  const onChangeHandler = useCallback(
    (
      event: React.SyntheticEvent<Element, Event>,
      value: string,
      reason: AutocompleteInputChangeReason
    ) => {
      onOptionSelectHandler(value)
    },
    []
  )

  const [isOpen, setIsOpen] = useState(false)
  const onOpenHandler = useCallback(() => setIsOpen(true), [isOpen])
  const onCloseHandler = useCallback(() => setIsOpen(false), [isOpen])
  const optionLabel = useCallback((option: any) => option, [])
  const renderOptionFunc = useCallback(
    (props2: any, option: any) => <Option {...props2}>{option}</Option>,
    []
  )
  const renderInputFunc = useCallback(
    (params: any) => (
      <TextField
        {...params}
        placeholder={isOpen && type === 'Drop' ? 'Search' : label}
        label={isOpen ? '' : labelMain}
        variant="outlined"
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <InputAdornment position="end">
              {isOpen ? (
                <></>
              ) : (
                <IconButtonComponent
                  src={props.icon ? props.icon : SearchIcon}
                  width="24px"
                  height="24px"
                />
              )}
            </InputAdornment>
          ),
        }}
      />
    ),
    []
  )
  return (
    <StyledAutocomplete
      data-testid="autocompleteComponent"
      options={options}
      onInputChange={onChangeHandler}
      onOpen={onOpenHandler}
      onClose={onCloseHandler}
      getOptionLabel={optionLabel}
      renderOption={renderOptionFunc}
      PaperComponent={CustomPaperComponent}
      ListboxComponent={isCustomListBoxReq ? ListBoxComponent : DefaultListBox}
      renderInput={renderInputFunc}
      // sx is added in styled component, to dynamically change styles based on state
      sx={{
        width: '516px',
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
          {
            border: '1px solid',
            borderColor: theme.palette.grey_color.stroke_2,
            borderBottom: isOpen ? 'none' : '1px solid',
            borderRadius: isOpen ? '8px 8px 0px 0px' : '8px',
          },
        '.css-q1bizp-MuiInputBase-root-MuiOutlinedInput-root': {
          color: theme.palette.grey_color.stroke_2,
        },
      }}
    />
  )
}

export default AutocompleteComponent

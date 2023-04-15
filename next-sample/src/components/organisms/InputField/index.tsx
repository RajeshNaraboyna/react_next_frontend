import { InputAdornment, styled, TextField } from '@mui/material'
import React, { useCallback, useState } from 'react'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import EyeOff from '../../../assets/icons/eye-off.svg'
import Eye from '../../../assets/icons/eye.svg'
import Card from '../../../assets/icons/credit-card.svg'
import CardSecondary from '../../../assets/icons/credit-card_secondary.svg'
import EyeSecondary from '../../../assets/icons/eye-secondary.svg'

interface InputTextProps {
  value?: string | number
  label?: string
  helperText?: string
  width?: string
  height?: string
  variantType?: 'password' | 'multiline' | 'standard' | 'card' | 'number'
  maxLength?: number
  disabled?: boolean
  onChange: (arg: string) => void
}

const StyledInputField = styled(TextField)((props: InputTextProps) => ({
  width: props.width,
  height: props.height,
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

  '& .MuiOutlinedInput-input': {
    padding: '0px',
  },
  '& .MuiOutlinedInput-root': {
    padding:
      props.variantType === 'multiline'
        ? '24px 21px 26px 18px'
        : '20px 21px 16px 18px',
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
    borderRadius: 'none !important',
    border: 'none !important',
  },
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
}))

const InputTextComponent = (props: InputTextProps) => {
  const {
    label,
    helperText,
    width,
    height,
    onChange,
    value,
    variantType,
    maxLength,
    disabled,
  } = props
  const [labelString, setLabelString] = useState(getLabel())
  const [isShowPassWord, setIsShowPassword] = useState(false)
  const [isValueNull, setIsValueNull] = useState<boolean>(
    value === undefined ? true : false
  )
  function getLabel(): string | (() => string | undefined) | undefined {
    if (variantType === 'standard' || variantType === 'number') return label
    return value ? label : ''
  }

  const handleChange = useCallback((e: any) => {
    if (variantType === 'card') {
      e.target.value = e.target.value.slice(0, 3)
    }
    let val: string = e.target.value
    if (val === '') {
      setIsValueNull(true)
    } else {
      setIsValueNull(false)
    }
    if (maxLength !== undefined && maxLength <= val.length) {
      e.target.value = e.target.value.slice(
        0,
        variantType === 'card' ? 3 : maxLength
      )
    }
    if (val === '' && variantType === 'multiline') {
      setLabelString('')
    }
    onChange(e.target.value)
  }, [])
  const handleClickShowPassword = useCallback(() => {
    setIsShowPassword(!isShowPassWord)
  }, [isShowPassWord])

  return (
    <StyledInputField
      data-testid="inputField"
      width={width}
      height={height}
      disabled={disabled}
      multiline={variantType === 'multiline' ? true : false}
      variant="outlined"
      defaultValue={value}
      onChange={handleChange}
      label={labelString}
      type={getType()}
      variantType={variantType}
      placeholder={helperText}
      InputProps={{
        onClick: () => {
          setLabelString(label as string)
        },
        endAdornment: getAdornment(),
      }}
    />
  )

  function getAdornment(): React.ReactNode {
    return (
      (variantType === 'password' || variantType === 'card') && (
        <InputAdornment position="end">
          <IconButtonComponent
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            src={getSrc()}
          />
        </InputAdornment>
      )
    )
  }

  function getType(): React.HTMLInputTypeAttribute | undefined {
    if (variantType === 'card' || variantType === 'number') return 'number'
    if (variantType !== 'password') return 'text'
    return isShowPassWord ? 'text' : 'password'
  }

  function getSrc(): string | undefined {
    if (variantType !== 'password') return isValueNull ? CardSecondary : Card
    if (isValueNull) return EyeSecondary
    return !isShowPassWord ? Eye : EyeOff
  }
}
export default InputTextComponent

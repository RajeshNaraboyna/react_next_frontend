import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectProps } from '@mui/material/Select'
import { Grid, styled } from '@mui/material'
import theme from '../../../theme/theme'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import ImageComponent from '../../atoms/Image'
import { TypographyComponent } from '../../atoms/Typography'
import { useCustomHook } from './hooks'

const StyledFormControl = styled(FormControl)(() => ({
  '& .MuiInputLabel-shrink': {
    color: `${theme.palette.text_color.low_emphasis} !important`,
    fontSize: '17px !important',
    borderRadius: 'none !important',
    border: 'none !important',
  },
  '& .MuiFormLabel-root': {
    fontSize: '17px',
    lineHeight: '21px',
    marginTop: '4px',
    color: `${theme.palette.text_color.low_emphasis} !important`,
  },
  '& .MuiInputBase-input': {
    fontSize: '17px !important',
    lineHeight: '21px',
    color: theme.palette.text_color.high_emphasis,
  },

}))


const MenuPropsC = {
  PaperProps: {
    style: {
      boxShadow: 'none',
      border: '1px solid ' + theme.palette.grey_color.main,
      borderRadius: '8px',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
      borderTop: 'none',
      backgroundColor: theme.palette.structural_color.white,
    },
    sx: {
      boxSizing: 'border-box',
      overflow: 'auto',
    },
  },
}

export interface OptionsType {
  cardLabel?: string
  code: string
  label: string
  suggested?: boolean
  logo?: any
  disabled?: boolean
  subLabel?: string
}

export interface SelectCustProps extends SelectProps {
  width?: string
  height?: string
  opacity?: string
  optionslist: OptionsType[]
  onSelectLabel?: string
  optionselected?: string
  opened?: any
  onSelect?: any
  children?: any
  isDropDownOpenByDefault?: boolean
  selctedTextColor?: string
}

const CustomSelect = styled(Select)((props: SelectCustProps) => ({
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid ' + theme.palette.grey_color.main,
  },
  '& .MuiOutlinedInput-input': {
    fontFamily: theme.typography.heading1.fontFamily,
    fontSize: '17px',
    lineHeight: '24px',
    color: props.selctedTextColor
      ? `${props.selctedTextColor}` + ' !important'
      : theme.palette.text_color.high_emphasis + ' !important',
  },
  '& .MuiSelect-select': {
    width: props.width ? props.width : '516px',
    height: '60px',
    boxSizing: 'border-box',
    color: theme.palette.text_color.medium_emphasis,
    borderRadius: '8px',
    lineHeight: '30px',
  },
  '&.Mui-focused': {},
  '& .MuiOutlinedInput-notchedOutline legend': {
    display: props.optionselected === 'false' ? 'none' : 'block',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.grey_color.stroke_2} !important`,
    borderRadius: '8px',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey_color.main,
    border: '1px solid ' + theme.palette.grey_color.main,
    borderBottom:
      props.opened === 'true'
        ? 'none'
        : '1px solid ' + theme.palette.grey_color.main,
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },
  '&.Mui-selected:hover': {},
  '& .MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl:hover':
    {
      border: 'none',
    },
  '& .MuiSelect-icon ': {
    marginRight: '11px',
  },
  '& .MuiSelect-icon path': {
    height: '6px',
    width: '11px',
  },
  '& .MuiSelect-iconOutlined': {
    color: theme.palette.text_color.high_emphasis,
    display: props.optionselected === 'false' ? 'block' : 'none',
  },
  '& .MuiSelect-iconOpen': {
    display: 'none',
  },
  '& .MuiInputLabel-shrink': {
    color: theme.palette.text_color.medium_emphasis,
    fontFamily: theme.typography.heading1.fontFamily,
    fontSize: '14px !important',
  },
}))

interface InputLabelProps {
  id?: string
  optionselected: string
}

const CustomInputLabel = styled(InputLabel)((props: InputLabelProps) => ({
  '&.Mui-focused,&.MuiFormLabel-filled': {
    color: theme.palette.text_color.medium_emphasis,
    fontFamily: theme.typography.heading1.fontFamily,
  },
}))

interface MenuItemProps {
  id?: string
  disabled?: any
  value?: any
}

const CustomMenuItem = styled(MenuItem)((props: MenuItemProps) => ({
  '&': {
    boxShadow: 'none',
    marginBottom: '8px',
    backgroundColor: `${theme.palette.structural_color.white}  !important`,
  },
  '&.Mui-disabled': {
    opacity: 1,
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.structural_color.white,
  },
  '&.Mui-selected:hover': {
    backgroundColor: `${theme.palette.structural_color.card_hover} !important`,
  },
}))

const DropDown = (props: SelectCustProps) => {
  const {
    selectedCode,
    handleChange,
    renderValHandler,
    openTrue,
    openFalse,
    open,
  } = useCustomHook(props)
  return (
    <Box data-testid={'select-comp'} sx={{ minWidth: 120 }}>
      <StyledFormControl>
        <CustomInputLabel
          data-testid="select-comp-title"
          shrink={selectedCode ? true : false}
          optionselected={selectedCode ? 'true' : 'false'}
          id="demo-simple-select-label"
        >
          {selectedCode ? props.onSelectLabel : props.placeholder}
        </CustomInputLabel>
        <CustomSelect
          native={props.native}
          data-testid="select"
          optionselected={selectedCode ? 'true' : 'false'}
          width={props.width}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCode}
          label={props.onSelectLabel}
          placeholder={props.placeholder}
          onChange={handleChange}
          renderValue={renderValHandler}
          MenuProps={MenuPropsC}
          IconComponent={KeyboardArrowDownOutlinedIcon}
          onOpen={openTrue}
          onClose={openFalse}
          opened={open ? 'true' : 'false'}
          optionslist={props.optionslist}
          defaultOpen={props.isDropDownOpenByDefault}
          selctedTextColor={props.selctedTextColor}
        >
          {props.optionslist.map((option, index) =>
            props.native ? (
              <option value={option.code}>{option.label}</option>
            ) : (
              <CustomMenuItem
                data-testid={'menu-item'}
                key={option.code}
                disabled={option.disabled}
                value={option.code}
              >
                <Box
                  component="div"
                  sx={{
                    '& > img': { mr: '24px' },
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  {option.logo && (
                    <ImageComponent
                      width="24px"
                      height="24px"
                      src={option.logo}
                    />
                  )}
                  {option.cardLabel ? (
                    <Grid
                      container
                      display="flex"
                      direction="column"
                      gap="9px"
                      paddingTop={theme.spacing(2.75)}
                    >
                      <TypographyComponent
                        variant="body2"
                        color={theme.palette.text_color.high_emphasis}
                        name={option.label}
                      />
                      {option.cardLabel && (
                        <TypographyComponent
                          variant="caption1"
                          color={theme.palette.text_color.low_emphasis}
                        >{`Ending in ${option.cardLabel}`}</TypographyComponent>
                      )}
                    </Grid>
                  ) : (
                    <Grid container justifyContent="space-between">
                      <TypographyComponent name={option.label} />
                      {option.subLabel && (
                        <TypographyComponent
                          name={option.subLabel}
                          color={theme.palette.text_color.medium_emphasis}
                          style={{ marginRight: '8px' }}
                        />
                      )}
                    </Grid>
                  )}
                </Box>
              </CustomMenuItem>
            )
          )}
        </CustomSelect>
      </StyledFormControl>
    </Box>
  )
}
export default DropDown

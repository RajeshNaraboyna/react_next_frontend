import { Box, Grid, styled, Typography } from '@mui/material'
import { useCallback } from 'react'
import theme from '../../../theme/theme'
import { IconAndTextComponent } from '../IcontAndText'
import { sendingMoneyToOptions } from '../../../utils/constants'

export interface SendingMoneyToProps {
  onClick: (arg: any) => void
}

const StyledBox = styled(Box)(() => ({
  height: '60px',
  width: '100%',
  alignItems: 'center',
  border: `1px solid ${theme.palette.grey_color.stroke_2}`,
  borderRadius: '8px',
  '& :hover': {
    backgroundColor: `${theme.palette.structural_color.card_hover}`,
  },
}))

const StyledInnerBox = styled(Box)(() => ({
  paddingLeft: '22.83px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}))

export const SendingMoneyTo = (props: SendingMoneyToProps) => {
  const { onClick } = props
  const handleBusinessClick = useCallback(() => {
    onClick('Business or Charity')
  }, [])
  const card = (src: string, text: string) => (
    <StyledBox data-testid="SendingMoneyTo-option">
      <StyledInnerBox>
        <IconAndTextComponent
          src={src}
          title={text}
          variant="body2"
          gap="16.83px"
          imgHeight="34px"
          imgWidth="34px"
          color={theme.palette.text_color.high_emphasis}
        />
      </StyledInnerBox>
    </StyledBox>
  )

  const cardWithOnClick = (src: string, text: string) => (
    <StyledBox
      onClick={handleBusinessClick}
      data-testid="SendingMoneyTo-option"
    >
      <StyledInnerBox>
        <IconAndTextComponent
          src={src}
          title={text}
          variant="body2"
          gap="16.83px"
          imgHeight="34px"
          imgWidth="34px"
          color={theme.palette.text_color.high_emphasis}
        />
      </StyledInnerBox>
    </StyledBox>
  )

  return (
    <Grid
      container
      gap="32px"
      display="flex"
      direction={'column'}
      data-testid="SendingMoneyTo"
    >
      <Box>
        <Typography
          variant="heading1"
          color={theme.palette.text_color.high_emphasis}
        >
          Who are you sending money to
        </Typography>
        <Typography
          variant="heading1"
          color={theme.palette.text_color.high_emphasis}
          fontFamily="Roboto"
        >
          ?
        </Typography>
      </Box>
      <Grid container gap="20px" display="flex" direction={'column'}>
        {sendingMoneyToOptions.map(({ text, imageSrc }) =>
          text === 'Business or Charity'
            ? cardWithOnClick(imageSrc, text)
            : card(imageSrc, text)
        )}
      </Grid>
    </Grid>
  )
}

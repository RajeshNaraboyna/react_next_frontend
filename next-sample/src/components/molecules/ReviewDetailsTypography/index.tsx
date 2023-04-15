import { Grid, Link } from '@mui/material'
import IconButtonComponent from '../../atoms/Icon'
import { TypographyComponent } from '../../atoms/Typography'
import ArrowRight from '../../../assets/icons/arrow-right.svg'
import theme from '../../../theme/theme'

export interface ReviewDetailsTypographyProps {
  headerText: string
  linkText?: string
  subHeaderTextLeft?: string
  subHeaderTextRight?: string
  keysValuesText: {
    key: string
    value: string
  }[]
  onClick?: React.MouseEventHandler<HTMLAnchorElement> &
    React.MouseEventHandler<HTMLSpanElement>
  width?: string
}

const ReviewDetailsTypography = (props: ReviewDetailsTypographyProps) => {
  const {
    headerText,
    linkText,
    keysValuesText,
    subHeaderTextLeft,
    subHeaderTextRight,
    onClick,
    width,
  } = props
  return (
    <Grid
      data-testid="reviewDetailsTypographyComponent"
      width={width ? width : '510px'}
    >
      <Grid container justifyContent={'space-between'}>
        <TypographyComponent
          variant={'caption1'}
          children={headerText}
          color={theme.palette.text_color.low_emphasis}
        />
        {linkText ? (
          <Link
            variant={'link_text'}
            color={theme.palette.primary.primary_500}
            onClick={onClick}
            children={linkText}
            sx={{
              textDecorationColor: theme.palette.primary.primary_500,
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          />
        ) : (
          <></>
        )}
      </Grid>
      {subHeaderTextLeft && subHeaderTextRight ? (
        <Grid container gap="10px" marginTop={'16px'}>
          <TypographyComponent
            variant="body2"
            color={theme.palette.text_color.high_emphasis}
            children={subHeaderTextLeft}
          />
          <IconButtonComponent
            src={ArrowRight}
            height="24px"
            width="24px"
            disabled={true}
          />
          <TypographyComponent
            variant="body2"
            color={theme.palette.text_color.high_emphasis}
            children={subHeaderTextRight}
          />
        </Grid>
      ) : (
        <></>
      )}
      {keysValuesText.map((text) => (
        <Grid
          container
          justifyContent={'space-between'}
          flexDirection="row"
          marginTop={'12px'}
          key={text.key}
        >
          <TypographyComponent
            variant="body2"
            color={theme.palette.text_color.medium_emphasis}
            children={text.key}
          />
          <TypographyComponent
            variant="body2"
            color={theme.palette.text_color.high_emphasis}
            children={text.value}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default ReviewDetailsTypography

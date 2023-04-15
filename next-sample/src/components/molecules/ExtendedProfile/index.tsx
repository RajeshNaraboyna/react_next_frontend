import { Box, Divider, Grid, styled } from '@mui/material'
import theme from '../../../theme/theme'
import { IconAndTextComponent } from './../../molecules/IcontAndText'
import { TypographyComponent } from '../../atoms/Typography'
import UserIcon from '../../../assets/icons/user.svg'
import SettingIcon from '../../../assets/icons/settings.svg'
import HelpIcon from '../../../assets/icons/help-circle.svg'
import LogoutIcon from '../../../assets/icons/logout.svg'

export interface ExtendedProfileComponentProps {
  name?: string
  userId?: string
  handleLogout?: (arg: any) => void;
}

const StyledGrid = styled(Grid)((props: ExtendedProfileComponentProps) => ({
  border: '1px solid',
  backgroundColor: theme.palette.structural_color.white,
  borderColor: 'transparent',
  borderRadius: '8px',
  height: '309px',
  width: '230px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'
}))

const StyledBox = styled(Box)((props: ExtendedProfileComponentProps) => ({
  height: '56px',
  width: '210px',
  alignItems: 'center',
  paddingLeft: '20px',
  '&:hover': {
    backgroundColor: theme.palette.structural_color.card_hover,
    cursor: 'default',
  },
}))

export const ExtendedProfileComponent = (
  props: ExtendedProfileComponentProps
) => {
  return (
    <StyledGrid data-testid="extendedProfileComponent">
      <Grid
        container
        display="flex"
        direction="column"
        gap="2px"
        style={{ marginLeft: '20px', marginTop: '16px' }}
        sx={{
          ':hover': {
            cursor: 'default',
          },
        }}
      >
        <TypographyComponent
          variant="body2"
          children={props.name}
          color={theme.palette.text_color.high_emphasis}
        />
        <TypographyComponent
          variant="caption1"
          children={props.userId}
          color={theme.palette.text_color.low_emphasis}
        />
      </Grid>
      <Divider style={{ marginTop: '8px' }}></Divider>
      <Grid
        container
        display="flex"
        direction="column"
      >
        <StyledBox display="flex">
          <IconAndTextComponent
            src={UserIcon}
            title="Your details"
            gap="20px"
            iconHeight="15.52px"
            iconWidth="16px"
            color={theme.palette.text_color.high_emphasis}
            variant="body2"
          />
        </StyledBox>
        <StyledBox display="flex">
          <IconAndTextComponent
            src={SettingIcon}
            title="Settings"
            gap="20px"
            iconHeight="19px"
            iconWidth="18px"
            color={theme.palette.text_color.high_emphasis}
            variant="body2"
          />
        </StyledBox>
        <StyledBox display="flex">
          <IconAndTextComponent
            src={HelpIcon}
            title="Help Centre"
            gap="20px"
            iconHeight="20px"
            iconWidth="20px"
            color={theme.palette.text_color.high_emphasis}
            variant="body2"
          />
        </StyledBox>
        <StyledBox
          onClick={props.handleLogout}
          sx={{
            ':hover': {
              cursor: 'pointer',
            },
          }}
          display="flex"
        >
          <IconAndTextComponent
            src={LogoutIcon}
            title="Logout"
            gap="20px"
            iconHeight="18px"
            iconWidth="16px"
            color={theme.palette.text_color.high_emphasis}
            variant="body2"
          />
        </StyledBox>
      </Grid>
    </StyledGrid>
  )
}

import { Grid, Box } from '@mui/material'
import React, { useCallback, useState } from 'react'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import BellIcon from '../../../assets/icons/bell.svg'
import { TypographyComponent } from '../../atoms/Typography'
import { ExtendedProfileComponent } from '../../molecules/ExtendedProfile'
import { AvatarComponent } from '../../atoms/Avatar'

export interface HeaderProps {
  userIcon: string
  userName: string
  userId: string
  handleLogout?: (arg: any) => void
}
export const Header = (props: HeaderProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const toggleProfileDialog = useCallback(() => {
    setIsDialogOpen((prevState) => !prevState)
  }, [isDialogOpen])

  return (
    <Grid
      data-testid="headerComponent"
      container
      flexDirection={'row'}
      alignItems="center"
      width="100%"
      height="60px"
      justifyContent={'flex-end'}
      sx={{
        background: theme.palette.structural_color.white,
        boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Grid item>
        <IconButtonComponent
          src={BellIcon}
          width="24px"
          height="24px"
          disabled={true}
        />
      </Grid>
      <Grid item>
        <Grid
          container
          gap="12px"
          alignItems={'center'}
          mt="16px"
          mb="16px"
          mr="32px"
          ml="20px"
          flexDirection="row"
          onClick={toggleProfileDialog}
          sx={{
            ':hover': {
              cursor: 'pointer',
            },
          }}
        >
          <Box>
            <Box>
              <AvatarComponent src={props.userIcon} />
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: '64px',
                right: '128px',
                zIndex: 99,
              }}
            >
              {isDialogOpen && (
                <Box>
                  <ExtendedProfileComponent
                    name={props.userName}
                    userId={props.userId}
                    handleLogout={props.handleLogout}
                  />
                </Box>
              )}
            </Box>
          </Box>
          <TypographyComponent
            children={props.userName}
            variant="caption1"
            color={theme.palette.text_color.medium_emphasis}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

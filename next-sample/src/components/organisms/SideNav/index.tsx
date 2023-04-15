import { Box, Grid } from '@mui/material'
import React from 'react'
import theme from '../../../theme/theme'
import { BalancesComponent } from '../../molecules/Balances'
import PlusIcon from '../../../assets/icons/plus_secondary.svg'
import { TypographyComponent } from '../../atoms/Typography'
import { IconAndTextComponent } from '../../molecules/IcontAndText'
import LogoComp from '../../atoms/Logo'
import { sideNavBalancesItems, sideNavItems } from '../../../utils/constants'
import ChipComponent from '../../atoms/Chip'

export interface SideNavProps {
  width?: string
  isBalancesAvailable?: boolean
}
export const SideNav = (props: SideNavProps) => {
  return (
    <Grid width={props.width} data-testid="sideNavComponent">
      <Box sx={{ mt: '24px', ml: '67px', mb: '37px' }}>
        <LogoComp style={{ height: '22px', width: '103px' }} />
      </Box>
      <Grid container gap="20px" marginBottom={'20px'}>
        {sideNavItems.map((value, index: number) => (
          <Grid
            container
            flexDirection={'row'}
            gap="25px"
            alignItems={'center'}
            sx={{
              ':hover': {
                backgroundColor: theme.palette.structural_color.card_hover,
                cursor: 'default',
              },
            }}
            key={value.title}
          >
            <Grid item>
              <IconAndTextComponent
                src={value.src}
                title={value.title}
                variant={'caption1'}
                color={
                  index === 0
                    ? theme.palette.primary.primary_500
                    : theme.palette.text_color.medium_emphasis
                }
                gap="12px"
                iconHeight="24px"
                iconWidth="24px"
                key={value.src}
                marginLeft="15px"
                padding="5px 0px 5px 5px"
              />
            </Grid>
            {index === 3 ? (
              <Grid item>
                <ChipComponent label="New" width="63px" height="26px" />
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        ))}
      </Grid>

      {props.isBalancesAvailable ? (
        <>
          <BalancesComponent
            headerText="Balances"
            iconTextValues={sideNavBalancesItems}
          />
          <Grid container gap="12px" marginTop={'20px'} marginLeft="20px">
            <TypographyComponent
              variant={'caption1'}
              color={theme.palette.text_color.medium_emphasis}
              children={'Jars'}
            />
            <IconAndTextComponent
              src={PlusIcon}
              title="Open a jar"
              variant={'caption1'}
              color={theme.palette.text_color.medium_emphasis}
              gap="12px"
              iconHeight="24px"
              iconWidth="24px"
              padding="5px 0px 5px 5px"
              isHoverStyleReq={true}
              marginLeft="-5px"
            />
          </Grid>
        </>
      ) : (
        ''
      )}
    </Grid>
  )
}

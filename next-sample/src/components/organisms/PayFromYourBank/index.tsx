import { Box, Grid, List, ListItem } from '@mui/material'
import RightArrow from '../../../assets/icons/arrow-right.svg'
import FlagIcon from '../../../assets/icons/flag.svg'
import LockIcon from '../../../assets/icons/Lock.svg'
import LloydsIcon from '../../../assets/icons/lloyds.svg'
import theme from '../../../theme/theme'
import IconButtonComponent from '../../atoms/Icon'
import { TypographyComponent } from '../../atoms/Typography'
import Button from '../../atoms/Button'
import { payFromYourBankConst } from '../../../utils/constants'
import { StepperTabTemplate } from '../../templates/StepperTabTemplate'

export interface PayFromYourBankProps {
  amount: string
  accountType: string
  onClick: any
  onClickBack?: () => void
}

const PayFromYourBank = (props: PayFromYourBankProps) => {
  return (
    <Box data-testid="payFromYourBank">
      <StepperTabTemplate
        containerWidth="788px"
        isBigContainer={false}
        LeftComponent={
          <IconButtonComponent
            src={RightArrow}
            height="32px"
            width="32px"
            onClick={props.onClickBack}
          />
        }
        CenterComponent={
          <Box sx={{ width: '516px' }}>
            <Box sx={{ height: '40px', mb: '32px' }}>
              <TypographyComponent
                variant="heading1"
                children={payFromYourBankConst.payHeading}
                color={theme.palette.text_color.high_emphasis}
              />
            </Box>
            <Box>
              <Grid
                container
                display="flex"
                direction="column"
                width="516px"
                border="1px solid"
                borderRadius="16px"
                paddingLeft={theme.spacing(8)}
                paddingRight={theme.spacing(8)}
                paddingBottom={theme.spacing(12)}
                borderColor={theme.palette.grey_color.stroke_2}
              >
                <Grid item marginTop={theme.spacing(12)}>
                  <TypographyComponent
                    variant="body3"
                    children={payFromYourBankConst.paySubtext1}
                    color={theme.palette.text_color.medium_emphasis}
                  />
                  <TypographyComponent
                    variant="body3"
                    color={theme.palette.text_color.high_emphasis}
                    children={props.accountType}
                  />
                  <TypographyComponent
                    variant="body3"
                    color={theme.palette.text_color.medium_emphasis}
                    children={payFromYourBankConst.paySubtext2}
                  />
                  <TypographyComponent
                    variant="body3"
                    color={theme.palette.text_color.high_emphasis}
                    children={props.amount}
                  />
                  <TypographyComponent
                    variant="body3"
                    color={theme.palette.text_color.medium_emphasis}
                    children={payFromYourBankConst.paySubtext3}
                  />
                </Grid>
                <Grid item marginTop={theme.spacing(6)}>
                  <TypographyComponent
                    variant="body1"
                    color={theme.palette.text_color.high_emphasis}
                    children={payFromYourBankConst.paySubHeading}
                  />
                </Grid>
                <Grid item marginTop={theme.spacing(4)}>
                  <List
                    sx={{
                      color: `${theme.palette.text_color.medium_emphasis}`,
                      listStyleType: 'disc',
                      pl: 5,
                      '& .MuiListItem-root': {
                        display: 'list-item',
                        paddingLeft: '0px',
                      },
                    }}
                  >
                    <ListItem>
                      <TypographyComponent
                        variant="body3"
                        color={theme.palette.text_color.medium_emphasis}
                        children={payFromYourBankConst.payPoint1}
                      />
                    </ListItem>
                    <ListItem>
                      <TypographyComponent
                        variant="body3"
                        color={theme.palette.text_color.medium_emphasis}
                        children={payFromYourBankConst.payPoint2}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item marginTop={theme.spacing(10)}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap="20.68"
                  >
                    <IconButtonComponent
                      border="1px solid"
                      border_color={theme.palette.primary.primary_300}
                      background_color={theme.palette.primary.primary_100}
                      img_height="20px"
                      img_width="20px"
                      width="60px"
                      height="60px"
                      src={FlagIcon}
                    />
                    <IconButtonComponent
                      width="60px"
                      height="60px"
                      img_width="22px"
                      img_height="24px"
                      src={LockIcon}
                    />
                    <IconButtonComponent
                      img_height="20.99px"
                      img_width="20.11px"
                      border="1px solid"
                      border_color={theme.palette.grey_color.stroke_2}
                      width="60px"
                      height="60px"
                      src={LloydsIcon}
                    />
                  </Box>
                </Grid>
                <Grid item marginTop={theme.spacing(10)}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    gap={theme.spacing(5)}
                  >
                    <Button
                      width="218px"
                      height="56px"
                      variant="contained"
                      children={payFromYourBankConst.payContinueButton}
                      onClick={props.onClick}
                    />
                    <Button
                      width="218px"
                      height="56px"
                      variant="outlined"
                      children={payFromYourBankConst.payManualButton}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        }
      />
    </Box>
  )
}

export default PayFromYourBank

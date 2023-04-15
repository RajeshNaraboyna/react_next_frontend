import React, { useCallback } from 'react'
import { Box, Grid, MenuItem, Select, styled, Tab, Tabs } from '@mui/material'
import {
  TransactionDetails,
  TransactionTimeDetailsRow,
} from '../../../utils/types'
import moment from 'moment'
import IconButtonComponent from '../../atoms/Icon'
import ShareSvg from '../../../assets/icons/share.svg'
import HelpSvg from '../../../assets/icons/help-circle.svg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import theme from '../../../theme/theme'
import { HomePageTransactionDetailsStepper } from '../HomePageTransactionDetailsStepper'
import { TypographyComponent } from '../../atoms/Typography'
import Button from '../../atoms/Button'
import { transactionDetailsCardConsts } from '../../../utils/constants'

export interface TransactionCardTabProps {
  transactionDetails: TransactionDetails
  onCancelClick?: () => void
  onShareClick: () => void
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const StyledTabs = styled(Tabs)({
  '& .MuiTabs-root': {
    padding: '20px !important',
    border: '5px',
    borderColor: 'black',
  },
  border: '5px black !important',
  minHeight: '37px !important',
  width: '100%',
})

const StyledSelect = styled(Select)({
  '& .MuiInputBase-input': {
    fontSize: '17px !important',
    lineHeight: '24px !important',
    padding: '11px 12px',
    color: `${theme.palette.text_color.high_emphasis} !important`,
    position:'absolute',
    top:'1px'
  },
  '& .Mui-disabled': {
    color: theme.palette.text_color.high_emphasis,
    backgroundColor: theme.palette.structural_color.main,
  },
})

const StyledTab = styled(Tab)({
  '&.MuiTab-root': {
    minHeight: '21px',
    maxHeight: '21px',
    minWidth: '70px',
    maxWidth: '82px',
    padding: '0px 11.5px 0px',
  },
})

interface CustomBoxProps {
  leftText: string
  rightText: string
}

const CustomBox = (props: CustomBoxProps) => {
  const { leftText, rightText } = props
  return (
    <Grid display={'flex'} justifyContent="space-between">
      <TypographyComponent
        variant="body2"
        color={theme.palette.text_color.medium_emphasis}
      >
        {leftText}
      </TypographyComponent>
      <TypographyComponent
        variant="body2"
        color={theme.palette.text_color.high_emphasis}
      >
        {rightText}
      </TypographyComponent>
    </Grid>
  )
}

const newEmptyTimeStampRow: TransactionTimeDetailsRow = {
  content: '',
  statusInTimeline: '',
  timeString: 'pending',
}

const getContent = (
  index: number,
  sendingCurrency: string,
  receivingCurrency: string,
  receiverName: string,
  status: string
) => {
  if (index === 0) return 'You set up your transfer'
  if (index === 1)
    return `We ${
      status === 'completed' ? 'recieved' : 'recieves'
    } your ${sendingCurrency}`
  if (index === 2)
    return `Your money’s ${
      status === 'completed' ? 'being' : ''
    } being processed`
  if (index === 3)
    return `We ${
      status === 'completed' ? 'paid' : 'pay'
    } out your ${receivingCurrency}`
  if (index === 4)
    return `${receiverName} ${
      status === 'completed' ? 'recieved' : 'recieves'
    } your ${receivingCurrency}`
}
const getArrayForStepper = (transactionDetails: TransactionDetails) => {
  const {
    transactionTimeStamps,
    sendingCurrency,
    receivingCurrency,
    receiverName,
  } = transactionDetails
  let timeStepperDetails: TransactionTimeDetailsRow[] = []
  transactionTimeStamps.forEach((date, index) => {
    let timeStampRow: TransactionTimeDetailsRow = { ...newEmptyTimeStampRow }
    timeStampRow.timeString = moment(date).calendar()
    const currentTime = moment().toDate()
    if (date.getTime() < currentTime.getTime()) {
      timeStampRow.statusInTimeline = 'completed'
    } else if (timeStepperDetails[index - 1].statusInTimeline === 'completed') {
      timeStampRow.statusInTimeline = 'inProgress'
    } else {
      timeStampRow.statusInTimeline = 'pending'
    }
    timeStampRow.content = getContent(
      index,
      sendingCurrency,
      receivingCurrency,
      receiverName,
      timeStampRow.statusInTimeline
    ) as string
    timeStepperDetails.push(timeStampRow)
  })
  return timeStepperDetails
}

export const TransactionCardTab = (props: TransactionCardTabProps) => {
  const { transactionDetails, onCancelClick, onShareClick } = props
  const [value, setValue] = React.useState(0)
  const handleChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue)
    },
    []
  )

  const timeStepperDetails: TransactionTimeDetailsRow[] =
    getArrayForStepper(transactionDetails)

  return (
    <Grid data-testid="transaction-details-card-tab">
      <Grid
        width="100%"
        height="79px"
        display="flex"
        justifyContent="space-between"
        sx={{
          borderBottom: `1px solid ${theme.palette.grey_color.main}`,
          padding: '0px 36px',
        }}
      >
        <Box display="flex" alignItems="flex-end" height={'100%'}>
          <StyledTabs value={value} onChange={handleChange}>
            <StyledTab
              label={transactionDetailsCardConsts.tab1Label}
              {...a11yProps(0)}
            />
            <StyledTab
              label={transactionDetailsCardConsts.tab2Label}
              disabled
              {...a11yProps(1)}
            />
          </StyledTabs>
        </Box>
        <Grid display="flex" alignItems="center" gap="20px" height={'100%'}>
          <StyledSelect
            IconComponent={ExpandMoreIcon}
            value={'General'}
            disabled
            sx={{ width: '116px', height: '46px' }}
          >
            <MenuItem value={'General'}>General</MenuItem>
          </StyledSelect>
          <IconButtonComponent
            height="24px"
            width="24px"
            src={ShareSvg}
            onClick={onShareClick}
          />
          <IconButtonComponent height="24px" width="24px" src={HelpSvg} />
        </Grid>
      </Grid>
      <TabPanel value={value} index={0}>
        <Grid
          container
          direction="row"
          sx={{ padding: '24px 36px' }}
          height="392px"
        >
          <Grid
            item
            container
            display={'flex'}
            xs={8}
            gap="40px"
            direction="column"
          >
            <Grid
              container
              direction={'column'}
              display="flex"
              width="410px"
              gap="16px"
            >
              <CustomBox
                leftText={transactionDetailsCardConsts.detailsFirstLine}
                rightText={`${transactionDetails.senderName} (YOU)`}
              />
              <CustomBox
                leftText={transactionDetailsCardConsts.detailsSecondLine}
                rightText={`# ${transactionDetails.transactionRefId}`}
              />
            </Grid>
            {transactionDetails.transactionStatus !== 'canceled' ? (
              <HomePageTransactionDetailsStepper
                details={timeStepperDetails}
                height="169px"
                width="480px"
              />
            ) : (
              <Grid container display={'flex'} gap="20px" direction="column">
                <TypographyComponent
                  variant="body1"
                  color={theme.palette.text_color.high_emphasis}
                >
                  {transactionDetailsCardConsts.cancelHeader}
                </TypographyComponent>
                <TypographyComponent
                  variant="body3"
                  color={theme.palette.text_color.medium_emphasis}
                >
                  {transactionDetailsCardConsts.cancelDescription}
                </TypographyComponent>
              </Grid>
            )}
          </Grid>
          <Grid
            item
            display={'flex'}
            xs={4}
            alignItems="flex-end"
            justifyContent={'right'}
          >
            {transactionDetails.transactionStatus !== transactionDetailsCardConsts.COMPLETED &&
              transactionDetails.transactionStatus !== transactionDetailsCardConsts.CANCELLED && (
                <Button
                  variant="outlined"
                  width="216px"
                  height="56px"
                  onClick={onCancelClick}
                >
                  {transactionDetailsCardConsts.cancelButtonText}
                </Button>
              )}
          </Grid>
        </Grid>
      </TabPanel>
    </Grid>
  )
}

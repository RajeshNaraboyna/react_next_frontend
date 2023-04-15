import React, { useCallback, useState } from 'react'
import theme from '../../../theme/theme'
import {  Grid } from '@mui/material'
import { TransactionDetails } from '../../../utils/types'
import IconButtonComponent from '../../atoms/Icon'
import ArrowUpRight from '../../../assets/icons/arrow-up-right.svg'
import ChevronDown from '../../../assets/icons/chevron-down.svg'
import ChevronUp from '../../../assets/icons/chevron-up.svg'
import { TypographyComponent } from '../../atoms/Typography'
import { TransactionCardTab } from '../TransactionCardTab'

export interface TransactionStatusDetailsCardProps {
  transactionDetails: TransactionDetails
  onCancelClick?: () => void
  onShareClick: () => void
}

export const TransactionStatusDetailsCard = (
  props: TransactionStatusDetailsCardProps
) => {
  const { transactionDetails, onCancelClick, onShareClick } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const handleClick = useCallback(() => {
    setIsExpanded(!isExpanded)
  }, [isExpanded]);
  return (
    <Grid
      data-testid="transaction-details-card"
      sx={{
        background: 'white',
        borderRadius: isExpanded ? '4px' : '0px',
        boxShadow: isExpanded ? '0px 1px 5px rgba(0, 0, 0, 0.15)' : 'none',
      }}
    >
      <Grid
        display="flex"
        alignItems="center"
        justifyContent={'space-between'}
        width="100%"
        height={'87px'}
        sx={{
          borderBottom: `1px solid ${theme.palette.grey_color.main}`,
          padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
        }}
      >
        <Grid item display={'flex'} gap="12px" alignItems={'center'}>
          <IconButtonComponent
            src={ArrowUpRight}
            img_width="24px"
            img_height="24px"
            width="40px"
            height="40px"
            background_color={theme.palette.structural_color.main}
          />
          <Grid container display="flex" gap="2px" direction="column">
            <TypographyComponent
              variant="body2"
              color={theme.palette.text_color.high_emphasis}
            >
              {transactionDetails.receiverName}
            </TypographyComponent>
            <TypographyComponent
              variant="caption1"
              color={theme.palette.text_color.medium_emphasis}
            >
              {getStatus()}
            </TypographyComponent>
          </Grid>
        </Grid>
        <Grid item display={'flex'} gap="16px" alignItems={'center'}>
          <Grid
            container
            display="flex"
            gap="4px"
            direction="column"
            textAlign={'right'}
          >
            <TypographyComponent
              variant="caption1"
              color={theme.palette.text_color.high_emphasis}
            >
              {transactionDetails.sendingMoney +
                ' ' +
                transactionDetails.sendingCurrency}
            </TypographyComponent>
            <TypographyComponent
              variant="caption1"
              color={theme.palette.text_color.medium_emphasis}
            >
              {transactionDetails.receivingMoney +
                ' ' +
                transactionDetails.receivingCurrency}
            </TypographyComponent>
          </Grid>
          <IconButtonComponent
            src={isExpanded ? ChevronUp : ChevronDown}
            width="24px"
            height="24px"
            onClick={handleClick}
          />
        </Grid>
      </Grid>
      <Grid>
        {isExpanded && (
          <TransactionCardTab
            transactionDetails={transactionDetails}
            onCancelClick={onCancelClick}
            onShareClick={onShareClick}
          />
        )}
      </Grid>
    </Grid>
  )

  function getStatus(): string | JSX.Element | undefined {
    if (transactionDetails.transactionStatus === 'inProgress') return 'Sending'
    return transactionDetails.transactionStatus === 'completed'
      ? 'Sent'
      : 'canceled'
  }
}

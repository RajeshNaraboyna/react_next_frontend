import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab'
import { TransactionTimeDetailsRow } from '../../../utils/types'
import theme from '../../../theme/theme'
import { Box } from '@mui/material'

interface HomePageTransactionDetailsStepperProps {
  details: TransactionTimeDetailsRow[]
  width: string
  height: string
}
export const HomePageTransactionDetailsStepper = (
  props: HomePageTransactionDetailsStepperProps
) => {
  const { details, width, height } = props

  return (
    <Box
      width={width}
      height={height}
      data-testid="transaction-details-stepper"
    >
      <Timeline sx={{ padding: '0px', margin: '0px' }}>
        {details.map((row, index) => (
          <TimelineItem
            key={row.timeString}
            sx={{ maxHeight: '37px', minHeight: '37px' }}
          >
            <TimelineOppositeContent
              color={getColor(row)}
              sx={{
                maxWidth: '180px',
                maxHeight: '37px',
                fontSize: '14px',
                lineHeight: '21px',
                padding: '0px 32px 0px 0px',
              }}
            >
              {row.timeString}
            </TimelineOppositeContent>
            <TimelineSeparator
              sx={{
                height: '39px !important',
                position: 'relative',
                top: '5px',
              }}
            >
              <TimelineDot
                sx={{
                  backgroundColor:
                    row.statusInTimeline !== 'pending'
                      ? theme.palette.primary.primary_500
                      : theme.palette.grey_color.stroke_2,
                  margin: '0px',
                  border: '0px',
                }}
              />
              {index !== 4 && (
                <TimelineConnector
                  sx={{
                    minHeight: '31px !important',
                    backgroundColor:
                      row.statusInTimeline !== 'completed'
                        ? theme.palette.grey_color.stroke_2
                        : theme.palette.primary.primary_500,
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                maxHeight: '37px',
                fontSize: '14px',
                lineHeight: '21px',
                padding: '0px 0px 0px 32px',
              }}
              color={getColor(row)}
            >
              {row.content}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  )

  function getColor(row: TransactionTimeDetailsRow) {
    if (row.statusInTimeline === 'completed')
      return theme.palette.text_color.high_emphasis
    return row.statusInTimeline === 'inProgress'
      ? theme.palette.primary.primary_500
      : theme.palette.text_color.low_emphasis
  }
}

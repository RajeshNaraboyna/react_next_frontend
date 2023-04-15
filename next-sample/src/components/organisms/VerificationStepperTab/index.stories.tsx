import { Box } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { VerificationStepperTab } from '.'
import { OwnerDirectorDetails } from '../../../utils/types'

export default {
  title: 'organisms/VerificationStepperTab',
  component: VerificationStepperTab,
} as ComponentMeta<typeof VerificationStepperTab>

const Template: ComponentStory<typeof VerificationStepperTab> = (args: any) => (
  <Box width="100%" height="641px">
    <VerificationStepperTab {...args} />
  </Box>
)

const handleContinueClick = (
  directorsList: OwnerDirectorDetails[],
  ownersList: OwnerDirectorDetails[],
  reason:string
) => {
  console.log(directorsList, ownersList,reason)
}
const handleBackClick = () => {
  console.log('Back Click')
}

export const VerificationStepperTabComponent = Template.bind({})
export const VerificationStepperTabComponentIsComingBack = Template.bind({})

VerificationStepperTabComponent.args = {
  directors: [
    {
      firstName: 'Noah',
      lastName: 'Smith',
      dateOfBirth: new Date('11/10/1998'),
      countryOfResidence: 'AD',
    },
  ],
  owners: [
    {
      firstName: 'Oliver',
      lastName: 'Johnson',
      dateOfBirth: new Date('12/10/2000'),
      countryOfResidence: 'AD',
    },
  ],
  onContinueClick: handleContinueClick,
  onBackClick: handleBackClick,
}

VerificationStepperTabComponentIsComingBack.args = {
  isComingBack: true,
  directors: [
    {
      firstName: 'Noah',
      lastName: 'Smith',
      dateOfBirth: new Date('11/10/1998'),
      countryOfResidence: 'AD',
    },
  ],
  owners: [
    {
      firstName: 'Oliver',
      lastName: 'Johnson',
      dateOfBirth: new Date('12/10/2000'),
      countryOfResidence: 'AD',
    },
  ],
  onContinueClick: handleContinueClick,
  onBackClick: handleBackClick,
}

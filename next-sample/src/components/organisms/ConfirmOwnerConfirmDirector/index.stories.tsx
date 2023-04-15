import { Box } from '@mui/material'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ConfirmDirectorOwner } from '.'
import { OwnerDirectorDetails } from '../../../utils/types'

export default {
  title: 'organisms/ConfirmOwnerDirector',
  component: ConfirmDirectorOwner,
} as ComponentMeta<typeof ConfirmDirectorOwner>

const Template: ComponentStory<typeof ConfirmDirectorOwner> = (args: any) => (
  <Box width="788px" height="641px">
    <ConfirmDirectorOwner {...args} />
  </Box>
)

const handleClick = (
  directorsList: OwnerDirectorDetails[],
  ownersList: OwnerDirectorDetails[]
) => {
  console.log(directorsList, ownersList)
}

export const ConfirmOwnerDirector = Template.bind({})
export const ConfirmOwnerDirectorWithoutValues = Template.bind({})


ConfirmOwnerDirector.args = {
  directors: [
    {
      firstName: 'Noah',
      lastName: 'Smith',
      dateOfBirth: new Date("11/10/1998"),
      countryOfResidence: 'AD',
    },
  ],
  owners: [
    {
      firstName: 'Oliver',
      lastName: 'Johnson',
      dateOfBirth: new Date("12/10/2000"),
      countryOfResidence: 'AD',
    },
  ],
  onContinueClick: handleClick,
}

ConfirmOwnerDirectorWithoutValues.args = {
  onContinueClick: handleClick,
}

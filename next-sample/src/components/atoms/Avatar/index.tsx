import Avatar from '@mui/material/Avatar'
import React from 'react'

export interface AvatarComponentProps {
  letter?: string
  src: string
}

const AvatarSx = {
  color: 'white',
  width: '28px',
  height: '28px',
  fontSize: '1rem',
}
export const AvatarComponent = (props: AvatarComponentProps) => {
  const { src, letter } = props
  return (
    <Avatar data-testid="Avatar" sx={AvatarSx} src={src}>
      {letter}
    </Avatar>
  )
}

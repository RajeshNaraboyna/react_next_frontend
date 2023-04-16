import React from 'react'
import Image from 'next/image'
import LogoSVG from '../../../assets/images/Logo.svg'

export interface LogoProps {
  style?: React.CSSProperties
}


const LogoComp: React.FC<LogoProps> = ({ style }) => {
  return <Image src={LogoSVG} style={style} alt={'logo'}></Image>
}

export default LogoComp

import React from 'react'
import LogoSVG from '../../../assets/images/Logo.svg'

export interface LogoProps {
  style?: React.CSSProperties
}


const LogoComp: React.FC<LogoProps> = ({ style }) => {
  return <img src={LogoSVG} style={style} alt={'logo'}></img>
}

export default LogoComp

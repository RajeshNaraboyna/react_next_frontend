import { createTheme } from '@mui/material/styles'
import React from 'react'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    heading1: React.CSSProperties
    heading2: React.CSSProperties
    body4: React.CSSProperties
    body1: React.CSSProperties
    body2: React.CSSProperties
    body3: React.CSSProperties
    caption1: React.CSSProperties
    link_text: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    heading1: React.CSSProperties
    heading2: React.CSSProperties
    body4: React.CSSProperties
    body1: React.CSSProperties
    body2: React.CSSProperties
    body3: React.CSSProperties
    caption1: React.CSSProperties
    link_text: React.CSSProperties
  }

  interface Palette {
    text_color: Palette['primary']
    grey_color: Palette['primary']
    structural_color: Palette['primary']
  }

  interface PaletteOptions {
    text_color: PaletteOptions['primary']
    grey_color: PaletteOptions['primary']
    structural_color: PaletteOptions['primary']
  }

  interface PaletteColor {
    primary_100?: string
    primary_300?: string
    primary_500?: string
    low_emphasis?: string
    medium_emphasis?: string
    high_emphasis?: string
    stroke_2?: string
    icon_1?: string
    icon_2?: string
    blue?: string
    white?: string
    card_hover?: string
    button_hover?: string
  }

  interface SimplePaletteColorOptions {
    primary_100?: string
    primary_300?: string
    primary_500?: string
    low_emphasis?: string
    medium_emphasis?: string
    high_emphasis?: string
    stroke_2?: string
    icon_1?: string
    icon_2?: string
    blue?: string
    white?: string
    card_hover?: string
    button_hover?: string
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    heading1: true
    heading2: true
    body4: true
    body1: true
    body2: true
    body3: true
    caption1: true
    link_text: true
  }
}

declare module '@mui/material' {
  interface PropsColorOverrides {
    text_color: true
    grey_color: true
    structural_color: true
  }
}

const theme = createTheme({
  spacing:4,
  typography: {
    heading1: {
      fontSize: '24px',
      lineHeight: '40px',
      textTransform: 'none',
      fontFamily: 'Gerbera',
    },

    heading2: {
      fontSize: '24px',
      lineHeight: '40px',
      fontWeight: '400',
      textTransform: 'none',
      fontFamily: 'Roboto',
    },

    body1: {
      fontSize: '20px',
      lineHeight: '32px',
      textTransform: 'none',
      fontFamily: 'Gerbera',
    },

    body2: {
      fontSize: '17px',
      lineHeight: '24px',
      textTransform: 'none',
      fontFamily: 'Gerbera',
    },

    body3: {
      fontSize: '16px',
      lineHeight: '24px',
      textTransform: 'none',
      fontFamily: 'Gerbera',
    },

    body4: {
      fontSize: '17px',
      lineHeight: '24px',
      fontWeight: '400',
      textTransform: 'none',
      fontFamily: 'Roboto',
    },

    caption1: {
      fontSize: '14px',
      lineHeight: '21px',
      textTransform: 'none',
      fontFamily: 'Gerbera',
    },

    link_text: {
      fontSize: '14px',
      lineHeight: '13.3px',
      textTransform: 'none',
      fontFamily: 'Gerbera',
    },
  },
  palette: {
    primary: {
      main: '#7633FF',
      primary_100: '#E4D6FF',
      primary_300: '#9764FF',
      primary_500: '#7633FF',
    },
    text_color: {
      main: '#9F9DA3',
      low_emphasis: '#9F9DA3',
      medium_emphasis: '#77767A',
      high_emphasis: '#141414',
    },
    grey_color: {
      main: '#E4E4E5',
      stroke_2: '#E4E4E5',
      icon_1: '#141414',
      icon_2: '#A5A8AC',
    },
    structural_color: {
      main: '#F8F9FA',
      blue: '#F8F9FA',
      white: '#FFFFFF',
      card_hover: '#F3F2F5',
      button_hover: '#F4EFFF',
    },
  },
})

export default theme
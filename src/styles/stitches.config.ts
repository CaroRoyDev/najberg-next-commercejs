import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        gray400: 'gainsboro',
        gray500: 'lightgray',
      },
      fontSizes: {
        1: '.75rem',
        2: '.9rem',
        3: '1rem',
        4: '1.1rem',
        5: '1.25rem',
      },
      lineHeights: {
        1: '1em',
        2: '1.2em',
        3: '1.5em',
        4: '2em',
      },
      height: {
        1: '1em',
        2: '1.2em',
        3: '1.5em',
        4: '2em',
      },
    },
    media: {
      bp0: '(max-width: 640px)',
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1280px)',
      bp5: '(min-width: 1536px)',
    },
    utils: {
      marginX: value => ({ marginLeft: value, marginRight: value }),
      paddingX: value => ({ paddingLeft: value, paddingRight: value }),
    },
  })

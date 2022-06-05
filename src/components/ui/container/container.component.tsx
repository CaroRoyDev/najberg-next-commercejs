import { styled } from 'styles/stitches.config'

const Container = styled('div', {
  marginX: 'auto',
  '@bp0': { maxWidth: '100%', paddingX: '20px' },
  '@bp1': { maxWidth: '640px' },
  '@bp2': { maxWidth: '768px' },
  '@bp3': { maxWidth: '1024px' },
  '@bp4': { maxWidth: '1280px' },
  '@bp5': { maxWidth: '1536px' },

  variants: {
    justify: {
      left: {
        display: 'flex',
        justifyContent: 'start',
      },
      center: {
        display: 'flex',
        justifyContent: 'center',
      },
      right: {
        display: 'flex',
        justifyContent: 'end',
      },
    },
  },
})

export { Container }

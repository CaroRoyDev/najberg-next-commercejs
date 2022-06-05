import { globalCss } from './stitches.config'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  body: {
    fontFamily: 'poppins, sans-serif',
  },
})

export default globalStyles

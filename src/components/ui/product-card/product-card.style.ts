import { styled } from 'styles/stitches.config'

export const ProductCardWrapper = styled('article', {
  width: '17rem',
  overflow: 'hidden',

  a: {
    textDecoration: 'none',
  },
})

export const ProductCardInfos = styled('div', {
  marginTop: '12px',
  fontSize: '$3',
  h1: {
    fontSize: '1em',
    lineHeight: '$2',
    height: '$2',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
  },
  '.price': {
    fontSize: '.95em',
  },
})

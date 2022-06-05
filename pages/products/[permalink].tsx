import { Product } from '@chec/commerce.js/types/product'
import Head from 'next/head'
import commerce from '../../lib/commerce'

const ProductPage: React.FC<ProductPageProps> = ({ product: { name, price } }) => {
  return (
    <>
      <Head>
        <title>{name} | Etablissements Najberg</title>
      </Head>
      <>
        <h1>{name}</h1>
        <p>{price.formatted_with_symbol}</p>
      </>
    </>
  )
}

interface ProductPageProps {
  product: Product
}

export async function getStaticProps({ params }) {
  const { permalink } = params

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  })

  return {
    props: {
      product,
    },
  }
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list()

  return {
    paths: products.map(product => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  }
}

export default ProductPage

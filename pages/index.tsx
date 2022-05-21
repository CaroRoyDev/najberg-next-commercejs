import { Category } from '@chec/commerce.js/types/category'
import { Merchant } from '@chec/commerce.js/types/merchant'
import { Product } from '@chec/commerce.js/types/product'
import { ProductList } from 'components/ui/product-list'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import commerce from '../lib/commerce'

const Home: React.FC<HomeProps> = ({ merchant, categories, products }) => {
  return (
    <>
      {' '}
      <Head>
        <title>Etablissements Najberg</title>
        <meta name="description" content="Lorem ipsum" key="desc" />
      </Head>
      <h1>Hello</h1>
      <section>
        <ProductList products={products} />
      </section>
    </>
  )
}

type HomeProps = {
  merchant: Merchant
  categories: Category[]
  products: Product[]
}

export const getStaticProps: GetStaticProps = async () => {
  const merchant = await commerce.merchants.about()
  const categories = await commerce.categories.list()
  const { data: products } = await commerce.products.list({ limit: 4 })

  return {
    props: {
      merchant,
      categories,
      products,
    },
  }
}

export default Home

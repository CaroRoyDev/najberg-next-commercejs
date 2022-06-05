import { Category } from '@chec/commerce.js/types/category'
import { Merchant } from '@chec/commerce.js/types/merchant'
import { Product } from '@chec/commerce.js/types/product'
import { Container } from 'components/ui'
import { ProductList } from 'components/ui/product-list'
import { GetStaticProps } from 'next'

import commerce from '../lib/commerce'

const Home: React.FC<HomeProps> = ({ merchant, categories, products }) => {
  return (
    <>
      <h1>Hello</h1>
      <Container as="section" justify="center">
        <ProductList products={products} />
      </Container>
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

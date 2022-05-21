import { Product } from '@chec/commerce.js/types/product'
import { ProductList } from 'components/ui/product-list'
import React from 'react'
import commerce from '../../lib/commerce'

interface ProductsProps {
  products: Product[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <section>
      <h1>Tous nos produits</h1>
      <ProductList products={products} />
    </section>
  )
}

export async function getStaticProps() {
  const { data: products } = await commerce.products.list({
    sortBy: 'created',
    sortDirection: 'desc',
  })

  return {
    props: {
      products,
    },
  }
}

export default Products

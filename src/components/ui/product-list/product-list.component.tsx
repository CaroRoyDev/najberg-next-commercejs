import { Product } from '@chec/commerce.js/types/product'
import React from 'react'
import { ProductCard } from 'components/ui/product-card'
import { List } from './product-list.styles'

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <List>
      {products.map((product: Product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </List>
  )
}

export { ProductList }

import { Product } from '@chec/commerce.js/types/product'
import React from 'react'
import { ProductCard } from 'components/ui/product-card'
import Link from 'next/link'

interface ProductListProps {
  products: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id}>
          <Link href={`/products/${product.permalink}`}>
            <a>
              <ProductCard product={product} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export { ProductList }

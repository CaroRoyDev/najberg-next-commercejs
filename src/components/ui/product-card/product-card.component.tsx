import { Product } from '@chec/commerce.js/types/product'
import Image from 'next/image'
import React from 'react'
import DefaultProductImage from './default-product.jpg'
import { ProductCardImage, ProductCardWrapper } from './product-card.style'
interface ProductProps {
  product: Product
}

const DefaultProductImagePath = 'components/ui/atoms/images/default-product.jpg'

const ProductCard: React.FC<ProductProps> = ({ product: { name, price, image } }) => {
  return (
    <ProductCardWrapper>
      <ProductCardImage>
        <Image
          src={image?.url || DefaultProductImage}
          alt={image?.description}
          layout="fill"
          blurDataURL={DefaultProductImagePath}
          placeholder="blur"
        />
      </ProductCardImage>
      <h1>{name}</h1>
      <span>{price.formatted_with_symbol}</span>
    </ProductCardWrapper>
  )
}

export { ProductCard }

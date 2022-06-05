import { Product } from '@chec/commerce.js/types/product'
import Image from 'next/image'
import React from 'react'
import DefaultProductImage from './default-product.jpg'
import { ProductCardWrapper, ProductCardInfos } from './product-card.style'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { Asset } from '@chec/commerce.js/types/asset'
import Link from 'next/link'
interface ProductProps {
  product: Product
}

const DefaultProductImagePath = 'components/ui/atoms/images/default-product.jpg'

interface ProductCardImageProps extends AspectRatio.AspectRatioProps {
  image: Asset
}

const ProductCardImage: React.FC<ProductCardImageProps> = ({ image, ratio }) => (
  <AspectRatio.Root ratio={ratio}>
    <Image
      src={image?.url || DefaultProductImage}
      alt={image?.description}
      layout="fill"
      blurDataURL={DefaultProductImagePath}
      placeholder="blur"
    />
  </AspectRatio.Root>
)

const ProductCard: React.FC<ProductProps> = ({ product: { name, price, image, permalink } }) => (
  <ProductCardWrapper>
    <Link href={`/products/${permalink}`}>
      <a>
        <ProductCardImage image={image} ratio={1 / 1} />

        <ProductCardInfos>
          <h1>{name}</h1>
          <span className="price">{price.formatted_with_symbol}</span>
        </ProductCardInfos>
      </a>
    </Link>
  </ProductCardWrapper>
)

export { ProductCard }

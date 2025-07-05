'use client'

import { ProductCard } from './ProductCard'

interface Product {
  id: number
  name: string
  description: string
  images: string[]
  category: string
  featured: boolean
}

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
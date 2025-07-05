'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  description: string
  images: string[]
  category: string
  featured: boolean
}

interface CategorySectionProps {
  category: string
  products: Product[]
  description: string
}

export function CategorySection({ category, products, description }: CategorySectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedProduct, setSelectedProduct] = useState(products[0])

  // Get first 3 images from the category products
  const categoryImages = products
    .flatMap(product => product.images)
    .slice(0, 3)

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === categoryImages.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? categoryImages.length - 1 : prev - 1
    )
  }

  if (products.length === 0) {
    return null
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold section-title mb-4">
          {category}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Carousel Side */}
        <div className="relative">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
            <Image
              src={categoryImages[currentImageIndex]}
              alt={`${category} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />

            {/* Category Badge */}
            <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </div>

            {/* Navigation arrows */}
            {categoryImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Image Indicators */}
            {categoryImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {categoryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Thumbnail preview */}
          {categoryImages.length > 1 && (
            <div className="flex justify-center mt-6 space-x-4">
              {categoryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 bg-gray-100 ${index === currentImageIndex
                    ? 'ring-4 ring-primary-500 scale-110'
                    : 'opacity-70 hover:opacity-100'
                    }`}
                >
                  <Image
                    src={image}
                    alt={`${category} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Information Side */}
        <div className="space-y-8">
          {/* Product Selection */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Sản phẩm trong danh mục
            </h3>
            <div className="space-y-4">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${selectedProduct.id === product.id
                    ? 'border-primary-500 bg-primary-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-gray-900 truncate">
                        {product.name}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                      {product.featured && (
                        <span className="inline-block mt-2 px-2 py-1 bg-secondary-100 text-secondary-800 text-xs font-medium rounded-full">
                          Nổi bật
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Product Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedProduct.name}
              </h3>
              {selectedProduct.featured && (
                <span className="px-3 py-1 bg-secondary-500 text-white text-sm font-medium rounded-full">
                  Nổi bật
                </span>
              )}
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            {/* Product Images Gallery */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Hình ảnh sản phẩm ({selectedProduct.images.length})
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {selectedProduct.images.slice(0, 6).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={image}
                      alt={`${selectedProduct.name} - ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 200px"
                    />
                  </div>
                ))}
                {selectedProduct.images.length > 6 && (
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">
                      +{selectedProduct.images.length - 6} ảnh
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Liên hệ báo giá
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                  Xem thêm chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
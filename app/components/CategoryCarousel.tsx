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

interface CategoryCarouselProps {
  category: string
  products: Product[]
  description: string
}

export function CategoryCarousel({ category, products, description }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get first 3 images from the category products
  const categoryImages = products
    .flatMap(product => product.images)
    .slice(0, 3)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categoryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categoryImages.length) % categoryImages.length)
  }

  if (categoryImages.length === 0) {
    return null
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        {/* Current image */}
        <div className="relative w-full h-full">
          <Image
            src={categoryImages[currentIndex]}
            alt={`${category} - Image ${currentIndex + 1}`}
            fill
            className="object-cover transition-all duration-500 ease-in-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Category info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">{category}</h3>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl">{description}</p>
          </div>
        </div>

        {/* Navigation arrows */}
        {categoryImages.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 group"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 group"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Slide indicators */}
        {categoryImages.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {categoryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                    ? 'bg-white scale-110'
                    : 'bg-white/50 hover:bg-white/70'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
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
              onClick={() => setCurrentIndex(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${index === currentIndex
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
  )
}
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, MessageCircle, Check } from 'lucide-react'
import { productDetails, products } from '@/data/products'

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const product = productDetails[slug]

  const [selectedImage, setSelectedImage] = useState(0)

  // Only architecture products exist in data
  const allProducts = [...products.architecture]
  const currentProduct = allProducts.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="w-full">
        <section className="bg-dark text-white py-24">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="hero-title mb-4">Product Not Found</h1>
            <p className="text-xl text-white/80 mb-8">The product you're looking for doesn't exist.</p>
            <Link href="/products" className="btn-primary">
              Back to Products
            </Link>
          </div>
        </section>
      </div>
    )
  }

  const productImages = [
    currentProduct?.localImage ?? '/images/toughened-glass.png',
    '/images/insulated-glass.png',
    '/images/low-e-glass.png',
    '/images/skylight-glass.png',
  ]

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="bg-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/products" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-6">
            <ChevronLeft size={20} />
            Back to Products
          </Link>
          <h1 className="hero-title mb-2">{product.name}</h1>
          <p className="text-lg text-white/70">{product.category} Glass Solutions</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={productImages[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      index === selectedImage
                        ? 'border-primary shadow-lg'
                        : 'border-border-light hover:border-primary/50'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold font-montserrat uppercase tracking-wider mb-4">
                  {product.category}
                </span>
                <h2 className="section-title text-text-dark mb-4">{product.name}</h2>
                <p className="text-text-body text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-montserrat font-bold text-xl text-text-dark mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features?.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" />
                      </div>
                      <p className="text-text-dark text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              {product.specs && (
                <div className="mb-8 bg-off-white p-6 rounded-lg border border-border-light">
                  <h3 className="font-montserrat font-bold text-xl text-text-dark mb-4">Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(product.specs).map(([key, value]: [string, any]) => (
                      <div key={key} className="flex justify-between items-start border-b border-border-light pb-3 last:border-0 last:pb-0">
                        <span className="font-semibold text-text-dark font-montserrat capitalize text-sm">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-text-body text-sm text-right max-w-xs">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href={`https://wa.me/919898390824?text=Hi%20Shaswat%20Glass,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Send Inquiry
                </a>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications */}
      {product.applications && (
        <section className="section-padding bg-off-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Where It's Used</p>
              <h2 className="section-title text-text-dark">Applications & Uses</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.applications.map((application: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-text-dark font-medium">{application}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Explore More</p>
            <h2 className="section-title text-text-dark">Related Products</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {allProducts.slice(0, 4).map((prod, index) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/products/${prod.slug}`}
                  className="group block relative h-56 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={prod.localImage}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent group-hover:from-primary/80 group-hover:via-primary/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-montserrat font-bold text-xs uppercase tracking-wider mb-1">
                      {prod.name}
                    </h3>
                    <span className="text-white/60 text-xs group-hover:text-white transition-colors">
                      View Details →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=600&fit=crop"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us for pricing, specifications, or a custom quote.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`https://wa.me/919898390824?text=Hi%20Shaswat%20Glass,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-white flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Inquire via WhatsApp
            </a>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

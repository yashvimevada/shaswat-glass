'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { products } from '@/data/products'

export default function Products() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=600&fit=crop"
          alt="Our Products"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-title mb-4"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg"
            >
              Premium architectural glass solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">What We Make</p>
            <h2 className="section-title text-text-dark">Architecture Glass</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.architecture.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block relative h-64 md:h-72 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={product.localImage}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent
                               group-hover:from-primary/80 group-hover:via-primary/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-montserrat font-bold text-sm md:text-base uppercase tracking-wider mb-1">
                      {product.name}
                    </h3>
                    <span className="text-white/60 text-xs group-hover:text-white transition-colors flex items-center gap-1">
                      View Details <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=600&fit=crop"
          alt="CTA Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white uppercase tracking-tight mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contact us for bespoke glass processing solutions tailored to your requirements
          </p>
          <Link href="/contact" className="btn-white">
            Request Custom Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

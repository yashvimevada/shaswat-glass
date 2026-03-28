'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'

const blogs = [
  {
    id: 1,
    title: 'What is Tempered Glass and Why Is It Safer?',
    excerpt: 'Explore the science behind tempered glass manufacturing and its safety advantages in modern architecture.',
    category: 'Technology',
    date: 'Mar 15, 2024',
    image: 'photo-1486325212027-8081e485255e',
  },
  {
    id: 2,
    title: 'Low-E Glass: The Future of Energy-Efficient Buildings',
    excerpt: 'How low-emissivity coatings revolutionize building thermal efficiency and reduce energy consumption.',
    category: 'Innovation',
    date: 'Mar 10, 2024',
    image: 'photo-1487958449943-2429e8be8625',
  },
  {
    id: 3,
    title: 'How Laminated Glass Protects Against Burglary',
    excerpt: 'Understanding the layered security benefits of laminated glass solutions for residential and commercial use.',
    category: 'Safety',
    date: 'Mar 5, 2024',
    image: 'photo-1558618666-fcd25c85cd64',
  },
  {
    id: 4,
    title: 'The Rise of Automotive Safety Glass in India',
    excerpt: 'Evolution of vehicle glass technology and upcoming industry standards for safer transportation.',
    category: 'Industry',
    date: 'Feb 28, 2024',
    image: 'photo-1497366216548-37526070297c',
  },
  {
    id: 5,
    title: 'Insulated Glass Units — Beating the Heat in Gujarat',
    excerpt: 'Climate-specific solutions for thermal comfort in architectural applications across hot regions.',
    category: 'Solutions',
    date: 'Feb 20, 2024',
    image: 'photo-1486325212027-8081e485255e',
  },
  {
    id: 6,
    title: 'Glass Skywalk Engineering — How It\'s Done',
    excerpt: 'Behind the scenes of designing structurally sound glass walkway solutions for modern infrastructure.',
    category: 'Engineering',
    date: 'Feb 15, 2024',
    image: 'photo-1487958449943-2429e8be8625',
  },
]

export default function Blogs() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=600&fit=crop"
          alt="Blog"
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
              Our Latest Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg"
            >
              Latest insights from the glass industry
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white rounded-lg overflow-hidden border border-border-light hover:shadow-xl
                         transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/${blog.image}?w=400&h=300&fit=crop`}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-primary/20 transition-colors duration-300" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-montserrat font-bold uppercase
                               tracking-wider px-3 py-1 rounded">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-text-light text-xs flex items-center gap-1 mb-3">
                    <Calendar size={12} />
                    {blog.date}
                  </span>
                  <h3 className="font-montserrat font-bold text-text-dark text-lg mb-3 group-hover:text-primary
                             transition-colors duration-300 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-text-body text-sm mb-4 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                  <a
                    href="#"
                    className="text-primary hover:text-primary-dark font-montserrat font-semibold text-sm
                             flex items-center gap-2 transition-colors uppercase tracking-wider"
                  >
                    Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

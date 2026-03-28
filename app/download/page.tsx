'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, FileText, BookOpen } from 'lucide-react'

export default function DownloadPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop"
          alt="Download"
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
              Download
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg"
            >
              Product catalogues and resources
            </motion.p>
          </div>
        </div>
      </section>

      {/* Download Content */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg border border-border-light hover:border-primary hover:shadow-xl
                       transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <FileText size={64} className="text-white/80" />
              </div>
              <div className="p-8">
                <h3 className="font-montserrat font-bold text-text-dark text-xl mb-2">Product Catalogue 2024</h3>
                <p className="text-text-body text-sm mb-5 leading-relaxed">
                  Complete overview of all glass products, specifications, and applications
                </p>
                <div className="text-xs text-text-light mb-6 space-y-1">
                  <p>📊 48 Pages</p>
                  <p>📦 PDF Format</p>
                  <p>⚙️ Full Specifications</p>
                </div>
                <button
                  onClick={() => alert('Download feature coming soon!')}
                  className="btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-lg border border-border-light hover:border-primary hover:shadow-xl
                       transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-dark to-dark-deep flex items-center justify-center">
                <BookOpen size={64} className="text-white/80" />
              </div>
              <div className="p-8">
                <h3 className="font-montserrat font-bold text-text-dark text-xl mb-2">Technical Specifications</h3>
                <p className="text-text-body text-sm mb-5 leading-relaxed">
                  Detailed technical data sheets for all product ranges
                </p>
                <div className="text-xs text-text-light mb-6 space-y-1">
                  <p>📊 Technical Data</p>
                  <p>📦 PDF Format</p>
                  <p>⚙️ Detailed Specs</p>
                </div>
                <button
                  onClick={() => alert('Download feature coming soon!')}
                  className="btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            </motion.div>
          </div>

          {/* Custom Brochure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 bg-off-white border border-border-light rounded-lg p-10 text-center"
          >
            <h3 className="font-montserrat font-bold text-text-dark text-xl mb-3">Need a Custom Brochure?</h3>
            <p className="text-text-body text-sm mb-6 max-w-lg mx-auto">
              Contact us for industry-specific or customized product information tailored to your needs
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

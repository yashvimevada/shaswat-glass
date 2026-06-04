'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

export default function DownloadPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[350px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=600&fit=crop"
          alt="Download Brochure"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hero-title mb-4"
            >
              Downloads & Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg max-w-xl mx-auto"
            >
              Access our official product catalogues, technical guidelines, and brochures.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Download Content Section */}
      <section className="section-padding bg-off-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent text-xs font-bold uppercase tracking-widest bg-accent/10 px-3.5 py-1.5 rounded-full border border-accent/20 inline-block">
              Document Catalogue
            </span>
            <h2 className="font-montserrat font-bold text-text-dark text-3xl leading-tight mt-4">
              Product Brochure
            </h2>
            <p className="text-text-body text-sm leading-relaxed mt-2 max-w-xl mx-auto">
              Explore our entire glass solution collection, featuring detailed architectural, safety, and decorative selections curated in a concise 10-page document.
            </p>
          </div>

          {/* Product Catalogue Download Card */}
          <div className="bg-white p-8 rounded-2xl border border-border-light shadow-md hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <FileText size={28} />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-text-dark text-lg">Product Catalogue</h3>
                <p className="text-xs text-text-light">10 Pages • PDF Format</p>
              </div>
            </div>
            <div className="text-xs text-text-body mb-6 space-y-2.5 bg-off-white p-4 rounded-xl border border-border-light">
              <p>📊 <strong>Scope:</strong> Complete Glass Ranges</p>
              <p>📦 <strong>Size:</strong> 7.5 MB (Full Detailed PDF)</p>
              <p>⚙️ <strong>Standard:</strong> IS 2553: Part 1 : 2018</p>
              <p>📅 <strong>Release:</strong> August 2022</p>
            </div>
            <a
              href="/shaswat-glass-catalogue.pdf"
              download="shaswat-glass-catalogue.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center flex items-center justify-center gap-2 py-3.5 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>

          {/* Custom Brochure Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-border-light rounded-2xl p-10 text-center shadow-lg"
          >
            <h3 className="font-montserrat font-bold text-text-dark text-xl mb-3">Need a Custom Brochure?</h3>
            <p className="text-text-body text-sm mb-6 max-w-lg mx-auto leading-relaxed">
              Contact us for industry-specific or customized product information tailored to your exact architectural or interior project needs.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

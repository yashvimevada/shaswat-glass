'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ChevronDown, Check, Shield, Cpu, Truck, Leaf, BarChart3 } from 'lucide-react'

const heroSlides = [
  {
    image: '/images/hero-slide-1.png',
    title: 'WE TRACE THE GROWTH WITH CLEAR LENS',
    subtitle: 'Premium Architectural Glass Solutions',
  },
  {
    image: '/images/hero-slide-2.png',
    title: 'SUCCESS IS NEARER TO US THAN IT APPEARS FOR OTHERS',
    subtitle: 'Innovation Meets Quality Excellence',
  },
  {
    image: '/images/hero-slide-3.png',
    title: 'TECHNOLOGY THAT PUTS SCIENCE IN THE ART OF ARCHITECTURE',
    subtitle: 'Engineered for Performance',
  },
]

const faqs = [
  {
    q: 'What are the different types of glass?',
    a: 'The different types of glass include float glass, tempered glass, laminated glass, insulating glass, low-e glass, and more. Each type serves specific applications in architecture and construction industries.',
  },
  {
    q: 'What is tempered glass?',
    a: 'Tempered glass is a type of glass that is processed by heating and cooling it rapidly, resulting in a strong and durable glass that can withstand high impacts and thermal shock.',
  },
  {
    q: 'What is laminated glass?',
    a: 'Laminated glass is a type of safety glass that is made by sandwiching a layer of plastic between two sheets of glass. This construction makes the glass strong and resistant to shattering upon impact.',
  },
  {
    q: 'What is insulating glass?',
    a: 'Insulating glass, also known as double-glazed or triple-glazed glass, is constructed with two or more layers of glass separated by a sealed air space. This provides better insulation against heat and sound transmission.',
  },
  {
    q: 'What certifications does Shaswat Glass hold?',
    a: 'Shaswat Glass Solution holds IS 2553: Part 1:2018 certification (CML No.: 7200302288), ensuring our products meet the highest Indian standards for safety glass.',
  },
]

const products = [
  { name: 'Toughened Glass', slug: 'toughened-glass', image: '/images/toughened-glass.png' },
  { name: 'Insulated Glass (DGU)', slug: 'insulated-glass', image: '/images/insulated-glass.png' },
  { name: 'Low-E Glass', slug: 'low-e-glass', image: '/images/low-e-glass.png' },
  { name: 'Ceramic Glass', slug: 'ceramic-glass', image: '/images/ceramic-glass.png' },
  { name: 'Skylight Glass', slug: 'skylight-glass', image: '/images/skylight-glass.png' },
]

export default function Home() {
  const [current, setCurrent] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', phone: '', message: '' })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Quote Request\nName: ${quoteForm.name}\nEmail: ${quoteForm.email}\nPhone: ${quoteForm.phone}\nMessage: ${quoteForm.message}`
    window.open(`https://wa.me/919898390824?text=${encodeURIComponent(msg)}`, '_blank')
    setQuoteForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="w-full">
      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[current].image}
              alt={heroSlides[current].title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 text-center text-white">
            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title mb-6"
            >
              {heroSlides[current].title}
            </motion.h1>
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl mb-10 text-white/80 font-poppins font-light max-w-2xl mx-auto"
            >
              {heroSlides[current].subtitle}
            </motion.p>
            <motion.div
              key={`btns-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <Link href="/products" className="btn-white">
                View Products
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-dark">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current ? 'bg-primary w-10' : 'bg-white/40 w-6'
              }`}
            />
          ))}
        </div>

        {/* Nav Arrows */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm
                   flex items-center justify-center text-white hover:bg-primary transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm
                   flex items-center justify-center text-white hover:bg-primary transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* About Section — Split Layout */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/glass-manufacturing.png"
              alt="Glass Manufacturing"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
            {/* Small floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">About Us</p>
            <h2 className="section-title text-text-dark mb-6">
              We are toughened and built to last
            </h2>
            <h3 className="font-montserrat font-semibold text-text-dark text-lg mb-4">
              World Class Safety Glass Processor Company
            </h3>
            <p className="text-text-body leading-relaxed mb-4">
              Shaswat Glass Solution Private Limited is always in demand for quality toughened, flat and curved as well as a laminated flat range of security glass, bus windscreen glass, earth movers glass, and DGU for Freezing.
            </p>
            <p className="text-text-body leading-relaxed mb-8">
              With IS 2553: Part 1:2018 certification and state-of-the-art infrastructure, we serve the architectural glass industry with uncompromising quality and excellence.
            </p>
            <Link href="/about" className="btn-primary">
              View More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sustainability / Strength Section — Dark BG */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=800&fit=crop"
          alt="Glass Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Sustainability</p>
            <h2 className="section-title text-white mb-4">Strength and Tech-enabled</h2>
            <p className="text-white/70 text-lg mb-8">
              Compliance-driven technologically infused products that strengthen your safety
            </p>
            <Link href="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="section-title text-text-dark mb-4">
              We follow best practices in Glass Strength and Safety
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Check, title: 'Best in-market products and availability' },
              { icon: Cpu, title: 'Process-driven product development' },
              { icon: BarChart3, title: 'ERP system for order tracking and dispatches' },
              { icon: Leaf, title: 'Environmentally conscious solutions' },
              { icon: Shield, title: 'Japanese Model of TPM inducted processes' },
              { icon: Truck, title: 'Timely delivery with quality assurance' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg border border-border-light hover:border-primary hover:shadow-lg
                           transition-all duration-300 flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0
                               group-hover:bg-primary transition-colors duration-300">
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="text-text-dark font-medium text-sm leading-relaxed pt-2">{item.title}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Our Expertise</p>
            <h2 className="section-title text-text-dark">Product Portfolio</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block relative h-56 md:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent
                               group-hover:from-primary/80 group-hover:via-primary/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-montserrat font-bold text-sm uppercase tracking-wider">
                      {product.name}
                    </h3>
                    <span className="text-white/60 text-xs group-hover:text-white transition-colors">View Details →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Request Quote + FAQ Split Section */}
      <section className="grid lg:grid-cols-2">
        {/* Quote Form — Dark Side */}
        <div className="bg-dark p-10 md:p-16">
          <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Get Started</p>
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-white uppercase tracking-tight mb-8">
            Request a Quote
          </h2>
          <form onSubmit={handleQuoteSubmit} className="space-y-4">
            <input
              type="text"
              value={quoteForm.name}
              onChange={(e) => setQuoteForm(prev => ({ ...prev, name: e.target.value }))}
              required
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                       rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <input
              type="email"
              value={quoteForm.email}
              onChange={(e) => setQuoteForm(prev => ({ ...prev, email: e.target.value }))}
              required
              placeholder="Email Address"
              className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                       rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <input
              type="tel"
              value={quoteForm.phone}
              onChange={(e) => setQuoteForm(prev => ({ ...prev, phone: e.target.value }))}
              required
              placeholder="Phone Number"
              className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                       rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <textarea
              value={quoteForm.message}
              onChange={(e) => setQuoteForm(prev => ({ ...prev, message: e.target.value }))}
              rows={4}
              placeholder="Your Message"
              className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                       rounded-lg focus:outline-none focus:border-primary transition-colors text-sm resize-none"
            />
            <button type="submit" className="btn-primary w-full text-center">
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ — Light Side */}
        <div className="bg-off-white p-10 md:p-16">
          <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Help Center</p>
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-text-dark uppercase tracking-tight mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="faq-question"
                >
                  <span>{`${index + 1}. ${faq.q}`}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="faq-answer">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-border-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '3+', label: 'Years in Business' },
              { number: '500+', label: 'Projects Completed' },
              { number: '50+', label: 'Happy Clients' },
              { number: '12+', label: 'Glass Products' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <p className="text-4xl md:text-5xl font-montserrat font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </p>
                <p className="text-text-body text-sm uppercase tracking-wider font-medium">{stat.label}</p>
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
            Ready to Work Together?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Build a project with us and experience world-class glass solutions
          </p>
          <Link href="/contact" className="btn-white">
            Get in Touch Now
          </Link>
        </div>
      </section>
    </div>
  )
}

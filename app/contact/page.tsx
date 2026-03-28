'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, MessageCircle, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    window.open(`https://wa.me/919898390824?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=600&fit=crop"
          alt="Contact Us"
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg"
            >
              We'd love to hear from you. Share your feedback or inquiries
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Split Section */}
      <section className="grid lg:grid-cols-2">
        {/* Form Side — Dark */}
        <div className="bg-dark p-10 md:p-16">
          <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Get In Touch</p>
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-white uppercase tracking-tight mb-8">
            Send Your Message
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-400" />
              </div>
              <h3 className="font-montserrat font-bold text-white text-xl mb-3">Message Sent on WhatsApp!</h3>
              <p className="text-white/60 text-sm">We'll reply to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name *"
                  className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                           rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone Number *"
                  className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                           rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address *"
                className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                         rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject *"
                className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                         rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your Message *"
                className="w-full bg-transparent border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                         rounded-lg focus:outline-none focus:border-primary transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                className="btn-primary w-full text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Send via WhatsApp
              </button>
              <p className="text-white/30 text-xs text-center">
                Opens WhatsApp with your message pre-filled. We'll reply instantly.
              </p>
            </form>
          )}
        </div>

        {/* Info Side — Light */}
        <div className="bg-off-white p-10 md:p-16">
          <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Information</p>
          <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-text-dark uppercase tracking-tight mb-8">
            Contact Information
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0
                           group-hover:bg-primary transition-colors duration-300">
                <MapPin size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-text-dark mb-2">Address</h3>
                <p className="text-text-body text-sm leading-relaxed">
                  Shaswat Industrial Park<br/>
                  Gadh Road, At & Post. Khodla<br/>
                  Ta. Palanpur (B.K.), Gujarat<br/>
                  India - 385001
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0
                           group-hover:bg-primary transition-colors duration-300">
                <Phone size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-text-dark mb-2">Phone Numbers</h3>
                <div className="space-y-1">
                  <a href="tel:+919898390824" className="block text-primary hover:text-primary-dark font-semibold text-sm">
                    +91 98983 90824
                  </a>
                  <a href="tel:+919725716520" className="block text-primary hover:text-primary-dark font-semibold text-sm">
                    +91 97257 16520
                  </a>
                  <a href="tel:+919106866268" className="block text-primary hover:text-primary-dark font-semibold text-sm">
                    +91 91068 66268
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0
                           group-hover:bg-primary transition-colors duration-300">
                <Mail size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-text-dark mb-2">Email</h3>
                <a href="mailto:shaswatglass4191@gmail.com" className="text-primary hover:text-primary-dark font-semibold text-sm">
                  shaswatglass4191@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0
                           group-hover:bg-primary transition-colors duration-300">
                <Clock size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-text-dark mb-2">Business Hours</h3>
                <p className="text-text-body text-sm leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM<br/>
                  Saturday: 9:00 AM - 2:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Certification Badge */}
            <div className="bg-white p-6 rounded-lg border border-border-light shadow-sm">
              <p className="text-primary font-montserrat font-bold text-sm mb-1">IS 2553: Part 1:2018 Certified</p>
              <p className="text-text-body text-xs">CML No.: 7200302288</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Share Feedback */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">We Value You</p>
            <h2 className="section-title text-text-dark">Why Share Your Feedback?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Continuous Improvement', description: 'Your feedback helps us improve our products and services to better meet your needs.' },
              { title: 'Partnership Opportunities', description: 'We believe in building long-term relationships with our clients and stakeholders.' },
              { title: 'Innovation & Growth', description: 'Your insights drive our innovation and help us grow as a company.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-off-white p-8 rounded-lg border-t-4 border-primary text-center hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-montserrat font-bold text-text-dark text-lg mb-3">{item.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

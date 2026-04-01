'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, Target, Heart, Award, Zap, Truck, Beaker, Leaf, BarChart3 } from 'lucide-react'

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&h=600&fit=crop"
          alt="About Shaswat Glass"
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg"
            >
              Leading the way in glass innovation since 2022
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
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
              src="/images/about/uploaded-factory-image.png"
              alt="Shaswat Glass Factory"
              width={600}
              height={600}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Our Story</p>
            <h2 className="section-title text-text-dark mb-6">Building Excellence Since 2022</h2>
            <div className="space-y-4 text-text-body leading-relaxed">
              <p>
                Shaswat Glass Solution Private Limited was established in 2022 in Palanpur, Gujarat, with a vision to become the industry leader in architectural glass processing. Our journey is built on the foundation of quality, innovation, and customer satisfaction.
              </p>
              <p>
                We are proud holders of IS 2553: Part 1:2018 certification (CML No.: 7200302288), a testament to our unwavering commitment to international quality standards. Our state-of-the-art manufacturing facility is equipped with advanced machinery and staffed by experienced professionals.
              </p>
              <p>
                With a full-fledged R&D laboratory, ERP systems, and TPM processes inspired by Japanese manufacturing excellence, we continuously innovate to serve our clients better.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Our Foundation</p>
            <h2 className="section-title text-text-dark">Vision, Mission & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Vision',
                desc: 'To be the industry leader in Architectural Building Glass and Transportation sectors through innovation and excellence.',
                color: 'primary',
              },
              {
                icon: Target,
                title: 'Mission',
                desc: 'To espouse customer faith through best-in-segment product solutions and uncompromising quality standards.',
                color: 'primary',
              },
              {
                icon: Heart,
                title: 'Values',
                desc: 'Quality, technology, statutory compliance, safety, and environmental responsibility combined.',
                color: 'primary',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5
                               group-hover:bg-primary transition-colors duration-300">
                    <Icon size={28} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-montserrat font-bold text-text-dark text-xl mb-3">{item.title}</h3>
                  <p className="text-text-body leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Our Strengths</p>
            <h2 className="section-title text-text-dark">Why Choose Shaswat Glass?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Award, name: 'IS Certified Quality' },
              { icon: Zap, name: 'Advanced Machinery' },
              { icon: BarChart3, name: 'ERP Order Tracking' },
              { icon: Truck, name: 'Timely Delivery' },
              { icon: Beaker, name: 'R&D Laboratory' },
              { icon: Leaf, name: 'Eco-Friendly Processes' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-off-white p-6 rounded-lg border border-border-light hover:border-primary hover:shadow-md
                           transition-all duration-300 flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0
                               group-hover:bg-primary transition-colors duration-300">
                    <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <p className="font-montserrat font-semibold text-text-dark text-sm">{item.name}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-off-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">Quality Assurance</p>
            <h2 className="section-title text-text-dark">Certifications & Compliance</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border-l-4 border-primary shadow-md"
            >
              <p className="text-primary font-montserrat font-bold text-lg mb-2">IS 2553: Part 1:2018</p>
              <p className="text-text-body">
                Indian Standard for Safety Glass for use in buildings and vehicles. CML No.: 7200302288
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg border-l-4 border-primary shadow-md"
            >
              <p className="font-montserrat font-bold text-text-dark text-lg mb-2">Manufacturing Excellence</p>
              <p className="text-text-body">
                Factory License | SSI Registration | ERP & TPM Processes | R&D Laboratory
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Partner With Us?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Experience the difference quality and innovation make
          </p>
          <Link href="/contact" className="btn-white">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

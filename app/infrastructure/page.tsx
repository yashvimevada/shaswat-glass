'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const machines = [
  {
    id: 'cnc',
    label: 'CNC Cutting Machine',
    title: 'Intermac CNC Cutting Machine',
    description:
      'Our state-of-the-art Intermac CNC Cutting Machine enables high-precision glass cutting for all product ranges with zero-defect quality assurance.',
    images: [
      { src: '/images/cnc-cutting-machine-1.jpg', caption: 'Intermac CNC Cutting Machine', sub: 'High-precision glass cutting system' },
      { src: '/images/cnc-cutting-machine-2.jpg', caption: 'CNC Precision Cutting — Full View', sub: 'Advanced automated cutting technology' },
    ],
    features: [
      { label: 'CNC Technology', desc: 'Computer-controlled precision cutting' },
      { label: 'Zero Defect', desc: 'Our quality policy commitment' },
      { label: 'IS Certified', desc: 'IS 2553: Part 1:2018 processes' },
      { label: 'Large Format', desc: 'Up to 2440×5000mm glass sheets' },
    ],
  },
  {
    id: 'edge',
    label: 'Edge Polishing Machine',
    title: 'SK Glass Edge Polishing Machine',
    description:
      'Our SK Glass Edge Polishing Machine delivers flawlessly smooth, polished glass edges for architectural and automotive applications. Multi-head diamond wheel technology ensures consistent quality across all thicknesses.',
    images: [
      { src: '/images/edge-polishing-machine.jpg', caption: 'SK Glass Edge Polishing Machine', sub: 'Multi-head diamond wheel polishing' },
      { src: '/images/edge-polishing-machine-2.jpg', caption: 'Edge Polishing — Full Run View', sub: 'Industrial-grade finishing for all glass types' },
    ],
    features: [
      { label: 'Multi-Head Wheels', desc: 'Diamond abrasive polishing heads' },
      { label: 'Smooth Edges', desc: 'Mirror-finish polishing standard' },
      { label: 'All Thicknesses', desc: '3.5mm – 19mm glass compatible' },
      { label: 'High Throughput', desc: 'Continuous production line capacity' },
    ],
  },
]

export default function Infrastructure() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&h=600&fit=crop"
          alt="Our Infrastructure"
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
              Our Infrastructure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg"
            >
              State-of-the-art manufacturing facility
            </motion.p>
          </div>
        </div>
      </section>

      {/* Machine Sections */}
      {machines.map((machine, mIdx) => (
        <section
          key={machine.id}
          className={`section-padding ${mIdx % 2 === 0 ? 'bg-white' : 'bg-off-white'}`}
        >
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-14">
              <p className="text-primary font-montserrat font-bold text-xs uppercase tracking-[0.2em] mb-3">
                Our Equipment
              </p>
              <h2 className="section-title text-text-dark">{machine.title}</h2>
              <p className="text-text-body mt-4 max-w-2xl mx-auto">
                {machine.description}
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {machine.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-80 md:h-96">
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent group-hover:from-primary/60 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-montserrat font-bold text-lg uppercase tracking-wide">
                        {img.caption}
                      </h3>
                      <p className="text-white/70 text-sm mt-1">{img.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {machine.features.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg p-6 border border-border-light hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <p className="font-montserrat font-bold text-primary text-base mb-2">{item.label}</p>
                  <p className="text-text-body text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Stats */}
      <section className="py-16 bg-dark border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '2', label: 'Production Machines' },
              { number: 'CNC', label: 'Precision Cutting' },
              { number: 'IS', label: 'Certified Processes' },
              { number: 'Zero', label: 'Defect Policy' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-montserrat font-black text-primary mb-2">{stat.number}</p>
                <p className="text-white/60 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

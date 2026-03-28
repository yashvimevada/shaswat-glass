'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phoneNumber = '919898390824'
  const message = 'Hi Shaswat Glass, I would like to inquire about your products and services.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-8 right-8 z-40"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-green-500/20 rounded-full"
      />
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-lg
                 hover:bg-green-600 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-green-500/30"
      >
        <MessageCircle size={26} />
      </Link>
    </motion.div>
  )
}

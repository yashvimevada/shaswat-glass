'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'Download', href: '/download' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white shadow-lg'
        : 'bg-white/95 backdrop-blur-sm'
        }`}
    >


      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, boxShadow: "0px 0px 0px rgba(29, 138, 138, 0)" }}
              animate={{
                scale: 1,
                opacity: 1,
                boxShadow: [
                  "0px 0px 0px rgba(29, 138, 138, 0)",
                  "0px 0px 35px rgba(29, 138, 138, 0.9)",
                  "0px 0px 15px rgba(29, 138, 138, 0.2)"
                ]
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 30px rgba(29, 138, 138, 0.7)",
                borderColor: "#1D8A8A"
              }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="relative w-16 h-16 rounded-xl border-2 border-primary/30 bg-white flex items-center justify-center cursor-pointer transition-colors duration-300"
            >
              <Image
                src="/logo.png"
                alt="Shaswat Glass Logo"
                width={52}
                height={52}
                className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-all duration-300"
              />
            </motion.div>
            <div>
              <h1 className="font-montserrat text-primary font-bold text-xl leading-tight tracking-tight">
                SHASWAT
              </h1>
              <p className="text-text-body text-[10px] font-semibold uppercase tracking-widest">
                Glass Solution Pvt Ltd
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${pathname === item.href ? 'nav-link-active' : ''
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-text-dark hover:text-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-border-light"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 font-montserrat font-semibold text-sm uppercase tracking-wider rounded-lg transition-colors ${pathname === item.href
                      ? 'text-accent bg-accent/5'
                      : 'text-text-dark hover:text-primary hover:bg-primary/5'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

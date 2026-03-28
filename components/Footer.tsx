'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-sm">SG</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-primary text-lg leading-tight">SHASWAT GLASS</h3>
                <p className="text-white/50 text-[10px] uppercase tracking-widest">Solution Pvt Ltd</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              We are always in demand for quality toughened, flat and curved as well as a laminated flat range of security glass.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center
                           text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="font-montserrat font-bold text-base uppercase tracking-wider mb-6 relative">
              Useful Links
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary -mb-2"></span>
            </h4>
            <ul className="space-y-3 text-white/60 text-sm mt-4">
              {[
                { name: 'Toughened Glass', href: '/products' },
                { name: 'Insulated Glass (DGU)', href: '/products' },
                { name: 'Low-E Glass', href: '/products' },
                { name: 'Ceramic Glass', href: '/products' },
                { name: 'Skylight Glass', href: '/products' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-primary hover:pl-2 transition-all duration-300 flex items-center gap-2"
                  >
                    <span className="text-primary text-xs">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Subscribe */}
          <div>
            <h4 className="font-montserrat font-bold text-base uppercase tracking-wider mb-6 relative">
              Subscribe Now
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary -mb-2"></span>
            </h4>
            <p className="text-white/60 text-sm mb-6 mt-4">
              Don't miss our future updates! Get Subscribed Today!
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email..."
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3
                         text-sm rounded-l-lg focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-4 py-3 rounded-r-lg transition-colors"
              >
                <Send size={16} />
              </button>
            </form>

            {/* Certification */}
            <div className="mt-8 bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-primary font-montserrat font-bold text-sm">IS 2553: Part 1:2018</p>
              <p className="text-white/50 text-xs mt-1">CML No.: 7200302288</p>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-base uppercase tracking-wider mb-6 relative">
              Contact
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-primary -mb-2"></span>
            </h4>
            <div className="space-y-5 text-sm mt-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-white/60">
                  Shaswat Industrial Park,<br/>
                  Gadh Road, Palanpur,<br/>
                  Gujarat, India
                </p>
              </div>
              <div className="flex gap-3">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:shaswatglass4191@gmail.com" className="text-white/60 hover:text-primary transition-colors">
                  shaswatglass4191@gmail.com
                </a>
              </div>
              <div className="flex gap-3">
                <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <a href="tel:+919898390824" className="block text-white/60 hover:text-primary transition-colors">
                    +91 98983 90824
                  </a>
                  <a href="tel:+919725716520" className="block text-white/60 hover:text-primary transition-colors">
                    +91 97257 16520
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs">
            Copyright © {currentYear} Shaswat Glass Solution Private Limited
          </p>
          <p className="text-white/40 text-xs">
            Trust The Best ✨
          </p>
        </div>
      </div>
    </footer>
  )
}

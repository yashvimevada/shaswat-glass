import type { Metadata } from 'next'
import { Montserrat, Poppins } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Shaswat Glass Solution - Premium Architectural & Automotive Glass',
  description: 'Shaswat Glass Solution Pvt Ltd - IS 2553 Certified. Trust The Best. Premium glass processing for architecture and automotive industries.',
  keywords: 'tempered glass, laminated glass, insulated glass, architectural glass, automotive glass, glass processing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="bg-white font-poppins">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}

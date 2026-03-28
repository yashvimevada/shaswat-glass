# Shaswat Glass Solution - Next.js 14 Website

A production-ready, professional website for **Shaswat Glass Solution Private Limited** built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✅ **Next.js 14 App Router** - Latest Next.js with server/client components
- ✅ **Tailwind CSS** - Professional color scheme and responsive design
- ✅ **Framer Motion** - Smooth animations and transitions
- ✅ **Multi-page** - Home, About, Products, Infrastructure, Download, Blogs, Contact
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Professional Design** - Premium corporate aesthetic
- ✅ **SEO Ready** - Metadata and structured content
- ✅ **WhatsApp Integration** - Floating button for direct messaging

## 📋 Project Structure

```
shaswat-glass-next/
├── app/
│   ├── page.tsx                 (Home Page)
│   ├── about/
│   │   └── page.tsx             (About Page)
│   ├── products/
│   │   ├── page.tsx             (Products Page)
│   │   └── [slug]/page.tsx       (Product Detail - Template)
│   ├── infrastructure/
│   │   └── page.tsx             (Infrastructure Page)
│   ├── download/
│   │   └── page.tsx             (Download Page)
│   ├── blogs/
│   │   └── page.tsx             (Blog Page)
│   ├── contact/
│   │   └── page.tsx             (Contact Page)
│   └── layout.tsx               (Root Layout)
├── components/
│   ├── Navbar.tsx               (Navigation Component)
│   ├── Footer.tsx               (Footer Component)
│   └── WhatsAppButton.tsx        (WhatsApp CTA)
├── data/
│   └── products.ts              (Product Data)
├── public/
│   └── images/                  (Static Images)
├── styles/
│   └── globals.css              (Global Styles)
├── tailwind.config.js           (Tailwind Configuration)
├── postcss.config.js            (PostCSS Configuration)
├── tsconfig.json                (TypeScript Configuration)
├── next.config.js               (Next.js Configuration)
└── package.json                 (Dependencies)
```

## 🛠️ Installation

1. **Navigate to the project**:
```bash
cd /Users/DELL/Desktop/shaswat-glass-next
```

2. **Install dependencies** (if not already done):
```bash
npm install
```

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```

The website will be available at **http://localhost:3000**

### Production Build
```bash
npm run build
npm run start
```

## 📄 Pages Overview

### 1. **Home** (`/`)
- Hero slider with 3 animated slides
- Certification badge strip
- About snippet with image
- Product portfolio grid
- Stats counter section
- Why Choose Us cards
- Call-to-action section

### 2. **About** (`/about`)
- Company story and history
- Vision, Mission, Values cards
- Why Choose Us section
- Certifications & Compliance
- Contact CTA

### 3. **Products** (`/products`)
- Architecture Glass section (8 products)
- Automotive Glass section
- Railway Glass section
- Home Appliances Glass section
- Individual product detail pages (via `/products/[slug]`)

### 4. **Infrastructure** (`/infrastructure`)
- Machinery showcase grid
- Manufacturing statistics
- Equipment details

### 5. **Download** (`/download`)
- Product Catalogue PDF download
- Technical Specifications
- Custom brochure request form

### 6. **Blogs** (`/blogs`)
- 6 featured blog posts
- Category tags and dates
- Responsive card grid
- Read More links

### 7. **Contact** (`/contact`)
- Contact form (Name, Email, Phone, Subject, Message)
- Contact information cards
- Address, Email, Phone numbers
- IS Certification badge
- Form submission via WhatsApp

## 🎨 Design System

### Color Palette
- **Primary Teal**: `#009688`
- **Teal Dark**: `#00796B`
- **Teal Light**: `#4DB6AC`
- **Navy**: `#0D2137`
- **Navy Mid**: `#1a3352`
- **Off-White**: `#F5F9F8`
- **Accent Gold**: `#C9A84C`

### Typography
- **Display**: Barlow Condensed (700, 800 weights)
- **Body**: Barlow (400, 500, 600, 700 weights)
- **Special**: Playfair Display (for hero titles)

## 📱 Responsive Design

All pages are fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

## 🌐 Company Information

- **Name**: Shaswat Glass Solution Private Limited
- **Tagline**: Trust The Best
- **Founded**: 2022
- **Certification**: IS 2553: Part 1:2018
- **CML No**: 7200302288
- **Address**: Shaswat Industrial Park, Gadh Road, At & Post. Khodla, Ta. Palanpur (B.K.), Gujarat, India
- **Email**: shaswatglass4191@gmail.com
- **Phones**: 
  - +91 98983 90824
  - +91 97257 16520
  - +91 91068 66268

## 🔧 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Next/Image** - Optimized image component

## 📦 Key Dependencies

```json
{
  "next": "^14.1.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^10.16.16",
  "lucide-react": "^0.344.0"
}
```

## 🚀 Deployment

### Netlify / Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Netlify/Vercel
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy!

### Manual Deployment
```bash
npm run build
npm run start
```

## ✨ Features Implemented

- ✅ Responsive Navigation with mobile hamburger menu
- ✅ Auto-playing hero slider with manual controls
- ✅ Smooth scroll animations with Framer Motion
- ✅ Contact form with WhatsApp integration
- ✅ Product grid with hover effects
- ✅ Animated counters
- ✅ Accordion FAQ sections
- ✅ Floating WhatsApp button
- ✅ Professional footer with links
- ✅ Certification badges
- ✅ Blog card grid
- ✅ Infrastructure machinery showcase

## 📞 Support

For questions or modifications, contact:
- Email: shaswatglass4191@gmail.com
- Phone: +91 98983 90824

## 📄 License

© 2024 Shaswat Glass Solution Private Limited. All rights reserved.

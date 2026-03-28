/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // North Capital Glass inspired palette
        primary: '#1D8A8A',
        'primary-dark': '#147272',
        'primary-light': '#2BA5A5',
        accent: '#D81B60',
        'accent-light': '#E91E73',
        dark: '#2D3E50',
        'dark-deep': '#1E2D3D',
        'text-dark': '#333333',
        'text-body': '#7A7A7A',
        'text-light': '#999999',
        'off-white': '#F8F9FA',
        'border-light': '#E8E8E8',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

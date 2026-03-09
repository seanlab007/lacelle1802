/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lacelle-black': '#0a0a0a',
        'lacelle-dark': '#111111',
        'lacelle-gold': '#c9a96e',
        'lacelle-gold-light': '#e8d5a3',
        'lacelle-cream': '#f5f0e8',
        'lacelle-warm': '#f0e8d8',
        'lacelle-gray': '#8a8a8a',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'Georgia', 'serif'],
        'playfair': ['Playfair Display', 'Georgia', 'serif'],
        'sans-light': ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.3em',
        'widest-2xl': '0.5em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
        'fade-up': 'fadeUp 1s ease-out',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

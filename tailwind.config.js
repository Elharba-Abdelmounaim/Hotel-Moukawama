module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b61a4', // blue
          dark: '#084f84'
        },
        sand: '#e7d6b6',
        accent: '#f5f0e6'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fadeInUp 600ms ease-out both'
      }
    }
  },
  plugins: []
};
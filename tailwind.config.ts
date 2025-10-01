import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'taply-blue': '#007AFF',
        'taply-lime': '#A8FF60',
        'taply-dark': '#111111',
        'taply-gray-dark': '#1C1C1E',
        'taply-white': '#FFFFFF',
        'taply-cream-blue': '#E8F4FD',
        'taply-light-grey': '#F5F5F7',
        'taply-black': '#000000',
        'taply-dark-grey': '#1D1D1F',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'tap': 'tap 0.6s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        tap: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(0, 122, 255, 0.2), 0 0 10px rgba(0, 122, 255, 0.1), 0 0 15px rgba(0, 122, 255, 0.05)'
          },
          '100%': {
            boxShadow: '0 0 10px rgba(0, 122, 255, 0.4), 0 0 20px rgba(0, 122, 255, 0.2), 0 0 30px rgba(0, 122, 255, 0.1)'
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
export default config


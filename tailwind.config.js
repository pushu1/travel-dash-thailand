/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040E17',
          900: '#071B2C', // Deep Navy (from user palette)
          850: '#0B2236',
          800: '#0E2A42',
          700: '#143857',
        },
        ocean: {
          DEFAULT: '#087E9E', // Ocean Blue
          light: '#0AA0C9',
          dark: '#06637C',
        },
        teal: {
          tropical: '#12A6A0', // Tropical Teal
        },
        sand: {
          warm: '#F5EBDD', // Warm Sand
        },
        gold: {
          champagne: '#D6B36A', // Champagne Gold
          light: '#E7CC8C',
          dark: '#B89349',
        },
        luxury: {
          navy: '#071B2C',
          ocean: '#087E9E',
          teal: '#12A6A0',
          sand: '#F5EBDD',
          gold: '#D6B36A',
        }
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};

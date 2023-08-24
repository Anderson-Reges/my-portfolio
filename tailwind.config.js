/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {

    screens: {
      'mobile': '320px',
      // => @media (min-width: 320px) { ... }

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

    extend: {

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'primary': '#212121',
        'second': '#dadada',
        'third': '#40DCA5',
      },

      keyframes: {

        slide: {
          '0%, 100%': { transform: 'translateY(-1px)' },
          '50%': { transform: 'translateY(1px)' }
        }

      },

      animation: {
        slide: 'slide 1s ease-in-out infinite'
      }

    },

  },

  plugins: [
    require('flowbite/plugin')
  ],

}

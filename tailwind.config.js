/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],

  theme: {

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

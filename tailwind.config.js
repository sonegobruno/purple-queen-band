/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8C52FF',
        light: '#F4F4EF',
        dark: '#0C0014',
      },
      boxShadow: {
        primary: '0px 0px 20px -1px rgba(73, 28, 163, 0.3)',
      },
    },
  },
  plugins: [],
}

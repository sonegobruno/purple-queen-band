/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8C52FF',
        light: '#F4F4EF',
        dark: '#0C0014',
        'dark-tiny': '#1A0F21',
        alert: '#F86969',
        warning: '#8C6B06',
        info: '#2E67C2',
        success: '#157A3A',
      },
      boxShadow: {
        primary: '0px 0px 20px -1px rgba(73, 28, 163, 0.3)',
        dark: '0px 0px 10px -1px #1A0F2103',
        alert: '0px 0px 20px -1px rgba(248, 105, 105, 0.3)',
      },
    },
  },
  plugins: [],
}

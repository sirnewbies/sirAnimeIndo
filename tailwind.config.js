/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'color-primary': '#0f4c75',
        'color-primary-light': '#3282b8',
        'color-text': '#dee2e6',
        'color-text-dark': '#333538',
        'color-background-100': '#2d3c44',
        'color-background-500': '#32383f',
        'color-background-900': '#1b262c',
        'color-red': '#fa9884',
        'color-red-dark': '#e74646',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "background": '#050a07',
        "textColor": '#ffffff',
        "primary": "#2a5b3b",
        'secondary': '#0d1c12',
        "accent": "#224930"
      },
      fontFamily: {
        'Hind': "'Hind', sans-serif",
        'Teko': "'Teko', sans-serif"
      }
    },
  },
  plugins: [],
}


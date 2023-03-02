/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'background-indigo': '#1D203E',
        'card-indigo': '#2A2E4E',
      }
    },
  },
  plugins: [
  ],
}

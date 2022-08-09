/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './frontend/scripts/*.{html,js,vue}',
    './templates/*.html',
  ],
  prefix: 'test-',
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [],
}

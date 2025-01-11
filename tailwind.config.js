/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dongguk: 'rgba(203, 96, 21, 1)',
        'light-dongguk': 'rgba(203, 96, 21, 0.4)',
        'typography-type-1': '#83786f; // [#83786f]',
        'sul-gray-800': '#2E2E2E',
        'sul-gray-600': '#636363',
        'sul-gray-400': '#A6A6A6',
        'sul-gray-200': '#DEDEDE',
      },
    },
  },
  plugins: [],
}


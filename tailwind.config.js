/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  safelist: [
    'bg-blue-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-orange-400',
    'bg-blue-600',
    'bg-neutral-600',
    'bg-red-800',
    'bg-green-600',
    'bg-teal-600',
    'bg-green-500',
    'bg-orange-600',
    'bg-cyan-700',
    'bg-cyan-800',
    "bg-purple-600"
    
  ],
  plugins: [],
}


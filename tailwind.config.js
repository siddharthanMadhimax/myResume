/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGradientFrom: '#ec4899',
        primaryGradientTo: '#3b82f6',
        textBlue: '#2563eb',
        skillBgColor: "#1a1a1a",
        skillsSubBgColor: "#212121",
        iconBgColor: '#1c1c1c',
      },
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spinSlow: 'spinSlow 5s linear infinite',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3b82f6",
          "secondary": "#9333ea",
          "accent": "#f59e0b",
          "neutral": "#1f2937",
          "base-100": "#F8FAFC",  // 
          "info": "#0ea5e9",
          "success": "#22c55e",
          "warning": "#facc15",
          "error": "#ef4444",
        },
      },
    ],
  },
};
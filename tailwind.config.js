/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  safelist: [
    "bg-primary", "bg-secondary", "bg-neutral", "bg-transparent",
    "text-primary", "text-secondary", "text-neutral"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937",
        secondary: "#6b7280",
        neutral: "#FFFFFF",
        warning: "#FAAD14",
        danger: "#FF4D4F"
      }
    }
  },
  plugins: []
}
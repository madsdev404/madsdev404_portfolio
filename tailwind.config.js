/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1', // Indigo-500
        secondary: '#A5B4FC', // Indigo-300
        accent: '#F472B6', // Pink-400
        background: '#F9FAFB', // Light Gray (bg)
        foreground: '#111827', // Almost Black (text)

        muted: '#E5E7EB',          // Light muted elements
        border: '#D1D5DB',         // Border gray
        success: '#10B981',        // Green-500
        warning: '#FBBF24',        // Amber-400
        danger: '#EF4444',         // Red-500
        info: '#3B82F6',           // Blue-500
        light: '#FFFFFF',          // Pure white
        dark: '#1F2937',           // Gray-800

        // Optional tone variants
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
        },
      },
    },
  },
  plugins: [],
}
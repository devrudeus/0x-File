/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0015',
        white: '#FFFFFF',
        gray: {
          light: '#B8B0D9',
          dark: '#2D1B4E',
        },
        purple: {
          primary: '#8B5CF6',
          light: '#A78BFA',
          dark: '#6D28D9',
          glow: '#C084FC',
          neon: '#E9D5FF',
        },
        terminal: {
          green: '#8B5CF6',
          dim: '#6D28D9',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'Geist Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

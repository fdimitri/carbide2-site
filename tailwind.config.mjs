/** @type {import('tailwindcss').Config} */

// RGB channel values — single source of truth for accent colors used with
// opacity modifiers and in CSS custom properties (global.css :root).
const BLUE = '90 176 255';      // #5ab0ff
const BLUE_DK = '46 143 212';   // #2e8fd4
const CYAN = '92 246 255';      // #5cf6ff

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CARB/IDE2 brand palette — terminal/cyberpunk.
        carbide: {
          bg: '#08090d',
          surface: '#0d1016',
          panel: '#12161e',
          line: '#1c2230',
          dim: '#2b3445',
          text: '#c8d8e8',
          muted: '#5c7888',
          green: `rgb(${BLUE} / <alpha-value>)`,
          greenDark: `rgb(${BLUE_DK} / <alpha-value>)`,
          amber: '#ffb454',
          cyan: '#5cf6ff',
          red: '#ff6b6b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      boxShadow: {
        glow: `0 0 12px rgb(${BLUE} / 0.45), 0 0 32px rgb(${BLUE} / 0.15)`,
        'glow-sm': `0 0 6px rgb(${BLUE} / 0.5)`,
      },
      backgroundImage: {
        scanlines:
          'repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)',
        grid: `linear-gradient(rgb(${BLUE} / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(${BLUE} / 0.05) 1px, transparent 1px)`,
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s steps(2) infinite',
        'phosphor': 'phosphor 6s ease-in-out infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        phosphor: {
          '0%, 100%': { textShadow: `0 0 6px rgb(${BLUE} / 0.45)` },
          '50%': { textShadow: `0 0 14px rgb(${BLUE} / 0.65)` },
        },
      },
    },
  },
  plugins: [],
};

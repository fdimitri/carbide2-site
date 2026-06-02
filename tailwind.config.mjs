/** @type {import('tailwindcss').Config} */
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
          green: '#5ab0ff',
          greenDark: '#2e8fd4',
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
        glow: '0 0 12px rgba(90,176,255,0.45), 0 0 32px rgba(90,176,255,0.15)',
        'glow-sm': '0 0 6px rgba(90,176,255,0.5)',
      },
      backgroundImage: {
        scanlines:
          'repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)',
        grid: 'linear-gradient(rgba(90,176,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(90,176,255,0.05) 1px, transparent 1px)',
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
          '0%, 100%': { textShadow: '0 0 6px rgba(90,176,255,0.45)' },
          '50%': { textShadow: '0 0 14px rgba(90,176,255,0.65)' },
        },
      },
    },
  },
  plugins: [],
};

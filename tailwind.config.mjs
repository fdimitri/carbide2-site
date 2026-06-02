/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CARB/IDE2 brand palette — terminal/cyberpunk.
        carbide: {
          bg: '#0a0e0a',
          surface: '#10160f',
          panel: '#141c12',
          line: '#1f2a1d',
          dim: '#3a4a36',
          text: '#cfe6c5',
          muted: '#7d9275',
          green: '#7fff9a',
          greenDark: '#3dd66f',
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
        glow: '0 0 12px rgba(127,255,154,0.45), 0 0 32px rgba(127,255,154,0.15)',
        'glow-sm': '0 0 6px rgba(127,255,154,0.5)',
      },
      backgroundImage: {
        scanlines:
          'repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)',
        grid: 'linear-gradient(rgba(127,255,154,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(127,255,154,0.05) 1px, transparent 1px)',
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
          '0%, 100%': { textShadow: '0 0 6px rgba(127,255,154,0.45)' },
          '50%': { textShadow: '0 0 14px rgba(127,255,154,0.65)' },
        },
      },
    },
  },
  plugins: [],
};

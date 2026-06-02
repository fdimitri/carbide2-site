/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // CARB/IDE2 brand palette — terminal/cyberpunk.
        carbide: {
          bg: '#090d0f',
          surface: '#0e1519',
          panel: '#121b20',
          line: '#1c2a30',
          dim: '#2e4450',
          text: '#c8e2e8',
          muted: '#6a9aaa',
          green: '#5fffc8',
          greenDark: '#29d9a0',
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
        glow: '0 0 12px rgba(95,255,200,0.45), 0 0 32px rgba(95,255,200,0.15)',
        'glow-sm': '0 0 6px rgba(95,255,200,0.5)',
      },
      backgroundImage: {
        scanlines:
          'repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 3px)',
        grid: 'linear-gradient(rgba(95,255,200,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(95,255,200,0.05) 1px, transparent 1px)',
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
          '0%, 100%': { textShadow: '0 0 6px rgba(95,255,200,0.45)' },
          '50%': { textShadow: '0 0 14px rgba(95,255,200,0.65)' },
        },
      },
    },
  },
  plugins: [],
};

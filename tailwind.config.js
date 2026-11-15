/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090D16',
          card: '#111827',
          border: '#1F2937',
          hover: '#1E293B',
        },
        brand: {
          primary: '#6366F1',   // Indigo accent
          secondary: '#3B82F6', // Vibrant blue
          cyan: '#06B6D4',      // Cyber cyan
          emerald: '#10B981',   // Neon green
          purple: '#8B5CF6',    // Deep violet
          rose: '#F43F5E',      // Coral rose
        },
        excali: {
          bg: '#fcfbf8',
          card: '#ffffff',
          ink: '#1e1e1e',
          subtle: '#696969',
          border: '#1e1e1e',
          yellow: '#fff3bf',
          yellowBorder: '#fab005',
          blue: '#d0ebff',
          blueBorder: '#228be6',
          green: '#d3f9d8',
          greenBorder: '#40c057',
          purple: '#f3d9fa',
          purpleBorder: '#be4bdb',
          orange: '#ffe8cc',
          orangeBorder: '#fd7e14',
          pink: '#ffe3e3',
          pinkBorder: '#fa5252',
          gray: '#f1f3f5',
          tape: 'rgba(254, 240, 138, 0.65)',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        script: ['Caveat', 'cursive'],
        hand: ['"Patrick Hand"', '"Kalam"', '"Caveat"', 'cursive'],
        kalam: ['"Kalam"', '"Patrick Hand"', 'cursive'],
        shantell: ['"Shantell Sans"', '"Patrick Hand"', 'sans-serif'],
      },
      boxShadow: {
        'sketch-sm': '2px 2px 0px #1e1e1e',
        'sketch': '3px 3px 0px #1e1e1e',
        'sketch-lg': '5px 5px 0px #1e1e1e',
        'sketch-xl': '7px 7px 0px #1e1e1e',
        'sketch-hover': '1px 1px 0px #1e1e1e',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
      },
    },
  },
  plugins: [],
};

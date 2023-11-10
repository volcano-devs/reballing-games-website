import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(link|navbar).js',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        'red-dark': {
          extend: 'dark',
          colors: {
            background: '#0e1624',
            foreground: '#ffffff',
            primary: {
              50: '#F8CAD2',
              100: '#F6B8C2',
              200: '#F294A3',
              300: '#ED7083',
              400: '#E94B64',
              500: '#E42745',
              600: '#BB1731',
              700: '#8A1124',
              800: '#580B17',
              900: '#26050A',
              950: '#0D0203',
              DEFAULT: '#E42745',
              foreground: '#ffffff',
            },
            focus: '#E42745',
          },
        },
      },
    }),
  ],
}
export default config

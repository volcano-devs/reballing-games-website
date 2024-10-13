import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(avatar|badge|breadcrumbs|button|card|chip|divider|input|link|listbox|modal|navbar|pagination|table|user|ripple|spinner|checkbox|spacer).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg':
          'radial-gradient(circle at top,#580B17,#040E1E,#040E1E 100%)',
        hero: 'radial-gradient(circle at right ,#580B17,#26050A,#091322 80%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        'red-dark': {
          extend: 'light',
          colors: {
            background: {
              DEFAULT: '#010A18',
              50: '#6F7989',
              100: '#5B6676',
              200: '#475262',
              300: '#343E4E',
              400: '#212B3A',
              500: '#0E1725',
              600: '#091322',
              700: '#040E1E',
              800: '#010A18',
              900: '#00060F',
            },
            foreground: '#52525B',
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
            secondary: {
              50: '#E5E5E5',
              100: '#CCCCCC',
              200: '#B2B2B2',
              300: '#999999',
              400: '#7F7F7F',
              500: '#666666',
              600: '#4C4C4C',
              700: '#333333',
              800: '#191919',
              900: '#000000',
              DEFAULT: '#666666',
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

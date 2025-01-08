/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)"
      },
      backgroundImage: {
        hero: "radial-gradient(at 76% 100%, hsla(203,80%,61%,1) 0px, transparent 50%),radial-gradient(at 19% 82%, hsla(237,88%,61%,1) 0px, transparent 50%),radial-gradient(at 73% 19%, hsla(346,78%,54%,1) 0px, transparent 50%)"
      },
      colors: {}
    }
  },
  plugins: [require("tailwindcss-animate")]
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary) / <alpha-value>)',
        secondary: 'var(--secondary) / <alpha-value>',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        text: 'hsl(var(--text) / <alpha-value>)'
      }
    }
  },
  plugins: []
}

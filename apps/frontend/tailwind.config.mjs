/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {

        "cod-gray":{
          50: "hsl(var(--cod-gray-50)/ <alpha-value>)",
          100: "hsl(var(--cod-gray-100)/ <alpha-value>)",
          200: "hsl(var(--cod-gray-200)/ <alpha-value>)",
          300: "hsl(var(--cod-gray-300)/ <alpha-value>)",
          400: "hsl(var(--cod-gray-400)/ <alpha-value>)",
          500: "hsl(var(--cod-gray-500)/ <alpha-value>)",
          600: "hsl(var(--cod-gray-600)/ <alpha-value>)",
          700: "hsl(var(--cod-gray-700)/ <alpha-value>)",
          800: "hsl(var(--cod-gray-800)/ <alpha-value>)",
          900: "hsl(var(--cod-gray-900)/ <alpha-value>)",
          950: "hsl(var(--cod-gray-950)/ <alpha-value>)",
        }

        // primary: 'hsl(var(--primary) / <alpha-value>)',
        // secondary: 'var(--secondary) / <alpha-value>',
        // accent: 'hsl(var(--accent) / <alpha-value>)',
        // background: 'hsl(var(--background) / <alpha-value>)',
        // text: 'hsl(var(--text) / <alpha-value>)',
      //   primary: {
      //     100: "var(--primary-100)",
      //     200: "var(--primary-200)",
      //     300: "var(--primary-300)",

      // },
      
      // accent: {
      //     100: "var(--accent-100)",
      //     200: "var(--accent-200)",
      // },
      
      // text: {
      //     100: "var(--text-100)",
      //     200: "var(--text-200)",
      //     300: "var(--text-300)",
      //     400: "var(--text-400)",
      // },
      
      // bg: {
      //     100: "var(--bg-100)",
      //     200: "var(--bg-200)",
      //     300: "var(--bg-300)",
      // }
      //   primary: {
      //     100: "hsl(var(--primary-100) / <alpha-value>)",
      //     200: "hsl(var(--primary-200) / <alpha-value>)",
      //     300: "hsl(var(--primary-300) / <alpha-value>)",
      // },
      
      // accent: {
      //     100: "hsl(var(--accent-100) / <alpha-value>)",
      //     200: "hsl(var(--accent-200) / <alpha-value>)",
      // },
      
      // text: {
      //     100: "hsl(var(--text-100) / <alpha-value>)",
      //     200: "hsl(var(--text-200) / <alpha-quality>)",
      // },
      
      // bg: {
      //     100: "hsl(var(--bg-100) / <alpha-value>)",
      //     200: "hdl(var(--bg-200) / <alpha-value>)",
      //     300: "hsl(var(--bg-300) / <alpha-value>)",
      // }

      }
    }
  },
  plugins: []
}

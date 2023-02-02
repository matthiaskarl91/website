/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
	theme: {
		extend: {
      colors: {
        main1: '#264653',
        main2: '#2a9d8f',
        main3: '#e9c46a',
        main4: '#f4a261',
        main5: '#e76f51',
      }
    },
	},
	plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				delftBlue: '#29335C',
				flame: '#E4572E',
				orangeWeb: '#F3A712',
				olivine: '#A8C686',
				airBlue: '#669BBC',
			},
			fontFamily: {
				sans: ['Fira Mono', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

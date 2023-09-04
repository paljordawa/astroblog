/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		color: {
			orange: '#ef482c',
			indigo: '#2c3e50',
			gunmetal: '#233140'
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

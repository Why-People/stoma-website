module.exports = {
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	content: [],
	theme: {
		extend: {
			screen: {
				xs: { max: '480px' },
				sm: { max: '640px' },
				md: { max: '767px' },
				lg: { max: '1023px' },
				xl: { max: '1279px' },
				'2xl': { max: '1535px' },
				'3xl': { min: '1536px' }
			}
		},
		fontFamily: {
			raleway: ['raleway', 'sans-serif']
		},
		colors: {
			primary: '#e53e3e',
			secondary: '#726e6e',
			hover: '#d8d7d76b',
			link: '#0996ed'
		}
	},
	plugins: []
};

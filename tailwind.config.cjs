const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				black: '#12100C',
				'dark-grey': '#565451',
				'light-grey': '#999795',
				'kumquat-ripe': '#FFAE33',
				'kumquat-harvest': '#FF8A00',
				'kumquat-almost-ripe': '#FFB45B',
				'kumquat-light': '#FFE4BC',
				salmon: '#FFB0AE',
				'salmon-hover': '#ffc0be',
				'divider-grey': '#DADADA',
				'sand-dark': '#ECE7E5',
				'sand-light': '#F3F1F0',
				'off-white': '#F9F9F9',
				white: '#FFFFFF',
				lila: '#A191E2',
				background: '#F5F4F4',
				'black-hover': '#2d2d2d'
			},
			backgroundImage: {
				'gitpod-kumquat-gradient': 'linear-gradient(137.41deg, #FFAD33 14.37%, #FF8A00 91.32%)'
			},
			boxShadow: {
				light: '0 1px 1px rgba(0, 0, 0, 0.1)'
			}
		}
	},

	plugins: []
};

module.exports = config;

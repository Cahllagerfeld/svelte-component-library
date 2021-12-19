const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'brand-ripe': '#ff8a00',
				'brand-almost-ripe': '#ffae33',
				'sand-dark': '#ece7e5',
				'sand-light': '#f5f4f4'
			},
			boxShadow:{
				light: "0 1px 1px rgba(0, 0, 0, 0.1)"
			}
		}
	},

	plugins: []
};

module.exports = config;

const path = require('path');
const preprocess = require('svelte-preprocess');
// const adapter = require('@sveltejs/adapter-netlify');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		package: {
			exports: (file) => file === 'index.ts',
			files: (filepath) => {
				if (filepath.includes('stories') || filepath.startsWith('demo')) return false;
				return true;
			}
		},
		vite: {
			server: {
				hmr: {
					clientPort: process.env.HMR_HOST ? 443 : 3000,
					host: process.env.HMR_HOST
						? process.env.HMR_HOST.substring('https://'.length)
						: 'localhost'
				}
			},
			resolve: {
				alias: {
					cahllagercomponents: path.resolve('src/lib')
				}
			}
		}
	}
};

import path from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		package: {
			exports: (file) => file === 'index.ts',
			files: (filepath) => {
				if (filepath.includes('stories') || filepath.startsWith('demo')) return false;
				return true;
			}
		},
		vite: {
			optimizeDeps: {
				include: ['highlight.js', 'highlight.js/lib/core']
			},
			server: {
				hmr: {
					clientPort: process.env.GITPOD_WORKSPACE_URL ? 443 : 3000,
					host: process.env.GITPOD_WORKSPACE_URL
					  ? process.env.GITPOD_WORKSPACE_URL.replace("https://", "3000-")
					  : "localhost",
				  },
			},
			resolve: {
				alias: {
					cahllagercomponents: path.resolve('src/lib')
				}
			}
		}
	}
};
export default config;

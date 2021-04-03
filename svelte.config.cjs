const sveltePreprocess = require('svelte-preprocess');
// const node = require('@sveltejs/adapter-node');
const netlify = require('@sveltejs/adapter-netlify');
// const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: node(),
		adapter: netlify(),
		// amp: false,
		// appDir: '_app',
		// files: {
		// 	assets: 'static',
		// 	hooks: 'src/hooks',
		// 	lib: 'src/lib',
		// 	routes: 'src/routes',
		// 	serviceWorker: 'src/service-worker',
		// 	template: 'src/app.html'
		// },
		// host: null,
		// hostHeader: null,
		// hydrate: true,
		// paths: {
		// 	assets: '',
		// 	base: ''
		// },
		// prerender: {
		// 	crawl: true,
		// 	enabled: true,
		// 	force: false,
		// 	pages: ['*']
		// },
		// router: true,
		// ssr: true,

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};

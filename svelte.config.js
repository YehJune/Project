import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
		,alias: {
			'@src': 'src',
			'@src/': 'src/',
			'@styles': 'src/styles',
			'@styles/': 'src/styles/'
		}
	}

};

export default config;

// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://github.com/sveltejs/svelte-preprocess
// 	// for more information about preprocessors
// 	preprocess: preprocess(),

// 	kit: {
// 		adapter: adapter()
		
// 	,alias:{
// 		'@src':'src',
// 		'@src/':'src/'
// 	}}
// };

// export default config;

import { svelteTesting } from '@testing-library/svelte/vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

// export default defineConfig({
// 	plugins: [sveltekit(), tailwindcss()],
	


// 	test: {
// 		workspace: [
// 			{
// 				extends: './vite.config.ts',
// 				plugins: [svelteTesting()],

// 				test: {
// 					name: 'client',
// 					environment: 'jsdom',
// 					clearMocks: true,
// 					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
// 					exclude: ['src/lib/server/**'],
// 					setupFiles: ['./vitest-setup-client.ts']
// 				}
// 			},
// 			{
// 				extends: './vite.config.ts',

// 				test: {
// 					name: 'server',
// 					environment: 'node',
// 					include: ['src/**/*.{test,spec}.{js,ts}'],
// 					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
// 				}
// 			}
// 		]
// 	}
// });

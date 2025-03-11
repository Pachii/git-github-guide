// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	base: '/documentation/',
	integrations: [
		starlight({
			title: "",
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Table of Contents',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '1. Introduction', slug: 'guides/introduction' },
						{ label: '2. Setup', slug: 'guides/setup' },
						{ label: '3. Repositories', slug: 'guides/repositories' },
						{ label: '4. Making Local Changes', slug: 'guides/making-local-changes' },
						{ label: '5. Branches', slug: 'guides/branches' },
						{ label: '6. Going Further', slug: 'guides/going-further' },
					],
				},

			],
		}),
	],

	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
});

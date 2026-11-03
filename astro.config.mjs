// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Redirects for URLs from the old site (blog, tags, tools, RSS) live in vercel.json.
export default defineConfig({
	site: 'https://www.joelohr.com',
	// /resume only exists so `npm run pdf` has a page to print; keep it out of the sitemap.
	integrations: [sitemap({ filter: (page) => !page.endsWith('/resume/') })],
});

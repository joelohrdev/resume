// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Redirects for URLs from the old site (blog, tags, tools, RSS) live in vercel.json.
export default defineConfig({
	site: 'https://joelohr.com',
	integrations: [sitemap()],
});

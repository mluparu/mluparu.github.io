// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import siteConfig from './src/data/site-config';

// https://astro.build/config
export default defineConfig({
    site: siteConfig.website,
    integrations: [mdx(), sitemap(), vue()],
    vite: {
        plugins: [tailwindcss()],
        ssr: {
            noExternal: ['visualizer']
        },
        optimizeDeps: {
            include: ['elkjs/lib/elk.bundled.js']
        }
    }
});

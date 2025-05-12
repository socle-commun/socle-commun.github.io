import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";
import withMagic from './with-magic';

// https://vitepress.dev/reference/site-config
export default withMagic(withMermaid(defineConfig({
  srcDir: "./src",
  title: "Socle Commun",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Mono:ital,wght@0,200..800;1,200..800&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Sarina&display=swap', rel: 'stylesheet' }
    ]
  ],
  sitemap: {
    hostname: 'https://socle-commun.github.io'
  },
  locales: {
    root: {
      label: "Français",
      lang: "fr-FR",
      description: "Le Site Web de Socle Commun",
      themeConfig: {
        footer: {
          message: 'Publié sous licence MIT',
          copyright: 'Copyright © 2025 - Socle Commun'
        }
      }
    },
    
  }
})))

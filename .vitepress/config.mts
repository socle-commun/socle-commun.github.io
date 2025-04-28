import { defineConfig } from 'vitepress'

import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
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
        // https://vitepress.dev/reference/default-theme-config#nav
        nav: [
          { text: "Accueil", link: "/" },
          {
            text: "Projets",
            items: [
              {
                text: "Simple Picto",
                link: "/projects/simple-picto"
              },
              {
                text: "Sloth Core",
                link: "/projects/sloth-core"
              },
              {
                text: "Sloth Import",
                link: "/projects/sloth-import"
              },
              {
                text: "Sloth Project Tree",
                link: "/projects/sloth-project-tree"
              }
            ]
          },
          { text: "Conventions", link: "/conventions" }
        ],
        // https://vitepress.dev/reference/default-theme-config#sidebar
        sidebar: [
          {
            text: "Conventions",
            link: "/conventions",
            collapsed: false,
            items: [
              {
                text: "Diagrammes",
                link: "/conventions/diagrams",
              }
            ]
          },
          {
            text: "Projets",
            link: "/projects/",
            collapsed: false,
            items: [
              {
                text: "Simple Picto",
                link: "/projects/simple-picto"
              },
              {
                text: "Sloth Core",
                link: "/projects/sloth-core"
              },
              {
                text: "Sloth Import",
                link: "/projects/sloth-import"
              },
              {
                text: "Sloth Project Tree",
                link: "/projects/sloth-project-tree",
                collapsed: true,
                items: [
                  { text: "📊 Diagrammes", link: "/projects/sloth-project-tree/diagrams" },
                  { text: "📖 Glossaire", link: "/projects/sloth-project-tree/glossary" },
                  { text: "🧠 Modèle sémantique", link: "/projects/sloth-project-tree/semantic-model" },
                  { text: "🎭 Rôles sémantiques", link: "/projects/sloth-project-tree/node-roles" },
                  { text: "🧩 Règles d'inférence", link: "/projects/sloth-project-tree/role-detection-rules" },
                  { text: "🏷️ Tags sémantiques", link: "/projects/sloth-project-tree/semantic-tags" },
                  { text: "🔧 Extensibilité", link: "/projects/sloth-project-tree/extensibility" },
                  { text: "📚 Cas d'usage", link: "/projects/sloth-project-tree/use-cases" },
                  { text: "⚠️ Limites", link: "/projects/sloth-project-tree/limitations" }
                ]
              }
            ]
          },
        ],
        footer: {
          message: 'Publié sous licence MIT',
          copyright: 'Copyright © 2025 - Socle Commun'
        }
      }
    },
    "en-US": {
      label: "English",
      lang: "en-US",
      description: "The Socle Commun's Website",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config#nav
        nav: [
          { text: "Home", link: "/en-US/" },
          {
            text: "Projects",
            items: [
              {
                text: "Simple Picto",
                link: "/en-US/projects/simple-picto"
              },
              {
                text: "Sloth Core",
                link: "/en-US/projects/sloth-core"
              },
              {
                text: "Sloth Import",
                link: "/en-US/projects/sloth-import"
              },
              {
                text: "Sloth Project Tree",
                link: "/en-US/projects/sloth-project-tree"
              }
            ]
          },
          { text: "Conventions", link: "/en-US/conventions" }
        ],
        // https://vitepress.dev/reference/default-theme-config#sidebar
        sidebar: [
          {
            text: "Conventions",
            base: "/en-US/conventions",
            link: "/",
            collapsed: false,
            items: [
              {
                text: "Diagrams",
                link: "/diagrams",
              }
            ]
          },
          {
            text: "Projects",
            base: "/en-US/projects",
            link: "/",
            collapsed: false,
            items: [
              {
                text: "Simple Picto",
                link: "/simple-picto"
              },
              {
                text: "Sloth Core",
                link: "/sloth-core"
              },
              {
                text: "Sloth Import",
                link: "/sloth-import"
              },
              {
                text: "Sloth Project Tree",
                base: "/en-US/projects/sloth-project-tree",
                link: "/",
                collapsed: true,
                items: [
                  { text: "📊 Diagrams", link: "/diagrams" },
                  { text: "📖 Glossary", link: "/glossary" },
                  { text: "🧠 Semantic model", link: "/semantic-model" },
                  { text: "🎭 Semantic roles", link: "/node-roles" },
                  { text: "🧩 Rules of inference", link: "/role-detection-rules" },
                  { text: "🏷️ Semantic tags", link: "/semantic-tags" },
                  { text: "🔧 Extensibility", link: "/extensibility" },
                  { text: "📚 Use cases", link: "/use-cases" },
                  { text: "⚠️ Limitations", link: "/limitations" }
                ]
              }
            ]
          },
        ],
        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2025 - Socle Commun'
        }
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,
    logo: {
      light: "/logo-light.svg",
      dark: "/logo-dark.svg"
    },
    // https://vitepress.dev/reference/default-theme-config#social-links
    socialLinks: [
      { icon: "github", link: "https://github.com/socle-commun" }
    ]
  }
}))

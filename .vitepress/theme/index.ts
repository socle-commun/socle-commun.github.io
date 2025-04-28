// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme-without-fonts'

import { Layout } from './components'

import './style.css'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

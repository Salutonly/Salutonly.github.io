import { defineUserConfig } from 'vuepress'
import { recoTheme } from 'vuepress-theme-reco'

export default defineUserConfig({
  title: "Rachelle's Home",
  description: 'Code & Jazz & Math',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
  ],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/head.png',
    // logo: '/hero_black.png',
    // author: 'rachelle',
    authorAvatar: '/head.png',
    // docsRepo: 'https://github.com/salutonly/salutonly.github.io',
    docsBranch: 'gh-pages-source',
    lastUpdatedText: '',
    navbar: [
      {
        text: 'Contact',
        children: [
          { text: 'GitHub', link: 'https://github.com/salutonly' },
          { text: 'Email', link: 'mailto:salutongraphics@gmail.com'}
        ]
      }
    ],
    autoAddCategoryToNavbar: true
  }),
  lang: 'zh-CN',
})

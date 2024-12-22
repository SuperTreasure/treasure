import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: '神秘的宝藏',
  description: 'Mysterious treasure',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '公告', link: '/notice' },
    ],

    sidebar: {
      '/': [
        {
          text: '指引',
          items: [{ text: '公告', link: '/notice' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },

  cleanUrls: true,
  rewrites: {
    'guide/(.*).md': '(.*).md',
  },
});

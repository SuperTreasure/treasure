// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import { Notification } from '../components';
import { create, NTimeline, NTimelineItem, NNotificationProvider } from 'naive-ui';

const naive = create({
  components: [NTimeline, NTimelineItem, NNotificationProvider],
});

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(naive);
    app.component('Notification', Notification);
  },
} satisfies Theme;

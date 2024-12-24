<script setup lang="ts">
  import type { NotificationType } from 'naive-ui';
  import { useNotification } from 'naive-ui';
  import { onMounted } from 'vue';

  interface Props {
    type: NotificationType;
    title: string;
    content: string;
  }

  const props = defineProps<Props>();

  const notification = useNotification();

  function notify(type: NotificationType) {
    notification[type]({
      content: props.title,
      meta: props.content,
      duration: 5000,
      keepAliveOnHover: true,
    });
  }

  // 在组件挂载时调用 notify
  onMounted(() => {
    notify(props.type);
  });
</script>

<template></template>

<style>
  /* 不透明度 */
  .n-scrollbar-container {
    opacity: 0.8;
  }
  .n-scrollbar-container:hover {
    opacity: 1;
  }

  /* 文字颜色和大小 */
  .n-notification-main {
    --n-text-color: rgba(2, 2, 2, 0.87);
    --n-description-text-color: rgba(2, 2, 2, 0.87);
    --n-meta-font-size: 0.9rem;
  }
  .n-notification-main__content {
    font-size: 1.2rem;
  }

  /* 背景颜色 */
  .warning {
    .n-notification {
      background-color: #fbc02d;
    }
  }
  .success {
    .n-notification {
      background-color: #4caf50;
    }
  }
  .info {
    .n-notification {
      background-color: #2196f3;
    }
  }
  .error {
    .n-notification {
      background-color: #f44336;
    }
  }
</style>

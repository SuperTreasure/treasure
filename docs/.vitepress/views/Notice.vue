<script setup lang="ts">
  import notice from '../public/notice.json';

  const NoticeList = notice.reverse();
</script>

<template>
  <h1>通知公告</h1>
  <br />
  <n-timeline>
    <n-timeline-item v-for="item in NoticeList" :type="item.type" :title="item.title" :content="item.content" :time="item.time" />
  </n-timeline>
</template>

<style>
  .n-timeline-item-content__content {
    --n-content-text-color: var(--vp-c-text-1);
  }

  .n-timeline-item-content__title {
    --n-title-text-color: var(--vp-c-text-1);
  }
</style>

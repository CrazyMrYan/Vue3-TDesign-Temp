<template>
  <aside class="sidebar">
    <div class="logo">
      Diskcloud
      <!-- <img src="@/assets/logo.png" alt="Diskcloud" srcset="" /> -->
    </div>
    <nav class="menu">
      <a href="#" class="menu-item">仪表盘</a>
      <a href="#" class="menu-item">文件</a>
      <a href="#" class="menu-item">图像</a>
      <a href="#" class="menu-item">视频, 音频</a>
      <a href="#" class="menu-item">其他</a>
    </nav>
    <img src="@/assets/illustration.svg" alt="" />
  </aside>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'LayoutSidebar'
})
</script>

<style scoped>
.sidebar {
  width: var(--td-size-21);
  background-color: var(--td-bg-color-container);
  padding: var(--td-size-7);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  height: var(--td-size-18);
  font-size: var(--td-size-10);
  color: var(--td-brand-color-active);
}

.logo img {
  width: var(--td-size-15);
}

.menu {
  width: 100%;
  flex: 1;
}

.menu-item {
  display: block;
  width: 100%;
  padding: var(--td-size-6) var(--td-size-7);
  margin-bottom: var(--td-size-5);
  text-decoration: none;
  color: #333;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s;
}

.menu-item:hover {
  background-color: #e0e0e0;
}
</style>

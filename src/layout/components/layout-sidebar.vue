<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" srcset="" />
    </div>
    <nav class="menu">
      <a href="#" class="menu-item">仪表盘</a>
      <a href="#" class="menu-item">文件</a>
      <a href="#" class="menu-item">图像</a>
      <a href="#" class="menu-item">视频, 音频</a>
      <a href="#" class="menu-item">其他</a>
    </nav>
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
  width: 250px;
  background-color: var(--td-bg-color-container);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo img {
  width: var(--td-size-15);
}

.menu {
  width: 100%;
}

.menu-item {
  display: block;
  width: 100%;
  padding: 15px 20px;
  margin-bottom: 10px;
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

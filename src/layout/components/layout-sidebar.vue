<template>
  <aside class="sidebar">
    <div class="logo">Diskcloud</div>
    <nav class="menu">
      <router-link
        v-for="menuItem in baseMenuRoutes"
        :to="{ name: menuItem.name }"
        :class="['menu-item', activeRoute(menuItem)]"
        :key="menuItem.name"
      >
        <span>{{ menuItem.meta.fullName }}</span>
      </router-link>
    </nav>
    <img src="@/assets/illustration.svg" alt="" />
  </aside>
</template>

<script setup>
import { defineOptions } from 'vue'
import { baseMenuRoutes } from '@/router/routes'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'LayoutSidebar'
})

const router = useRouter()

const activeRoute = (menu) => {
  return router.currentRoute.value.name === menu.name ? 'router-active' : ''
}
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
  /* transition: background-color 0.3s; */
  cursor: pointer;
}

.router-active {
  background-color: var(--td-brand-color-active);
  color: var(--td-font-white-1);
}
</style>

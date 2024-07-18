<template>
  <header class="header">
    <t-input size="large" borderless clearable />
    <t-button size="large" shape="round" variant="base">
      <template v-slot:icon> <UploadIcon /> </template>上传文件
    </t-button>
    <!-- <div class="user-profile">
      <img src="@/assets/logo.svg" alt="Koto" />
    </div> -->
  </header>
</template>

<script setup>
import { defineOptions } from 'vue'
import { UploadIcon } from 'tdesign-icons-vue-next'

defineOptions({
  name: 'LayoutHeader'
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--td-size-8);
  height: var(--td-size-19);
  background-color: var(--td-bg-color-container);
}

.user-profile img {
  width: var(--td-size-12);
  height: var(--td-size-12);
  border-radius: 50%;
}

.t-input__wrap {
  width: var(--td-size-20);
}
</style>

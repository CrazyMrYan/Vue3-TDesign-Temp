<template>
  <header class="header">
    <t-input size="large" placeholder="请输入关键字搜索" borderless clearable />
    <div class="action--container">
      <t-upload ref="uploadRef" v-model="files" :request-method="requestMethod">
        <t-button size="large" class="upload-file--button" shape="round" variant="base">
          <template v-slot:icon> <UploadIcon /> </template>
          上传文件
        </t-button>
      </t-upload>
      <div class="user-profile">
        <t-avatar size="large" image="https://tdesign.gtimg.com/site/avatar.jpg" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineOptions, ref } from 'vue'
import { UploadIcon } from 'tdesign-icons-vue-next'
import { uploadFiles } from '@/apis/files.js'

defineOptions({
  name: 'LayoutHeader'
})

const files = ref([])

const requestMethod = ({ raw }) => {
  console.log(raw)
  const formData = new FormData()
  formData.append('file', raw)
  uploadFiles({ type: 'md', isThumb: 'true' }, formData)
}
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
  width: var(--td-size-21);
}

.upload-file--button {
  box-shadow: var(--td-shadow-2);
  font-size: var(--td-font-size-link-medium);
}

.action--container {
  display: flex;
}
.user-profile {
  margin-left: var(--td-size-8);
  border-radius: var(--td-radius-circle);
}
</style>

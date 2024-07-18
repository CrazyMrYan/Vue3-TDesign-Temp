<template>
  <div class="data-cards">
    <div class="data-card" v-for="card in cards" :key="card.title">
      <h3>{{ card.title }}</h3>
      <p>{{ card.size }}</p>
      <p>{{ card.update }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'LayoutDataCard'
})

const cards = [
  { title: '文件', size: '11 GB', update: '上次更新 2023.11.17 11:11' },
  { title: '图像', size: '21 GB', update: '上次更新 2023.11.17 11:11' },
  { title: '视频, 音频', size: '21 GB', update: '上次更新 2023.11.17 11:11' },
  { title: '其他', size: '21 GB', update: '上次更新 2023.11.17 11:11' }
]
</script>

<style scoped>
.data-cards {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.data-card {
  width: 22%;
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
</style>

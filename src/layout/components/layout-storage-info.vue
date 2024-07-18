<template>
  <div class="storage-info">
    <div class="storage-used">
      <div class="circle-chart">65%</div>
      <p>可用存储空间 65GB / 100GB</p>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'LayoutStorageInfo'
})
</script>

<style scoped>
.storage-info {
  margin-top: 20px;
  text-align: center;
}

.storage-used {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-chart {
  width: 100px;
  height: 100px;
  background-color: #4a90e2;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  margin-right: 20px;
}
</style>

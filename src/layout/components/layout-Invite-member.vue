<template>
  <div class="invite">
    <h3>邀请成员</h3>
    <div class="invite-code">
      <p>ABSHKHK51232131</p>
      <button @click="copyCode">复制</button>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'LayoutInviteMember'
})

const copyCode = () => {
  navigator.clipboard.writeText('ABSHKHK51232131')
  alert('复制成功')
}
</script>

<style scoped>
.invite {
  margin-top: 20px;
}

.invite-code {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed #ccc;
  padding: 10px;
  border-radius: 5px;
}

.invite-code button {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>

<template>
  <div class="contacts">
    <h3>联系人</h3>
    <ul>
      <li v-for="contact in contacts" :key="contact.name">
        {{ contact.name }} ({{ contact.email }})
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineOptions } from 'vue'

defineOptions({
  name: 'LayoutContacts'
})

const contacts = [
  { name: '张宇航', email: 'johndoe1234@gmail.com' },
  { name: '李心怡', email: 'emily.smith567@yahoo.com' },
  { name: '王明明', email: 'alex.wang@hotmail.com' },
  { name: '赵佳琪', email: 'sarah.jones789@outlook.com' },
  { name: '刘晨辰', email: 'mikebrown12@gmail.com' },
  { name: '郑雅婷', email: 'ohnson456@yahoo.com' }
]
</script>

<style scoped>
.contacts {
  margin-top: 20px;
}

.contacts ul {
  list-style-type: none;
  padding: 0;
}

.contacts li {
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
}
</style>

<template>
  <t-button v-if="props.method === 'account'" @click="handleLoginMethodChange('email')" variant="text"
    theme="primary">使用邮箱登录</t-button>
  <t-button v-else @click="handleLoginMethodChange('account')" variant="text" theme="primary">使用账号密码登录</t-button>
</template>

<script setup>
import { defineEmits, defineOptions, defineProps } from 'vue';

defineOptions({
  name: 'ChangeLoginMethod',
});

const props = defineProps({
  method: {
    type: String,
    default: 'email',
  }
})

const emit = defineEmits(['login-method']);

const handleLoginMethodChange = (method) => {
  emit('login-method', method)
}
</script>


<style scoped>
.t-button {
  padding-left: 0;
  margin-top: var(--td-size-8);
}
</style>
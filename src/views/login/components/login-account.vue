<template>
  <t-form ref="form" :data="formData" colon :label-width="0" @reset="onReset" @submit="onSubmit">
    <t-form-item>
      <h2 class="login-page--title">登录</h2>
    </t-form-item>
    <t-form-item name="username">
      <t-input size="large" v-model="formData.username" clearable placeholder="请输入账户名">
        <template #prefix-icon>
          <user-1-icon />
        </template>
      </t-input>
    </t-form-item>

    <t-form-item name="password">
      <t-input
        size="large"
        v-model="formData.password"
        type="password"
        clearable
        placeholder="请输入密码"
      >
        <template #prefix-icon>
          <lock-on-icon />
        </template>
      </t-input>
    </t-form-item>

    <t-form-item>
      <t-button theme="primary" size="large" shape="round" type="submit" block>登录</t-button>
    </t-form-item>
  </t-form>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'
import { MessagePlugin } from 'tdesign-vue-next'
import { User1Icon, LockOnIcon } from 'tdesign-icons-vue-next'

const emit = defineEmits(['on-submit'])

const formData = reactive({
  username: '',
  password: ''
})

const onReset = () => {
  MessagePlugin.success('重置成功')
}

const onSubmit = ({ validateResult }) => {
  if (validateResult === true) {
    emit('on-submit', formData)
  }
}
</script>

<style scoped>
.login-page--title {
  font-size: var(--td-font-size-headline-large);
}
</style>

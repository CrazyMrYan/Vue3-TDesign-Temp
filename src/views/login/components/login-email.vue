<template>
  <t-form ref="form" :data="formData" colon :label-width="0">
    <t-form-item>
      <h2 class="login-page--title">登录</h2>
    </t-form-item>
    <t-form-item name="email">
      <t-input size="large" v-model="formData.email" clearable placeholder="请输入邮箱">
        <template #prefix-icon>
          <MailIcon />
        </template>
      </t-input>
    </t-form-item>

    <t-form-item name="code">
      <t-input-group separate>
        <t-input maxlength="6" size="large" placeholder="请输入验证码" v-model="formData.code" />
        <t-button size="large" variant="outline">发送验证码</t-button>
      </t-input-group>
    </t-form-item>

    <t-form-item>
      <t-button @click="onSubmit" theme="primary" size="large" shape="round" block>登录</t-button>
    </t-form-item>
  </t-form>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'
import { MailIcon } from 'tdesign-icons-vue-next'

const emit = defineEmits(['on-submit'])

const formData = reactive({
  email: '',
  code: ''
})

const onSubmit = () => {
  emit('on-submit', formData)
}
</script>

<style scoped>
.login-page--title {
  font-size: var(--td-font-size-headline-large);
}
.t-input-group .t-button:not(:first-child),
.t-input-group .t-select:not(:first-child) {
  margin-left: var(--td-size-5);
}
.t-input-group {
  flex: 1;
}
</style>

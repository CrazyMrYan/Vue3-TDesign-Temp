<template>
  <div class="login-wrapper">
    <div class="login-banner--wrapper"></div>
    <div class="login-form--wrapper">
      <div class="login-form-content">
        <LoginAccount v-if="loginMethod === 'account'" @on-submit="handleSubmit" />
        <LoginEmail v-else @on-submit="handleSubmit" />
        <LoginMethodChange :method="loginMethod" @login-method="handleLoginMethodChange" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineOptions } from 'vue'
import LoginAccount from './components/login-account.vue'
import LoginEmail from './components/login-email.vue'
import LoginMethodChange from './components/login-method-change.vue'
import { createSessions } from '@/apis/users'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'LoginPage'
})

const loginMethod = ref('account')

const router = useRouter()

const handleLoginMethodChange = (method) => {
  loginMethod.value = method
}

const handleSubmit = async (data) => {
  const { token } = await createSessions(data)
  localStorage.setItem('token', token)
  router.push({ name: 'home' })
}
</script>

<style scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  background-color: var(--td-bg-color-container);
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-banner--wrapper {
  min-width: 500px;
  height: 100%;
  background-color: var(--td-brand-color);
}

.login-form--wrapper {
  flex: 1;
}

.login-form-content {
  width: 40%;
  min-width: 400px;
  margin: 0 auto;
}
</style>

import axios from 'axios'
import { MessagePlugin } from 'tdesign-vue-next'

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api/', // 设置你的 API 基础 URL
  timeout: 5000 // 请求超时时间
})

// 状态码到错误信息的映射
const statusCodeMessageMap = {
  400: '请求错误',
  401: '未授权，请登录',
  403: '拒绝访问',
  404: '请求地址出错',
  500: '服务器内部错误'
}

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    MessagePlugin.error('请求错误')
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 成功的状态码处理
    if ([200, 201, 204].includes(response.status)) {
      return response.data
    }
  },
  (error) => {
    if (error.response) {
      const errorMessage =
        statusCodeMessageMap[error.response.status] || `连接错误 ${error.response.status}`
      MessagePlugin.error(errorMessage)

      if (error.response.status === 401) {
        // 重定向到登录页
        window.location.href = '/login'
      }
    } else {
      MessagePlugin.error('连接到服务器失败')
    }
    return Promise.reject(error)
  }
)

export default service

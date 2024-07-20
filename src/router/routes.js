export const baseMenuRoutes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      fullName: '仪表板'
    },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/files',
    name: 'files',
    meta: {
      fullName: '文件'
    },
    component: () => import('@/views/files/index.vue')
  }
]

export const layoutRoutes = [
  {
    name: 'layout',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: baseMenuRoutes
  }
]

export const baseRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]

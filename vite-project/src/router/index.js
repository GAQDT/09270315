import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue' // 导入新的欢迎组件
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome', // 将根路径指向欢迎页面
    component: Welcome
  },
  {
    path: '/home', // Home 页面的路径
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 移除路由守卫，因为不再需要登录认证

// 移除 loginSuccess 和 logout 函数

export default router
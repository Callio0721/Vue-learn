import { createRouter, createWebHistory } from 'vue-router'
// 导入需要跳转的组件
import TestLearn from '@/components/TestLearn.vue' // 假设 TestLearn 在 components 目录下

// 定义路由规则
const routes = [
  {
    path: '/test-learn',
    name: 'TestLearn',
    component: TestLearn, // 跳转后渲染的目标组件
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

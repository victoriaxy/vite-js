/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 18:45:50
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 18:59:23
 * @FilePath: \epidvue\vite-js\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
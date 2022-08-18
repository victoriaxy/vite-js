/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 18:27:13
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 18:53:57
 * @FilePath: \epidvue\vite-js\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia"

createApp(App).use(router).use(createPinia()).mount('#app')

/*
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 18:54:17
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 19:02:12
 * @FilePath: \epidvue\vite-js\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'mian',
  state: () =>({
    name: '超级管理员'
  }),
  // getters
  getters: {
    nameLength: (state) => state.name.length,
  }
});
<!--
 * @Author: victoriaXY 617989449@qq.com
 * @Date: 2022-08-17 18:55:33
 * @LastEditors: victoriaXY 617989449@qq.com
 * @LastEditTime: 2022-08-17 21:16:14
 * @FilePath: \epidvue\vite-js\src\views\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>测试</div>
    <div>{{ mainsStore.name }}</div>
    <div>{{ mainsStore.nameLength }}</div>
    <button @click="updateName">修改名称</button>
    <button @click="login">登录</button>
    <div v-for="(item,key) in userInfos" :key="key">
      <label v-for="(attr,index,value) in item" :key="index">{{ `${attr}--${index}--${value}`}}</label>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "@/store/index";
import { onMounted, ref } from "vue";
import defHttp from "@/service/http/http";

const mainsStore = useMainStore();
const userInfos = ref([]);
// // 组件中使用全局配置环境变量 .env.development
// // console.log(import.meta.env.VITE_APP_WEB_URL)
const login = () => {
  defHttp.get("/getUsers").then((res) => {
    console.log(res);
    userInfos.value =  res.data;
  })
};
const updateName = () => {
  mainsStore.$patch({
    name: "名称被修改了， nameLength也会发生改变",
  });
};

</script>

<style lang="less"></style>

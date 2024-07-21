<template>
  <button @click="logout">退出登录</button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'; // 引入路由

const router = useRouter(); // 创建路由实例


// 跳转到创建队伍页

 const logout = () => {
 router.push({
 path: "/team/add"
 })}
</script>

<style scoped>
button {
  /* 按钮样式 */
}
</style>
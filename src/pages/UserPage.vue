<template>
  <van-cell title="头像" is-link>
    <img :src="user.avatar" alt="" style="height: 46px">
  </van-cell>
  <van-cell title="昵称" is-link :value="user.userName" @click="toEdit('userName', user.userName, '昵称')"/>
  <van-cell title="账号" :value="user.userAccount"/>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender', user.gender, '性别')"/>
  <van-cell title="电话" is-link :value="user.phone" @click="toEdit('phone', user.phone, '电话')"/>
  <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email', user.email, '邮箱')"/>
  <van-cell title="星球编号" :value="user.planetCode"/>
  <van-cell title="注册时间" :value="user.gmtCreate"/>
</template>

<script setup lang="ts">

import {ref} from "vue";
import {useRouter} from "vue-router";

const user = ref({
  id: 1,
  userName: 'tt110617',
  userAccount: 'hzz',
  gender: '男',
  phone: '12345',
  email: '1253728@qq.com',
  planetCode: '123',
  avatar: 'https://img2.baidu.com/it/u=1790834130,1952230725&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  gmtCreate: new Date().toDateString()
})

const router = useRouter();
const toEdit = (editKey: string, currentValue: string, editName: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      currentValue,
      editName
    }
  })
}

</script>

<style scoped>

</style>
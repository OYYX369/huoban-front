<template>
  <template v-if="user">
    <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.userName)"/>
    <van-cell title="账户" :value="user.userAccount" />
    <van-cell title="头像" is-link to="/user/edit" >
      <img style="height: 48px" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender','性别',user.gender)" />
    <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)"/>
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="注册时间" :value="user.createTime"  />
  </template>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {Toast} from "vant";
import {getCurrentUser} from '../services/user.ts';

// const user = {
//   userName: '鱼皮',
//   userAccount: 'yupi',
//   avatarUrl: 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaELkfM4IsxxWrB70flGuaDcq55mDxh8r4DuwOJLuluSmRCH9Pk1MFibry5icVgHtfwMmnYGqT49svVKV3X1wMer2OCC3ob5leZX5lF8HMbPo1Qww/132',
//   gender: '男',
//   phone: '15959595959',
//   email: '123456@qq.com',
//   planetCode: '1234',
//   createTime: new Date(),
// }

const user =ref();
const router = useRouter();

onMounted(async () =>{
  //获取用户信息
  const res = await getCurrentUser();
  if (res){
    user.value = res;
    Toast.success('获取用户信息成功');
  } else {
    Toast.fail('获取用户信息失败')
  }
})

const toEdit = (editKey: string,editName: string,currentValue: string) =>{
  router.push({
    path:'/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

</script>

<style scoped>

</style>
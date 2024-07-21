<template>
  <template v-if="user">
    <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username','昵称',user.userName)"/>
    <van-cell title="账户" :value="user.userAccount" />
    <van-cell title="头像" is-link to="/user/edit" >
      <img style="height: 48px" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />



    <button @click="logout">退出登录</button>
  </template>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {Toast} from "vant";
import {getCurrentUser} from '../services/user.ts';



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


//跳转到登录界面
const logout = () => {
  router.push({
    path: "/user/login"
  })
}
</script>

<style scoped>

</style>
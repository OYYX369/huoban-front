<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入${editUser.editName}`"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()

const editUser = ref({
  editKey: router.query.editKey,
  currentValue: router.query.currentValue,
  editName: router.query.editName
})

const onSubmit = (values) => {
  // todo 将 editKey,currentValue,editName 提交给后台
  console.log(values)
};

</script>

<style scoped>

</style>
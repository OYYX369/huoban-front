<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider>已选标签</van-divider>
  <div v-if="activeIds.length === 0">请选择标签</div>
  <van-row gutter="16" style="padding: 0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="medium" type="primary" @close="close(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider>全部标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

  <div style="padding: 16px">
    <van-button block type="primary" @click="doSearchResult">根据标签--搜索</van-button>
  </div>

</template>
<script setup>
import {useRouter} from 'vue-router';
import {ref} from 'vue';

const router = useRouter();

const doSearchResult = () => {
  router.push({
    path: '/user/list',
    query: {
      tags: activeIds.value
    }
  })
}

const searchText = ref('');
const originTagList = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '年级',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大3', id: '大3'},
      {text: '大4', id: '大4'},
      {text: '大5', id: '大5aaaaaa'},
      {text: '大6', id: '大6aaaaaa'},
    ],
  },
];
let tagList = ref(originTagList)
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildrenTag = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildrenTag.filter(item => item.text.includes(searchText.value)
    )
    return tempParentTag;
  })
};
const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList
};


const activeIds = ref([]);
const activeIndex = ref(0);
const close = (tag) => {
  activeIds.value = activeIds.value.filter(id => id !== tag)
}

</script>

<style scoped>

</style>
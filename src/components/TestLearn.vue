<!-- src/views/TestLearn.vue -->
<template>
  <!-- 完全独立的页面内容，无嵌套 -->
  <div class="test-learn-page">
    <h1>这是 TestLearn 独立页面</h1>
    <p>所有内容都渲染在这个新页面上</p>
    <button @click="goBack">返回首页</button>
    <hr />
    姓：<input type="text" v-model="FirstName" /> <br />
    名：<input type="text" v-model="LastName" /> <br />
    全名：{{ FullName }}
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref, reactive, computed } from 'vue'
const router = useRouter()

const FirstName = ref()
const LastName = ref()

const FullName = computed(() => {
  console.log('现在执行了一次computed函数')
  return FirstName.value + LastName.value
})
// 返回首页
const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.test-learn-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
}
</style>

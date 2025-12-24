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
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum = sum + 1">点我sum+1</button>
    <h2>监视ref定义的对象类型数据</h2>
    姓名：{{ person.name }} <button @click="changeName">修改姓名</button> 年龄：{{ person.age }}
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref, reactive, computed, watch } from 'vue'
const router = useRouter()

const FirstName = ref('')
const LastName = ref('')
const sum = ref(0)
const person = ref({
  name: '张三',
  age: 18,
})
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}
watch(
  person,
  (newValue, oldValue) => {
    console.log('Person变化了', newValue, oldValue)
  },
  { deep: true },
)
// 监视
const x = watch(sum, (newValue, oldValue) => {
  console.log('sum变化了', newValue, oldValue)
  if (newValue >= 10) {
    // 下面停止监视
    x()
    console.log(x)
    console.log('停止监视')
  }
})
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

<template>
  <!-- 模板中直接使用 setup 里定义的响应式数据和方法 -->
  <div class="demo">
    <h3>计数：{{ count }}</h3>
    <h3>用户名：{{ userInfo.name }}</h3>
    <button @click="addCount">点击计数+1</button>
    <button @click="changeName('李四')">修改用户名</button>
    <hr>
  </div>
</template>

<script setup lang="ts">
// 1. 导入 Vue3 响应式 API（替代 data 的核心）
import { ref, reactive } from 'vue'

// --------------- 替代 Vue2 的 data() ---------------
// 方式1：ref 定义基本类型响应式数据（数字/字符串/布尔等）
// 对应 Vue2：data() { return { count: 0 } }
// const 保证的是「变量引用不可变」（不能写 count = 10），
// 但 count 内部的值（响应式数据）可以修改（count.value = 10 是合法的）
const count = ref(0)

// 方式2：reactive 定义复杂类型响应式数据（对象/数组）
// 对应 Vue2：data() { return { userInfo: { name: '张三' } } }
const userInfo = reactive({
  name: '张三'
})

// --------------- 替代 Vue2 的 methods ---------------
// 定义方法（直接写普通函数/箭头函数，替代 Vue2 的 methods: {}）
// 对应 Vue2：methods: { addCount() { this.count++ } }
const addCount = () => {
  // ref 定义的变量，修改时需要 .value
  count.value += 1
}

// 带参数的方法
// 对应 Vue2：methods: { changeName(newName) { this.userInfo.name = newName } }
const changeName = (newName: string) => {
  // reactive 定义的对象，直接修改属性即可（无需 .value）
  userInfo.name = newName
}
</script>

<style scoped>
.demo {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}
button {
  margin: 0 10px;
  padding: 6px 12px;
  cursor: pointer;
}
</style>
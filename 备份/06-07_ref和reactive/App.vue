<template>
  <!-- 模板中直接使用 setup 里定义的响应式数据和方法 -->
  <div class="demo">
    <h3>计数：{{ count }}</h3>
    <h3>用户名：{{ userInfo.name }}</h3>
    <button @click="addCount">点击计数+1</button>
    <button @click="changeName('李四')">修改用户名</button>
    <hr>
    <h3>一辆{{ car.brand }},价格为{{ car.price }}万元</h3>
    <button @click="changePrice">修改汽车价格</button>
  </div>
</template>

<!-- vite-plugin-vue-setup-extend 是「Vue 组件编译阶段」的插件，只处理组件内部的 name 注入
这个插件只做了「帮你自动设置组件 name 选项」这一件事，对 main.ts 里的 import、组件挂载、插件注册等逻辑，没有任何影响
组件的 name 选项是 Vue 给组件定义的「标识名称」
name 最基础的作用：在 Vue 开发者工具（Vue Devtools 浏览器调试面板）中，组件树会显示 name 作为组件的「显示名称」，而非默认的 <Anonymous>（匿名组件）或文件路径，能快速定位组件。 
递归组件: 在组件内部调用自身时, 此时必须通过 name 引用自身 —— 因为 <script setup> 是闭包语法，无法直接通过变量名引用组件，只能靠 name 识别。
-->
<script setup lang="ts">
  // 1. 导入 Vue3 响应式 API（替代 data 的核心）
  import { ref, reactive } from 'vue'

  let car = reactive({
    brand: 'BYD',
    price: 100
  })

  function changePrice(){
    car.price += 10
  }



  // --------------- 替代 Vue2 的 data() ---------------
  // 方式1：ref 定义基本类型响应式数据（数字/字符串/布尔等）
  // 对应 Vue2：data() { return { count: 0 } }
  // const 保证的是「变量引用不可变」（不能写 count = 10），
  // 但 count 内部的值（响应式数据）可以修改（count.value = 10 是合法的）
  const count = ref(1)
  console.log(count)
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
# Vue学习文档
## 一、初识Vue
Vue 组合式API的优势：可以用函数的方式，更优雅的组合代码，让相关功能的功能更加有序的组织在一起

JS 中需要 export（暴露）本质是为了解决模块化开发的核心问题：
在前端工程化（多文件 / 多模块）场景下，实现「代码隔离」和「代码复用」，让不同文件之间能安全、可控地共享变量、函数、组件等内容  

组件是可复用、独立的代码单元，它将视图结构（HTML）、业务逻辑（JS/TS）、样式（CSS）封装在一起，用于实现页面上的某一块功能区域

### 1、Vue项目的一个简单启动流程  
index.html 是整个项目的入口文件，内容没有直接写在 HTML 中，而是由后续脚本（main.ts）动态生成；项目启动时，浏览器首先加载 index.html，解析到其中的挂载点（如 `<div id="app"></div>`）后，执行引入的 main.ts 脚本；main.ts 作为 Vue 项目的「逻辑入口」，会创建 Vue 应用实例（createApp），挂载根组件（如 App.vue）到 index.html 的挂载点上；根组件 App.vue 会整合其他子组件（如 HelloWorld.vue）、路由（Router）、状态管理（Pinia/Vuex）等核心逻辑，最终将渲染后的 DOM 注入到挂载点，完成页面渲染，整个流程实现「从静态 HTML 到动态 Vue 应用」的启动。

### 2、setup

setup 是 Vue3 为组合式 API（Composition API） 设计的核心函数，也是替代 Vue2 选项式 API（data/methods/computed 等）的核心载体。它的本质是「组件逻辑的统一入口」，用于集中管理组件的响应式数据、方法、生命周期、依赖注入等所有核心逻辑，让代码组织更灵活、复用性更高。

| 特性         | 说明                                                                 |
|--------------|----------------------------------------------------------------------|
| 执行时机     | 组件创建阶段（`beforeCreate` 钩子之前）执行，此时组件实例尚未完全创建，`this` 为 `undefined` |
| 核心作用     | 声明组件的响应式数据、方法、生命周期钩子等，替代 Vue2 分散的选项式 API               |
| 返回值类型   | 1. 返回对象：对象中的属性/方法可直接在模板中使用；2. 返回函数：作为组件的渲染函数（替代 `<template>`） |
| 入参         | 接收两个固定参数：`props`（父组件传递的属性）、`context`（组件上下文对象）|

#### setup的返回值
**1.返回一个对象**  
作用：对象中的属性 / 方法会被挂载到组件实例（this）上，同时暴露给模板（模板可直接使用这些属性 / 方法），也是与选项式 API 互通的核心方式。
```ts
<template>
  <!-- 直接使用 setup 返回的属性/方法 -->
  <div>{{ count }}</div>
  <button @click="increment">+1</button>
</template>

<script>
export default {
  setup() {
    const count = 0;
    const increment = () => {
      console.log("计数+1");
    };
    // 返回对象，暴露给模板和 this
    return { count, increment };
  },
  mounted() {
    // 选项式 API 中通过 this 访问
    console.log(this.count); // 0
    this.increment(); // 执行方法
  }
};
</script>
```

**2.返回一个渲染函数**  
作用：直接替代模板（`<template> `部分），通过编程方式生成组件 DOM 结构，优先级高于模板。
```ts
<script>
import { h } from 'vue'; // 引入渲染函数 h
export default {
  setup() {
    const text = "通过渲染函数生成内容";
    // 返回渲染函数，替代模板
    return () => h('div', { style: 'color: red' }, text);
  }
};
</script>
```

#### 组件同时使用 setup 和选项式 API 时的初始化完整时序
1. 组件实例开始初始化，执行 `setup` 函数（入参：`props`、`context`）；
2. `setup` 执行完毕，返回对象（或函数）；
3. Vue 内部将 `setup` 返回对象的所有属性/方法挂载到组件实例（`this`）上；
4. 初始化选项式 API 的配置（如 `data`、`methods`、`computed`），并合并到 `this`（若命名冲突，`setup` 返回值优先级更高）；
5. 执行选项式 API 的 `created` 钩子（此时 `this` 已能访问 `setup` 返回值）；
6. 组件挂载阶段，执行 `onMounted`（Composition API）和选项式 `mounted`（此时 `this` 完全可用）。

#### `<script setup>`

`<script setup>`是 Vue3 专为组合式 API 设计的语法糖，也就是是 setup 函数的「语法糖」。底层仍基于 setup 函数实现，但省略了繁琐的返回值和选项声明。  
核心特性之一就是自动完成组件的默认导出 和 组件的默认注册所以不需要再去写export。 默认组件名称就是该文件的名称

在这里就是把 App 作了默认暴露，同时把 HelloWorld 做了默认注册
```ts
// 文件名：App.vue
<script setup lang="ts">
// 1. 无需写 setup 函数，代码直接在 setup 作用域中执行
// 2. 无需返回值，定义的变量/方法自动暴露给模板
// 3. 自动注册导入的组件，无需手动声明

import { ref } from 'vue'
import HelloWorld from './HelloWorld.vue'

// 响应式数据（替代 data）
const count = ref(0)

// 方法（替代 methods）
const addCount = () => {
  count.value += 1
}

// 声明 props（语法糖：defineProps）
const props = defineProps({
  msg: String
})

// 声明自定义事件（语法糖：defineEmits）
const emit = defineEmits(['change'])
const triggerChange = () => {
  emit('change', count.value)
}
</script>

<template>
  <div>{{ count }} - {{ props.msg }}</div>
  <button @click="addCount">加1</button>
  <button @click="triggerChange">触发事件</button>
  <HelloWorld /> <!-- 自动注册的子组件 -->
</template>
```
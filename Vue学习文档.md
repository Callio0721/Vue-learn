# Vue学习文档

## 一、初识Vue

Vue 组合式API的优势：可以用函数的方式，更优雅的组合代码，让相关功能的功能更加有序的组织在一起

JS 中需要 export（暴露）本质是为了解决模块化开发的核心问题：
在前端工程化（多文件 / 多模块）场景下，实现「代码隔离」和「代码复用」，让不同文件之间能安全、可控地共享变量、函数、组件等内容

组件是可复用、独立的代码单元，它将视图结构（HTML）、业务逻辑（JS/TS）、样式（CSS）封装在一起，用于实现页面上的某一块功能区域

### 1、Vue项目的一个简单启动流程

index.html 是整个项目的入口文件，内容没有直接写在 HTML 中，而是由后续脚本（main.ts）动态生成；项目启动时，浏览器首先加载 index.html，解析到其中的挂载点（如 `<div id="app"></div>`）后，执行引入的 main.ts 脚本；main.ts 作为 Vue 项目的「逻辑入口」，会创建 Vue 应用实例（createApp），挂载根组件（如 App.vue）到 index.html 的挂载点上；根组件 App.vue 会整合其他子组件（如 HelloWorld.vue）、路由（Router）、状态管理（Pinia/Vuex）等核心逻辑，最终将渲染后的 DOM 注入到挂载点，完成页面渲染，整个流程实现「从静态 HTML 到动态 Vue 应用」的启动。

### 2、setup

setup 是 Vue3 为组合式 API（Composition API） 设计的核心函数，也是替代 Vue2 选项式 API（data/methods/computed 等）的核心载体。它的本质是「组件逻辑的统一入口（也就是说组件的所有核心逻辑（数据、方法、生命周期、依赖、事件等）都收敛到这一个入口中编写和管理）」，用于集中管理组件的响应式数据、方法、生命周期、依赖注入等所有核心逻辑，让代码组织更灵活、复用性更高。

| 特性       | 说明                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| 执行时机   | 组件创建阶段（`beforeCreate` 钩子之前）执行，此时组件实例尚未完全创建，`this` 为 `undefined`           |
| 核心作用   | 声明组件的响应式数据、方法、生命周期钩子等，替代 Vue2 分散的选项式 API                                 |
| 返回值类型 | 1. 返回对象：对象中的属性/方法可直接在模板中使用；2. 返回函数：作为组件的渲染函数（替代 `<template>`） |
| 入参       | 接收两个固定参数：`props`（父组件传递的属性）、`context`（组件上下文对象）                             |

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

#### `<script setup>` setup语法糖

`<script setup>`是 Vue3 专为组合式 API 设计的语法糖，也就是是 setup 函数的「语法糖」。底层仍基于 setup 函数实现，但省略了繁琐的返回值和选项声明。

**1、对「模板」：自动暴露（无需手动 return）**  
`<script setup>` 中顶层声明的变量、函数、import 引入的组件 / 方法，会自动暴露给当前组件的模板（template）使用，替代了传统 setup() 手动 return 的操作。  
自动暴露的范围（模板可直接用）  
(1)顶层 const/let/var 声明的变量（如 count、userInfo）；  
(2)顶层定义的函数（如 increment、loadData）；  
(3)import 引入的组件、函数、常量（如 import Button from './Button.vue'，模板可直接写 `<Button />`）；  
(4)组合式 API 创建的响应式数据（ref/reactive/computed 等）。

`<script setup>` 中的内容不会自动暴露给其他文件 / 组件，如果要让外部模块（比如另一个组件、工具文件）使用当前文件的变量 / 函数，必须手动加 export 声明。

```js
<template>
  <!-- 模板可直接用：无需任何 export/return -->
  <div>{{ count }}</div>
  <button @click="increment">+1</button>
  <Button />
</template>

<script setup>
import { ref } from 'vue';
import Button from './Button.vue'; // 引入的组件自动暴露给模板

// 顶层变量：自动暴露给模板
const count = ref(0);

// 顶层函数：自动暴露给模板
const increment = () => {
  count.value++;
};

// 非顶层（函数内部）：不会暴露给模板
function innerFn() {
  const innerCount = 10; // 模板无法访问 innerCount
}

// 要给外部用：必须显式 export
export const increment = () => {
  count.value++;
};

// 导出响应式数据给外部
export const getCount = () => count;
</script>
```

**2、自动完成对组件的默认注册**  
在 `<script setup>` 中通过 import 引入的组件，无需手动调用 components 选项注册，就能直接在模板中使用，Vue 会自动完成组件的 “全局式局部注册”（仅当前组件可用）。模板中使用的组件名 = 导入时的变量名

```js
// 以前
<template>
  <Button /> <!-- 需先注册才能用 -->
  <PersonInfo />
</template>

<script>
// 1. 引入组件
import Button from './Button.vue';
import PersonInfo from './PersonInfo.vue';

export default {
  // 2. 手动注册组件（必须写）
  components: {
    Button, // 键值名相同时可简写
    PersonInfo
  }
};
</script>

// 现在
<template>
  <Button /> <!-- 直接用，无需注册 -->
  <PersonInfo />
</template>

<script setup>
// 仅需引入，无需手动注册
import Button from './Button.vue';
import PersonInfo from './PersonInfo.vue';
</script>
```

### ref()函数

ref() 是 Vue 3 中最核心的响应式 API 之一，专门用于为基本数据类型（数字、字符串、布尔值、null/undefined 等）创建响应式数据，也可兼容复杂类型（对象 / 数组），是 `<script setup>` 中实现数据响应式的基础工具。

#### 核心作用

解决 Vue 3 中「基本类型无法直接被 reactive 追踪响应式」的问题（因为 reactive 仅对对象 / 数组的属性劫持生效，基本类型无属性）。ref() 会将基本类型包裹成一个带 .value 属性的响应式对象（Ref 实例），通过劫持 .value 的读写操作实现响应式。

```ts
import { ref } from 'vue'

// 1. 基本类型（核心场景）
const count = ref(0) // 数字
const name = ref('张三') // 字符串
const isShow = ref(false) // 布尔值

// 2. 兼容复杂类型（虽可用，但推荐优先用 reactive）
const user = ref({ age: 18 }) // 对象
const list = ref([1, 2, 3]) // 数组

// ref对象示例
const count = ref(1)
console.log(count)
// 打印的内容：
RefImpl {dep: Dep, __v_isRef: true, __v_isShallow: false, _rawValue: 1, _value: 1}
```

#### 基本用法

1、定义响应式数据（如上面的代码块所示）  
2、修改响应式数据  
在 `<script>` 中：必须通过 .value 访问 / 修改（因为 ref 是包裹后的对象，.value 是真正存储值的属性）；
在 `<template>` 中：Vue 会自动解包（省略 .value），直接用变量名即可。

永远不要直接替换 ref 实例（xxx = ref(新值)），这和 reactive 替换对象引用同理，会切断依赖追踪；  
始终通过 .value 修改 ref 的值（xxx.value = 新值），无论值是基本类型、普通对象、reactive 对象，都能保留响应式；

```ts
// script 中修改
count.value += 1 // 正确：修改数字
name.value = '李四' // 正确：修改字符串
user.value.age = 20 // 复杂类型：先 .value 拿到对象，再改属性
list.value.push(4) // 数组同理

<template>
  <!-- 模板中自动解包，无需 .value -->
  <div>计数：{{ count }}</div>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ user.age }}</div>
</template>
```

### reactive()函数

reactive() 是 Vue 3 中核心的响应式 API，专门用于为复杂数据类型（对象、数组、Map/Set 等）创建「深度响应式对象」，是替代 Vue 2 data() 选项的核心方案之一，与 ref() 互补，共同支撑 Vue 3 的响应式系统。

#### 核心作用

通过「Proxy 代理」劫持复杂对象的属性读写、添加、删除操作（而非对象本身），实现深度响应式 —— 即对象嵌套的子属性（如 user.info.age）也会被追踪，修改时自动触发视图更新。

```ts
import { reactive } from 'vue'

// 1. 普通对象（核心场景）
const userInfo = reactive({
  name: '张三',
  age: 18,
  info: {
    // 嵌套对象，自动深度响应式
    address: '北京',
  },
})

// 2. 数组
const list = reactive([1, 2, 3, { id: 1, text: '测试' }])

// 3. 集合类型（Map/Set）
const map = reactive(new Map([['key1', 'value1']]))
const set = reactive(new Set([1, 2, 3]))

// 无需像 ref() 那样加 .value，直接修改属性 / 元素即可（因为劫持的是属性操作）
// 修改对象属性
userInfo.name = '李四'
userInfo.info.address = '上海' // 嵌套属性也生效

// 修改数组
list.push(4) // 新增元素
list[3].text = '修改后的文本' // 数组嵌套对象
list.splice(0, 1) // 数组方法正常触发响应式

// 修改 Map/Set
map.set('key2', 'value2')
set.delete(2)
```

### Vue的模板渲染/响应式追踪

Vue 的模板渲染 / 响应式依赖追踪，是在组件初始化阶段完成的：
初始化时，模板里的 `{{ obj.name }}` 若对应 `reactive` 变量，会「追踪」第一个 `reactive` 代理对象（初始的 `{ name: '初始值' }`）的属性变化；若对应 `ref` 变量，模板会自动解包为 `obj.value.name`，并「追踪」**初始 ref 实例本身的 `.value` 属性**（而非 `.value` 指向的具体对象/值）。

当执行 `obj = reactive({ name: '新值' })` 时，变量 `obj` 虽然指向了新的 Proxy 代理对象，但模板的依赖追踪依然绑定在「旧的 Proxy 对象」上；旧对象的属性没有任何变化，所以模板不会重新渲染；新对象的响应式是独立的，模板根本「不知道」它的存在。

而如果是对 ref 执行 `obj = ref({ name: '新值' })`（直接替换 ref 实例），变量 `obj` 会从指向「初始 ref 实例 A」变为指向「新的 ref 实例 B」，但模板的依赖追踪仍绑定在「旧的 ref 实例 A」上；实例 A 的 `.value` 没有任何变化，因此模板也不会重新渲染；新的 ref 实例 B 虽是响应式的，但模板无法感知到它的存在。

反之，若对 ref 执行 `obj.value = { name: '新值' }`（仅修改 `.value`），由于模板追踪的是「初始 ref 实例」的 `.value` 属性，修改该属性会触发 ref 内部的更新逻辑，模板能立即感知到变化并重新渲染。

简单说：模板只认「初始化时绑定的那个目标」—— 对 `reactive` 是「初始 Proxy 代理对象」，对 `ref` 是「初始 ref 实例」；后续变量指向新的 `reactive` 代理对象或新的 `ref` 实例，模板不会自动切换追踪目标；但修改 `ref` 实例的 `.value`（无论替换成什么值/对象），因追踪的是实例本身，模板能感知到变化。

### toRefs和toRef

toRef 和 toRefs 是 Vue 3 中专门用于处理响应式对象解构 / 取值的 API，核心作用是保留响应式链接—— 解决直接解构 reactive 响应式对象导致的 “响应式丢失” 问题

Vue 3 中，reactive 定义的响应式对象有个特点：直接解构 / 赋值会丢失响应式。比如：

```ts
import { reactive } from 'vue'

// 响应式对象
const person = reactive({ name: '张三', age: 20 })

// 直接解构：name/age变成普通值，失去响应式
const { name, age } = person

// 修改解构后的变量，不会触发视图更新
name = '李四'
// 修改原对象，解构后的变量也不会同步更新
person.age = 21
console.log(age) // 还是 20（无响应式）
```

而 toRef/toRefs 就是为了破解这个问题而生。

#### toRef：为单个属性创建响应式引用

toRef(响应式对象, '属性名')：为响应式对象的单个属性创建一个 “响应式引用（Ref）”，和原属性保持双向绑定
**特点**
1、只针对单个属性，适合只需要解构某一个属性的场景；  
2、即使原属性不存在（比如 person 中没有 gender），toRef 也会创建一个值为 undefined 的 Ref（不会报错）；  
3、返回值是 Ref 类型，必须通过 .value 访问 / 修改值（和 ref 定义的变量一致）。在模板中可直接使用（自动解包，无需 .value）。

```js
import { reactive, toRef } from 'vue'

const person = reactive({ name: '张三', age: 20 })

// 为person.age创建响应式引用
const ageRef = toRef(person, 'age')

// 方式1：修改Ref的value，原对象会同步更新（响应式）
ageRef.value = 21
console.log(person.age) // 21（同步更新）

// 方式2：修改原对象，Ref也会同步更新
person.age = 22
console.log(ageRef.value) // 22（同步更新）
```

#### toRefs：为多个属性批量创建响应式引用

toRefs(响应式对象)：把响应式对象的所有属性批量转换成 Ref 类型，返回一个新对象（每个属性都是 Ref），解构后仍保留响应式。  
**特点**  
1、批量处理所有属性，适合需要解构多个属性的场景；  
2、仅对已存在的属性创建 Ref（原对象没有的属性不会生成）；  
3、返回的新对象中，每个属性都是 Ref 类型，模板中可直接使用（自动解包，无需 .value）。

```ts
import { reactive, toRefs } from 'vue'

const person = reactive({ name: '张三', age: 20 })

// 批量转换为Ref对象
const personRefs = toRefs(person)
// 解构：name/age都是Ref类型，保留响应式
const { name, age } = personRefs

// 修改Ref，原对象同步更新
name.value = '李四'
age.value = 21
console.log(person.name) // 李四
console.log(person.age) // 21

// 修改原对象，Ref也同步更新
person.name = '王五'
console.log(name.value) // 王五
```

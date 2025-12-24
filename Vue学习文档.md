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

### v-model

v-model 是 Vue 3 专门给表单元素设计的 “双向绑定语法糖”:  
只需要把 v-model 绑定到 Vue 的响应式数据（ref/reactive 声明的），就能实现：  
✅ 数据变 → 表单显示的值自动变（数据→视图）；  
✅ 表单输入变 → 绑定的数据源自动变（视图→数据）。  
不用写任何额外的事件监听、值赋值代码，Vue 帮你全搞定。

如果不用 v-model，想实现双向绑定，你需要手动做两件事：  
把数据塞到表单里（:value）；  
监听表单输入，把新值同步回数据（@input）。

```js
// 没有用v-model实现
<template>
  <!-- 手动绑定值 + 手动监听输入 -->
  <input
    :value="msg"  <!-- 第一步：把数据给输入框 -->
    @input="msg = $event.target.value"  <!-- 第二步：输入变化时更新数据 -->
  />
  <p>你输入的是：{{ msg }}</p>
</template>

<script setup>
import { ref } from "vue";
// 响应式数据（必须用 ref/reactive，普通变量不行）
const msg = ref("");
</script>

// 使用v-model实现
<template>
  <!-- 一行搞定，不用写 :value 和 @input -->
  <input v-model="msg" />
  <p>你输入的是：{{ msg }}</p>
</template>

<script setup>
import { ref } from "vue";
const msg = ref("");
</script>
```

### computed

computed（计算属性）就是 Vue 里帮你根据已有数据算出新数据的 “懒人工具”—— 它会自动监听依赖的原始数据，一旦原始数据变了，它算出来的结果也会自动更新，而且还会缓存结果，不用重复计算。  
同样的方式 方法 没有缓存，需要重新计算

```js
<template>
  <!-- 直接用，和普通变量一样，不用加括号 -->
  <div>1元硬币数量：<input v-model.number="coin1" type="number" /></div>
  <div>5元纸币数量：<input v-model.number="bill5" type="number" /></div>
  <div>总钱数：{{ totalMoney }}</div>
</template>

<script setup>
// 1. 先导入需要的工具：ref（定义响应式数据）、computed（定义计算属性）
import { ref, computed } from 'vue';

// 2. 定义原始响应式数据（存钱罐数量）
// ref 是 Vue3 定义简单数据（数字/字符串）的方式，.value 是它的特点
const coin1 = ref(10); // 初始10个1元硬币
const bill5 = ref(5);  // 初始5张5元纸币

// 3. 定义计算属性 totalMoney
// 只读的计算属性：只能根据 FirstName/LastName 算结果，不能直接改 FullName
const totalMoney = computed(() => {
  // 依赖 coin1 和 bill5，只要这两个变了，这里自动重新算
  // 注意：ref 定义的变量，在 computed 里要用 .value 取值
  return coin1.value * 1 + bill5.value * 5;
});
// 同样功能的方法，没有缓存
function totalMoney1 (){
  return coin1.value * 1 + bill5.value * 5;
}
</script>
```

computed 计算属性默认是只读的，但可以通过配置 get/set 方法变成「可读写」的

```ts
<script setup>
import { ref, computed } from 'vue';
const FirstName = ref('');
const LastName = ref('');

// 只读的计算属性：只能根据 FirstName/LastName 算结果，不能直接改 FullName
const FullName = computed(() => FirstName.value + LastName.value);
</script>
```

此时如果你尝试直接修改 FullName.value = '张三'，Vue 会报警告，而且修改无效 —— 因为只读计算属性只有 “读取逻辑”，没有 “修改逻辑”  
如果想让 FullName 支持「直接修改」（比如输入 “张三”，自动拆分出姓和名），可以给 computed 传一个包含 get（读取）和 set（修改）的对象

```ts
<template>
  姓：<input type="text" v-model="FirstName" /> <br />
  名：<input type="text" v-model="LastName" /> <br />
  全名：<input type="text" v-model="FullName" />
</template>

<script setup>
import { ref, computed } from 'vue';
const FirstName = ref('');
const LastName = ref('');

// 可读写的计算属性
const FullName = computed({
  // 1. get 方法：读取时的逻辑（和只读版一样，拼接姓名）
  get() {
    return FirstName.value + LastName.value;
  },
  // 2. set 方法：修改 FullName 时触发的逻辑（拆分姓名）
  // newValue 就是你修改「全名」输入框时输入的新值—— 比如你在 “全名” 框里输入 “李四”，newValue 就等于字符串 "李四"；清空输入框，newValue 就是空字符串 ""
  // 它是 Vue 自动传给 set 方法的，不用你手动定义，作用就是 “告诉 set 方法：用户想把 FullName 改成这个值”。
  set(newValue) {
    // 示例：假设输入的“全名”是“张三”，拆分为姓“张”、名“三”
    if (newValue.length >= 1) {
      FirstName.value = newValue.slice(0, 1); // 取第一个字当姓
      LastName.value = newValue.slice(1);     // 剩下的当名
    } else {
      FirstName.value = '';
      LastName.value = '';
    }
  }
});
</script>
```

可写计算属性的 set 方法必须接收一个参数（newValue），表示 “要修改成的新值”；  
set 方法里不要直接改计算属性本身（比如 FullName.value = xxx），会导致死循环；  
即使是可写计算属性，依然有「缓存特性」—— 只要依赖的原始数据（FirstName/LastName）不变，get 方法不会重复执行。

### watch

watch: 核心是 Vue 中用于监听数据变化并执行对应操作的工具

举个例子：
把 watch 想象成 “数据监视器”：  
你指定一个需要关注的 “数据目标”（比如一个变量、一个对象属性）；  
当这个 “数据目标” 发生实质性变化时，watch 会自动触发你预先写好的 “处理函数”；  
常用于数据变化后做异步操作、复杂逻辑处理（比如请求接口、修改其他关联数据、操作 DOM 等）。  
比如：监听用户输入的搜索关键词，当关键词变化时，自动发起搜索请求获取结果，这就是 watch 的典型场景。

watch能监视以下四种数据：  
（1）ref定义的数据  
（2）reactive定义的数据  
（3）函数返回一个值（getter函数）  
（4）一个包含上述内容的数组

**（1）监视ref定义的数据**

监听 基础类型 `ref（ref(10)、ref('张三')）`：直接传入 ref 变量即可，无需额外配置。  
监听 对象类型 `ref（ref({ name: '张三' })）`：默认是浅监听，需手动配置 `{ deep: true }` 才能监听内部属性变化。  
监听时无需通过 .value 访问（watch 内部会自动解析 ref 的 .value）。

```ts
<template>
  <!-- 绑定一个输入框，修改 msg 的值 -->
  <input v-model="msg" placeholder="输入内容测试watch" />
</template>

<script setup>
// 1. 导入 watch（Vue3 组合式 API 需要手动导入）
import { ref, watch } from 'vue';

// 2. 定义需要被监听的数据（ref 定义基本类型数据）
const msg = ref('初始值');

// 3. 使用 watch 监听 msg 的变化
const x = watch(
  // 第一个参数：监听的目标（这里直接传入 ref 变量）
  msg,
  // 第二个参数：数据变化后的处理函数（newVal 新值，oldVal 旧值）
  (newVal, oldVal) => {
    console.log(`msg 变了！旧值：${oldVal}，新值：${newVal}`);
    // 这里可以写复杂逻辑：比如请求接口、修改其他数据等
    if (newVal.length > 5) {
      console.log('输入内容超过5个字啦！');
    }
  }
)
// 监听对象类型 ref（需 deep: true 深度监听）
const user = ref({
  name: '张三',
  age: 20
})
watch(user, (newVal, oldVal) => {
  console.log('user变化了', newVal, oldVal) // newVal/oldVal 是 user.value（对象）
}, { deep: true }) // 必须加 deep: true，否则修改内部属性不触发
user.value.name = '李四' // 触发回调

console.log(x)
// 打印的内容如下：
// () => {
//     effect2.stop();
//     if (scope && scope.active) {
//       remove(scope.effects, effect2);
//     }
//   }
// 是停止监视的函数，想要停止监视就自己调用自己，下面是一个例子

const stopWatch = watch(
  // 第一个参数：监听的目标（这里直接传入 ref 变量）
  msg,
  // 第二个参数：数据变化后的处理函数（newVal 新值，oldVal 旧值）
  (newVal, oldVal) => {
    console.log(`msg 变了！旧值：${oldVal}，新值：${newVal}`);
    // 这里可以写复杂逻辑：比如请求接口、修改其他数据等
    if (newVal.length > 5) {
      console.log('输入内容超过5个字啦！现在停止监视');
      stopWatch()
    }
  }
)

</script>
```

**（2）监听reactive 定义的数据**  
直接监听 整个 reactive 对象：默认是深度监听，无需配置 `{ deep: true }`（配置了也无效，属于多余操作）。  
监听时无法获取正确的 oldVal（由于 reactive 的响应式机制，newVal 和 oldVal 会指向同一个对象，旧值会被新值覆盖）。  
若只需监听 reactive 对象的某个属性，建议使用「getter 函数」（对应第三种类型），而非直接监听整个对象。

```ts
import { reactive, watch } from 'vue'

const person = reactive({
  name: '张三',
  address: {
    city: '北京',
  },
})

// 直接监听 reactive 整个对象（默认深度监听）
watch(person, (newVal, oldVal) => {
  console.log('person变化了', newVal, oldVal)
  console.log(newVal === oldVal) // true，旧值和新值指向同一个对象
})

// 以下修改都会触发回调（深度监听特性）
person.name = '李四' // 第一层属性修改
person.address.city = '上海' // 嵌套属性修改
```

**（3）监视函数返回一个值（getter函数）**  
适用场景：精准监听 reactive 对象的单个属性 / 嵌套属性、监听多个数据的组合值、监听计算后的衍生值。  
监听逻辑：watch 会监听该函数返回值的变化，只有返回值改变时，才会触发回调。  
监听对象属性时：默认是浅监听，若返回的是对象 / 数组，需配置 { deep: true } 才能监听其内部变化。

```ts
import { reactive, ref, watch } from 'vue'

const person = reactive({
  name: '张三',
  address: {
    city: '北京',
  },
})
const count = ref(0)

// 1. 精准监听 reactive 对象的单个属性（基础类型）
watch(
  () => person.name,
  (newVal, oldVal) => {
    console.log('姓名变化了', newVal, oldVal) // 能获取正确的旧值
  },
)
person.name = '李四' // 触发回调

// 2. 精准监听 reactive 对象的嵌套属性（对象类型，需 deep: true）
watch(
  () => person.address,
  (newVal, oldVal) => {
    console.log('地址变化了', newVal, oldVal)
  },
  { deep: true },
)
person.address.city = '上海' // 触发回调

// 3. 监听多个数据的组合值
watch(
  () => `${person.name}-${count.value}`,
  (newVal, oldVal) => {
    console.log('组合值变化了', newVal, oldVal)
  },
)
count.value++ // 触发回调，组合值从 "张三-0" 变为 "张三-1"
```

**（4）监视一个包含上述内容的数组**  
当需要同时监听多个独立的数据，且希望它们中任意一个发生变化时都触发同一个回调，就可以使用「数组」作为 watch 的第一个参数  
数组中的每一项：可以是 ref 变量、reactive 对象、getter 函数，支持混合搭配。  
回调参数：newValue 和 oldValue 也会变成数组，数组顺序和监听的数组顺序一一对应。  
触发条件：数组中任意一个数据发生变化，都会触发回调函数。

```ts
import { ref, reactive, watch } from 'vue'

const count = ref(0)
const person = reactive({ name: '张三' })
const msg = ref('hello')

// 监听包含多种类型的数组
watch(
  [count, () => person.name, msg], // 数组项：ref + getter 函数 + ref
  (newValues, oldValues) => {
    console.log('有数据变化了')
    console.log('新值数组：', newValues) // [1, '李四', 'hi']（对应监听项顺序）
    console.log('旧值数组：', oldValues) // [0, '张三', 'hello']
  },
)

// 任意一个数据变化都会触发回调
count.value++ // 触发
person.name = '李四' // 触发
msg.value = 'hi' // 触发
```

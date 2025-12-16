import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 翻译：去「./App.vue」这个文件路径里，把里面的 Vue 组件对象拿出来，
// 然后在当前代码里，给这个组件对象起个名字叫「App」
// 「文件叫 App.vue → 只能用 App 作为变量名」→ 这是完全错误的！
// App 是你给 App.vue 这个文件对应的组件对象，起的变量名」，而不是「App.vue 天生就叫 App
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
